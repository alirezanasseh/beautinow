import React from 'react';
import currencies from '@/data/currencies.json';

export default function CurrencyDropdown() {
	return (
		<div>
			<select className="rounded-none border-1 border-gray-200 pl-3 py-1 font-bold text-sm">
				{currencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}
			</select>
		</div>
	);
}
