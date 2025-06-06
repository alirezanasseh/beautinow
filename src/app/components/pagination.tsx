import React from 'react';

interface SimplePaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: SimplePaginationProps) {
	const getVisiblePages = () => {
		const pages = [];
		const maxVisible = 5;

		let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
		const end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	};

	return (
		<div className="flex justify-center items-center space-x-2 mt-8">
			{/* Previous button */}
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-4 py-2 text-sm border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
			>
				Previous
			</button>

			{/* Page numbers */}
			{getVisiblePages().map(page => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`px-3 py-2 text-sm border border-gray-300 transition-colors ${
						page === currentPage
							? 'bg-black text-white border-black'
							: 'bg-white hover:bg-gray-50'
					}`}
				>
					{page}
				</button>
			))}

			{/* Next button */}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="px-4 py-2 text-sm border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
			>
				Next
			</button>
		</div>
	);
}