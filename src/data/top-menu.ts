import { MenuType } from '@/types/menu.type';

const topMenu: MenuType = [
	{
		id: 'new-arrivals',
		name: 'New Arrivals',
	},
	{
		id: 'brands',
		name: 'Brands',
		children: [
			{
				id: 'popular-perfume-brands',
				name: 'Popular Perfume Brands',
				children: [
					{
						id: 'amouage',
						name: 'Amouage'
					},
					{
						id: 'the-merchant-of-venice',
						name: 'The Merchant of Venice'
					},
					{
						id: 'xerjoff',
						name: 'Xerjoff'
					},
					{
						id: 'clive-christian',
						name: 'Clive Christian'
					},
					{
						id: 'initio-parfums-prives',
						name: 'Initio Parfums Privés'
					},
					{
						id: 'nishane',
						name: 'Nishane'
					},
					{
						id: 'floraiku',
						name: 'Floraïku'
					},
					{
						id: 'liquides-imaginaires',
						name: 'Liquides Imaginaires'
					},
					{
						id: 'all-popular-brands',
						name: '→ All Popular Brands'
					}
				]
			},
			{
				id: 'luxury-perfume-brands',
				name: 'Luxury Perfume Brands',
				children: [
					{
						id: 'by-kilian',
						name: 'By Kilian'
					},
					{
						id: 'electimuss-london',
						name: 'Electimuss London'
					},
					{
						id: 'roja-dove',
						name: 'Roja Dove'
					},
					{
						id: 'parfums-de-marly',
						name: 'Parfums de Marly'
					},
					{
						id: 'fragrance-du-bois',
						name: 'Fragrance du Bois'
					},
					{
						id: 'frederic-malle',
						name: 'Frederic Malle'
					},
					{
						id: 'ormonde-jayne',
						name: 'Ormonde Jayne'
					},
					{
						id: 'the-spirit-of-dubai',
						name: 'The Spirit Of Dubai'
					},
					{
						id: 'all-luxury',
						name: '→ All Luxury'
					}
				]
			},
			{
				id: 'affordable-perfume-brands',
				name: 'Affordable Perfume Brands',
				children: [
					{
						id: 'gritti',
						name: 'Gritti'
					},
					{
						id: 'bdk-parfums',
						name: 'BDK Parfums'
					},
					{
						id: 'bohoboco',
						name: 'Bohoboco'
					},
					{
						id: 'imaginary-authors',
						name: 'Imaginary Authors'
					},
					{
						id: 'kajal-perfumes',
						name: 'Kajal Perfumes'
					},
					{
						id: 'atelier-des-ors',
						name: 'Atelier Des Ors'
					},
					{
						id: 'nobile-1942',
						name: 'Nobile 1942'
					},
					{
						id: 'the-different-company',
						name: 'The Different Company'
					}
				]
			},
			{
				id: 'hair-care',
				name: 'Hair Care',
				children: [
					{
						id: 'bumble-and-bumble',
						name: 'Bumble and Bumble'
					},
					{
						id: 'kevin-murphy',
						name: 'Kevin Murphy'
					},
					{
						id: 'christophe-robin',
						name: 'Christophe Robin'
					},
					{
						id: 'philip-kingsley',
						name: 'Philip Kingsley'
					},
					{
						id: 'sachajuan',
						name: 'Sachajuan'
					},
					{
						id: 'kerastase',
						name: 'Kerastase'
					},
					{
						id: 'aveda',
						name: 'Aveda'
					},
					{
						id: 'chi',
						name: 'CHI'
					},
					{
						id: 'all-hair-care-brands',
						name: '→ All Brands'
					}
				]
			},
			{
				id: 'skin-and-body-care',
				name: 'Skin & Body Care',
				children: [
					{
						id: 'skin1004',
						name: 'SKIN1004'
					},
					{
						id: 'the-body-shop',
						name: 'The Body Shop'
					},
					{
						id: 'nuxe',
						name: 'Nuxe'
					},
					{
						id: 'la-roche-posay',
						name: 'La Roche-Posay'
					},
					{
						id: 'rituals',
						name: 'Rituals'
					},
					{
						id: 'jurlique',
						name: 'Jurlique'
					},
					{
						id: 'dr-sebagh',
						name: 'Dr Sebagh'
					},
					{
						id: 'sensai',
						name: 'Sensai'
					},
					{
						id: 'all-skin-and-body-care-brands',
						name: '→ All Brands'
					}
				]
			},
			{
				id: 'make-up',
				name: 'Make-up',
				children: [
					{
						id: 'benefit',
						name: 'Benefit'
					},
					{
						id: 'anastasia-beverly-hills',
						name: 'Anastasia Beverly Hills'
					},
					{
						id: 'lancome',
						name: 'Lancome'
					},
					{
						id: 'dior',
						name: 'Dior'
					},
					{
						id: 'mac',
						name: 'MAC'
					},
					{
						id: 'yves-saint-laurent',
						name: 'Yves Saint Laurent'
					},
					{
						id: 'giorgio-armani',
						name: 'Giorgio Armani'
					},
					{
						id: 'all-make-up-brands',
						name: '→ All Brands'
					}
				]
			}
		]
	},
	{
		id: 'fragrances',
		name: 'Fragrances',
		children: [
			{
				id: 'women-perfumes',
				name: 'Women Perfumes',
				children: [
					{
						id: 'best-women-perfumes',
						name: 'Best Women Perfumes'
					},
					{
						id: 'all-womens-fragrances',
						name: '→ All Women’s Fragrances'
					}
				]
			},
			{
				id: 'men-perfumes',
				name: 'Men Perfumes',
				children: [
					{
						id: 'best-men-perfumes',
						name: 'Best Men Perfumes'
					},
					{
						id: 'all-mens-fragrances',
						name: '→ All Men’s Fragrances'
					}
				]
			},
			{
				id: 'unisex-perfumes',
				name: 'Unisex Perfumes',
				children: [
					{
						id: 'best-unisex-perfumes',
						name: 'Best Unisex Perfumes'
					},
					{
						id: 'all-unisex-fragrances',
						name: '→ All Unisex Fragrances'
					}
				]
			},
			{
				id: 'home-and-lifestyle',
				name: 'Home & Lifestyle',
				children: [
					{
						id: 'home-and-life-style',
						name: 'Home & Life Style'
					}
				]
			},
			{
				id: 'perfumed-cosmetics',
				name: 'Perfumed Cosmetics',
				children: [
					{
						id: 'body-spray-and-mist',
						name: 'Body Spray & Mist'
					}
				]
			},
			{
				id: 'trend-collections',
				name: 'Trend Collections',
				children: [
					{
						id: 'spring-fragrances',
						name: 'Spring Fragrances'
					},
					{
						id: 'perfume-samples',
						name: 'Perfume Samples'
					},
					{
						id: 'arabian-perfumes',
						name: 'Arabian Perfumes'
					},
					{
						id: 'designer-perfume-brands',
						name: 'Designer Perfume Brands'
					},
					{
						id: 'gift-sets',
						name: 'Gift Sets'
					},
					{
						id: 'surprise-box',
						name: 'Surprise Box'
					}
				]
			},
			{
				id: 'new-arrivals-and-sale',
				name: 'New Arrivals & Sale',
				children: [
					{
						id: 'new-perfumes',
						name: 'New Perfumes'
					},
					{
						id: 'anniversary',
						name: 'Anniversary'
					}
				]
			},
			{
				id: 'all-products',
				name: 'All Products',
				children: [
					{
						id: 'all-perfumes',
						name: 'All Perfumes'
					}
				]
			},
			{
				id: 'popular-perfume-brands',
				name: 'Popular Perfume Brands',
				children: [
					{
						id: 'amouage',
						name: 'Amouage'
					},
					{
						id: 'the-merchant-of-venice',
						name: 'The Merchant of Venice'
					},
					{
						id: 'xerjoff',
						name: 'Xerjoff'
					},
					{
						id: 'clive-christian',
						name: 'Clive Christian'
					},
					{
						id: 'initio-parfums-prives',
						name: 'Initio Parfums Privés'
					},
					{
						id: 'nishane',
						name: 'Nishane'
					},
					{
						id: 'floraiku',
						name: 'Floraïku'
					},
					{
						id: 'liquides-imaginaires',
						name: 'Liquides Imaginaires'
					},
					{
						id: 'all-popular-perfume-brands',
						name: '→ Popular Brands'
					}
				]
			}
		]
	},
	{
		id: 'hair-care',
		name: 'Hair Care',
		children: [
			{
				id: 'hair-care',
				name: 'Hair Care',
				children: [
					{
						id: 'shampoo',
						name: 'Shampoo'
					},
					{
						id: 'hair-treatments',
						name: 'Hair Treatments'
					},
					{
						id: 'hair-conditioner',
						name: 'Hair Conditioner'
					},
					{
						id: 'hair-perfume-and-mist-sprays',
						name: 'Hair Perfume & Mist Sprays'
					},
					{
						id: 'hair-gift-sets',
						name: 'Hair Gift Sets'
					},
					{
						id: 'all-hair-care-products',
						name: '→ All Hair Care'
					}
				]
			},
			{
				id: 'favorite-brands',
				name: 'Favorite Brands',
				children: [
					{
						id: 'bumble-and-bumble',
						name: 'Bumble and Bumble'
					},
					{
						id: 'kevin-murphy',
						name: 'Kevin Murphy'
					},
					{
						id: 'christophe-robin',
						name: 'Christophe Robin'
					},
					{
						id: 'philip-kingsley',
						name: 'Philip Kingsley'
					},
					{
						id: 'sachajuan',
						name: 'Sachajuan'
					},
					{
						id: 'kerastase',
						name: 'Kerastase'
					},
					{
						id: 'aveda',
						name: 'Aveda'
					},
					{
						id: 'chi',
						name: 'CHI'
					},
					{
						id: 'all-hair-care-brands',
						name: '→ All Brands'
					}
				]
			}
		]
	},
	{
		id: 'skin-and-body-care',
		name: 'Skin & Body Care',
		children: [
			{
				id: 'skin-care',
				name: 'Skin Care',
				children: [
					{
						id: 'moisturizers',
						name: 'Moisturizers'
					},
					{
						id: 'cleansers',
						name: 'Cleansers'
					},
					{
						id: 'serums',
						name: 'Serums'
					},
					{
						id: 'toners',
						name: 'Toners'
					},
					{
						id: 'eye-care',
						name: 'Eye Care'
					},
					{
						id: 'masks',
						name: 'Masks'
					},
					{
						id: 'other-facial-treatments',
						name: 'Other Facial Treatments'
					},
					{
						id: 'lip-balms-and-care',
						name: 'Lip Balms & Care'
					},
					{
						id: 'all-skin-care-products',
						name: '→ All Skin care'
					}
				]
			},
			{
				id: 'body-care',
				name: 'Body Care',
				children: [
					{
						id: 'body-creams-and-butters',
						name: 'Body Creams & Butters'
					},
					{
						id: 'shower-gel',
						name: 'Shower Gel'
					},
					{
						id: 'hand-cream-and-hand-balm',
						name: 'Hand Cream & Hand Balm'
					},
					{
						id: 'body-spray-and-mist',
						name: 'Body Spray & Mist'
					},
					{
						id: 'deodorant',
						name: 'Deodorant'
					},
					{
						id: 'toothpaste',
						name: 'Toothpaste'
					},
					{
						id: 'all-body-care-products',
						name: '→ All Body care'
					}
				]
			},
			{
				id: 'care-sets',
				name: 'Care Sets'
			},
			{
				id: 'baby-and-child-skin-care',
				name: 'Baby & Child Skin Care'
			},
			{
				id: 'sunscreen',
				name: 'Sunscreen'
			},
			{
				id: 'korean-skincare',
				name: 'Korean Skincare'
			},
			{
				id: 'favourite-brands',
				name: 'Favourite Brands',
				children: [
					{
						id: 'skin1004',
						name: 'SKIN1004'
					},
					{
						id: 'the-body-shop',
						name: 'The Body Shop'
					},
					{
						id: 'nuxe',
						name: 'Nuxe'
					},
					{
						id: 'la-roche-posay',
						name: 'La Roche-Posay'
					},
					{
						id: 'rituals',
						name: 'Rituals'
					},
					{
						id: 'jurlique',
						name: 'Jurlique'
					},
					{
						id: 'dr-sebagh',
						name: 'Dr Sebagh'
					},
					{
						id: 'sensai',
						name: 'Sensai'
					},
					{
						id: 'all-skin-and-body-care-brands',
						name: '→ All Brands'
					}
				]
			}
		]
	},
	{
		id: 'make-up',
		name: 'Make-up',
		children: [
			{
				id: 'make-up',
				name: 'Make up',
				children: [
					{
						id: 'face',
						name: 'Face'
					},
					{
						id: 'lip',
						name: 'Lip'
					},
					{
						id: 'eye',
						name: 'Eye'
					},
					{
						id: 'eyebrows',
						name: 'Eyebrows'
					},
					{
						id: 'other-make-up-products',
						name: 'Other Make up Products'
					},
					{
						id: 'all-make-up-products',
						name: '→ All Make up'
					}
				]
			},
			{
				id: 'favourite-brands',
				name: 'Favourite Brands',
				children: [
					{
						id: 'benefit',
						name: 'Benefit'
					},
					{
						id: 'anastasia-beverly-hills',
						name: 'Anastasia Beverly Hills'
					},
					{
						id: 'lancome',
						name: 'Lancome'
					},
					{
						id: 'dior',
						name: 'Dior'
					},
					{
						id: 'mac',
						name: 'MAC'
					},
					{
						id: 'yves-saint-laurent',
						name: 'Yves Saint Laurent'
					},
					{
						id: 'giorgio-armani',
						name: 'Giorgio Armani'
					},
					{
						id: 'all-favorite-make-up-brands',
						name: '→ All Brands'
					}
				]
			}
		]
	},
	{
			id: "gifts",
			name: "Gifts"
	},
	{
			id: "sale",
			name: "Sale"
	},
	{
			id: "rewards",
			name: "Rewards"
	}
];

export default topMenu;