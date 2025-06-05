import React from 'react';
import currencies from '@/data/currencies.json';

export default function FooterCurrencies() {
	return (
		<div className="flex gap-4 p-8 border-b-1 border-gray-300">
			{currencies.map((currency, index) => (
				<div key={index}>{currency}</div>
			))}
		</div>
	);
}
