import React from 'react';
import Image from 'next/image';

export default function PaymentPartners() {
	const partners = [
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/1-5.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/3-5.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/4-4.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/5-3.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/2-7.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/6-1.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/8.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/7.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/10.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/9.webp",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/02/11.webp"
	];

	return (
		<div className="flex justify-between p-8">
			<div>
				<Image
					src="https://cdn4.beautinow.com/wp-content/uploads/2024/10/white-on-transparent.svg"
					alt="BeautiNow Logo"
					width={155}
					height={35}
				/>
			</div>
			<div className="flex flex-row">
				{partners.map((partner, index) => (
					<Image
						src={partner}
						alt="Payment Partner"
						key={index}
						width={53}
						height={35}
					/>
				))}
			</div>
		</div>
	);
}
