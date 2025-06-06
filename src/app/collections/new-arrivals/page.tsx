'use client';

import useGetProductsApi from '@/app/collections/new-arrivals/api/get-products.api';
import React from 'react';
import ProductCard from '@/app/collections/new-arrivals/components/product-card';
import Pagination from '@/app/components/pagination';
import { ProductType } from '@/types/product.type';

export default function NewArrivals() {
	const [products, setProducts] = React.useState<ProductType[]>([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [totalItems, setTotalItems] = React.useState(0);
	const { getProducts, loading, error } = useGetProductsApi();

	const itemsPerPage = 20;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const fetchProducts = React.useCallback(async (page: number) => {
		try {
			const response = await getProducts({
				page,
				limit: itemsPerPage
			});

			if (response) {
				setProducts(response.data);
				setTotalItems(response.count);
			}
		} catch (err) {
			console.error('Failed to fetch products:', err);
		}
	}, [getProducts]);

	React.useEffect(() => {
		fetchProducts(currentPage);
	}, [currentPage, fetchProducts]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (loading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-8">New Arrivals</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
					{Array.from({ length: 20 }, (_, i) => (
						<div key={i} className="animate-pulse">
							<div className="bg-gray-200 aspect-square rounded mb-2"></div>
							<div className="h-4 bg-gray-200 rounded mb-1"></div>
							<div className="h-3 bg-gray-200 rounded w-2/3"></div>
						</div>
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-8">New Arrivals</h1>
				<div className="text-center text-red-600">
					Error loading products: {error}
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-8">New Arrivals</h1>

			{/* Products Grid */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	);
}