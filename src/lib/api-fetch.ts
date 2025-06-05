const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ApiResponse<T> {
  data: T;
  headers: Headers;
}

export async function apiFetch<T>(params: {
  endpoint: string;
  options?: RequestInit;
  noDefaultHeaders?: boolean;
}): Promise<ApiResponse<T>> {
  const { endpoint, options, noDefaultHeaders } = params;
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        ...(noDefaultHeaders ? {} : defaultHeaders),
        ...(options?.headers ?? {}),
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'An unknown error occurred',
      }));
      let message: string;
      if (errorData.message) {
        message = errorData.message;
      } else {
        message = String(errorData);
      }

      throw new Error(message);
    }

    const data = await response.json();
    return {
      data: data as T,
      headers: response.headers,
    };
  } catch (error) {
    throw error;
  }
}
