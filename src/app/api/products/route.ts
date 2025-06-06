import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';
import { ProductType } from '@/types/product.type';
import { GetManyType } from '@/types/get-many.type';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);

		// Get pagination parameters with defaults (16-25 items per page as per requirements)
		let page = parseInt(searchParams.get('page') || '1');
		let limit = parseInt(searchParams.get('limit') || '20');

		// Validate pagination parameters
		if (page < 1) {
			page = 1;
		}
		if (limit < 1 || limit > 25) {
			limit = 20;
		}

		const products: ProductType[] = productsData.products;
		const totalCount = products.length;

		// Calculate pagination
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;
		const paginatedProducts = products.slice(startIndex, endIndex);

		// Prepare response in GetManyType format
		const response: GetManyType<ProductType> = {
			data: paginatedProducts,
			count: totalCount
		};

		// Add pagination metadata to headers for client convenience
		const headers = new Headers();
		headers.set('X-Total-Count', totalCount.toString());
		headers.set('X-Page', page.toString());
		headers.set('X-Limit', limit.toString());
		headers.set('X-Total-Pages', Math.ceil(totalCount / limit).toString());
		headers.set('X-Has-Next-Page', (endIndex < totalCount).toString());
		headers.set('X-Has-Previous-Page', (page > 1).toString());

		return NextResponse.json(response, { headers });

	} catch (error) {
		console.error('Error fetching products:', error);
		return NextResponse.json(
			{ message: 'Internal server error while fetching products' },
			{ status: 500 }
		);
	}
}