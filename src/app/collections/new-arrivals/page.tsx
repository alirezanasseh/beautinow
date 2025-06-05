'use client';

import useGetProductsApi from '@/app/collections/new-arrivals/api/get-products.api';
import React from 'react';
import Filter from '@/app/collections/new-arrivals/components/filter';

export default function NewArrivals() {
	const [products, setProducts] = React.useState([]);
	const { getProducts, loading, error } = useGetProductsApi();

	React.useEffect(() => {
		getProducts()
			.then((data) => {
				if (data) {
					setProducts(data.data);
				}
			})
	}, []);

	return (
		<div>
			<Filter />
			{loading && <p>Loading products...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && products.length === 0 && <p>No new arrivals found.</p>}
			{!loading && !error && products.length > 0 && (
				<div>
					{products.map((product) => (
						<div key={product.id}>
							<h2>{product.name}</h2>
							<p>{product.description}</p>
							<p>Price: ${product.price}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}