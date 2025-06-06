import React from 'react';
import Image from 'next/image';
import { ProductType } from '@/types/product.type';

interface ProductCardProps {
	product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
	const primaryImage = product.images[0]?.[0] || '';
	const hasDiscount = product.min_reg_price > product.min_price;
	const discountPercentage = hasDiscount
		? Math.round(((product.min_reg_price - product.min_price) / product.min_reg_price) * 100)
		: 0;

	const formatPrice = (price: number) => `€${price.toFixed(2)}`;

	const priceDisplay = product.min_price === product.max_price
		? formatPrice(product.min_price)
		: `${formatPrice(product.min_price)} – ${formatPrice(product.max_price)}`;

	const regularPriceDisplay = hasDiscount && product.min_reg_price === product.max_reg_price
		? formatPrice(product.min_reg_price)
		: hasDiscount
			? `${formatPrice(product.min_reg_price)} – ${formatPrice(product.max_reg_price)}`
			: '';

	return (
		<div className="group cursor-pointer">
			{/* Product Image */}
			<div className="relative aspect-square mb-3 overflow-hidden bg-gray-100">
				{primaryImage && (
					<Image
						src={primaryImage}
						alt={product.name}
						className="object-cover group-hover:scale-105 transition-transform duration-300"
						sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
						width={288}
						height={288}
					/>
				)}

				{/* Discount Badge */}
				{hasDiscount && (
					<div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
						-{discountPercentage}%
					</div>
				)}

				{/* Quick actions overlay */}
				<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 flex items-center justify-center">
					<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
						<button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors block w-full">
							Quick View
						</button>
						<button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors block w-full">
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			{/* Product Info */}
			<div className="space-y-1">
				{/* Brand */}
				<p className="text-xs text-gray-600 uppercase tracking-wide">{product.brand}</p>

				{/* Product Name */}
				<h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
					{product.name}
				</h3>

				{/* Price */}
				<div className="flex items-center space-x-2">
					<span className="font-bold text-sm text-black">{priceDisplay}</span>
					{regularPriceDisplay && (
						<span className="text-xs text-gray-500 line-through">
							{regularPriceDisplay}
						</span>
					)}
				</div>

				{/* Size variants if available */}
				{product.variations.length > 0 && (
					<p className="text-xs text-gray-500">
						{product.variations.map(v => v.name).join(', ')}
					</p>
				)}
			</div>
		</div>
	);
}