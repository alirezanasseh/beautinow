import { MenuType } from '@/types/menu.type';

const footerMenu: MenuType = [
	{
		id: 'shop',
		name: 'Shop',
		icon: 'Headset',
		children: [
			{
				id: 'perfumes',
				name: 'Perfumes',
			},
			{
				id: 'skincare',
				name: 'Skincare',
			},
			{
				id: 'hair',
				name: 'Hair',
			},
			{
				id: 'make-up',
				name: 'Make up',
			},
			{
				id: 'best-sellers',
				name: 'Best Sellers',
			},
			{
				id: 'new-arrivals',
				name: 'New Arrivals',
			},
		],
	},
	{
		id: 'collections',
		name: 'Collections',
		icon: 'Collection',
		children: [
			{
				id: 'perfume-brand-list',
				name: 'Perfume Brand List',
			},
			{
				id: 'beauty-brand-list',
				name: 'Beauty Brand List',
			},
			{
				id: 'perfumers-list',
				name: 'Perfumers List',
			},
			{
				id: 'seasonal-perfumes',
				name: 'Seasonal Perfumes',
			},
			{
				id: 'perfumes-by-mood',
				name: 'Perfumes by Mood',
			},
			{
				id: 'perfume-by-notes',
				name: 'Perfume by Notes',
			},
		],
	},
	{
		id: 'customer-service',
		name: 'Customer Service',
		icon: 'Headset',
		children: [
			{
				id: 'shipping-delivery',
				name: 'Shipping & Delivery',
			},
			{
				id: 'return-refund-policy',
				name: 'Return & Refund Policy',
			},
			{
				id: 'terms-of-service',
				name: 'Terms of Service',
			},
			{
				id: 'privacy-policy',
				name: 'Privacy Policy',
			},
			{
				id: 'faq',
				name: 'FAQ',
			},
			{
				id: 'contact-us',
				name: 'Contact Us',
			},
			{
				id: 'about-us',
				name: 'About Us',
			},
		],
	},
	{
		id: 'more-information',
		name: 'More Information',
		icon: 'Info',
		children: [
			{
				id: 'loyalty-rewards',
				name: 'Loyalty Rewards',
			},
			{
				id: 'perfume-magazine-blog',
				name: 'Perfume Magazine/Blog',
			},
			{
				id: 'beauty-blog',
				name: 'Beauty Blog',
			},
			{
				id: 'perfume-distributors',
				name: 'Perfume Distributors',
			},
			{
				id: 'layering-perfume',
				name: 'Layering Perfume',
			},
			{
				id: 'perfume-concentrations',
				name: 'Perfume Concentrations',
			},
		],
	},
];

export default footerMenu;