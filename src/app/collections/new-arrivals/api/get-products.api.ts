import useApi from '@/hooks/api.hook';
import { ProductType } from '@/types/product.type';
import { GetManyType } from '@/types/get-many.type';

export default function useGetProductsApi() {
	const { request, loading, error } = useApi<GetManyType<ProductType>>();

	const getProducts = () => {
		return request({ endpoint: '/products' });
	};

	return { getProducts, loading, error };
}