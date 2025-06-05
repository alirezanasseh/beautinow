import { useState } from 'react';
import { apiFetch } from '@/lib/api-fetch';

export default function useApi<T>() {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const request = async (params: {
		endpoint: string;
		options?: RequestInit;
		noDefaultHeaders?: boolean;
	}) => {
		const { endpoint, options, noDefaultHeaders } = params;
		try {
			setLoading(true);
			setError(null);

			const response = await apiFetch<T>({
				endpoint,
				options,
				noDefaultHeaders,
			});

			return response.data;
		} catch (err) {
			let message: string;
			if (err instanceof Error) {
				message = err.message;
			} else {
				message = String(err);
			}
			setError(message);
			throw err; // Re-throw to allow error handling in calling code
		} finally {
			setLoading(false);
		}
	};

	return { error, loading, request };
}
