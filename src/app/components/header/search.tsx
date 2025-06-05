'use client';

import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
	return (
		<div className="flex relative">
			<input
				type="text"
				name="search"
				placeholder="Search for products"
				className="border-2 border-gray-200 px-4 py-2 text-md w-72"
			/>
			<button className="absolute right-2 top-2 cursor-pointer" onClick={() => alert('Search functionality not implemented yet')}>
				<SearchIcon className="text-gray-400" />
			</button>
		</div>
	);
}
