import { PaginationMetaType } from '@/types/pagination-meta.type';

export default function getPaginationMeta(headers: Headers): PaginationMetaType | null {
	try {
		return {
			totalCount: parseInt(headers.get('X-Total-Count') || '0'),
			page: parseInt(headers.get('X-Page') || '1'),
			limit: parseInt(headers.get('X-Limit') || '20'),
			totalPages: parseInt(headers.get('X-Total-Pages') || '1'),
			hasNextPage: headers.get('X-Has-Next-Page') === 'true',
			hasPreviousPage: headers.get('X-Has-Previous-Page') === 'true'
		};
	} catch {
		return null;
	}
}