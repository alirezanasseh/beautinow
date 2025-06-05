import React from 'react';
import footerMenu from '@/data/footer-menu';
import Image from 'next/image';

export default function FooterMenu() {
	return (
		<div className="grid grid-cols-5 px-8 pb-1 border-b-1 border-gray-300">
			{footerMenu.map((item, index) => (
				<div key={index}>
					<h3 className="text-md mb-2 uppercase">{item.name}</h3>
					<ul className="list-none p-0">
						{item.children.map((child, childIndex) => (
							<li key={childIndex} className="mb-1">
								<a href="#" className="text-sm font-light hover:underline">
									{child.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
			<div>
				<Image
					src="https://cdn4.beautinow.com/wp-content/uploads/2024/10/white-on-transparent.svg"
					alt="Beautinow Logo"
					width={108}
					height={25}
					className="mb-2"
				/>
				<Image
					src="/trustpilot.png"
					alt="Trustpilot"
					width={134}
					height={96}
				/>
			</div>
		</div>
	);
}
