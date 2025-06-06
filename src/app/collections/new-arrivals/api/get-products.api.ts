import useApi from '@/hooks/api.hook';
import { ProductType } from '@/types/product.type';
import { GetManyType } from '@/types/get-many.type';

export interface GetProductsParams {
	page?: number;
	limit?: number;
}

export default function useGetProductsApi() {
	const { request, loading, error } = useApi<GetManyType<ProductType>>();

	const getProducts = async (params?: GetProductsParams) => {
		const searchParams = new URLSearchParams();
		if (params?.page) {
			searchParams.append('page', params.page.toString());
		}
		if (params?.limit) {
			searchParams.append('limit', params.limit.toString());
		}

		const endpoint = `/api/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

		return await request({
			endpoint,
			options: { method: 'GET' }
		});
	};

	return { getProducts, loading, error };
}