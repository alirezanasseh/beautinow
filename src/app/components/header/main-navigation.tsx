'use client';

import menu from '@/data/menu';
import React from 'react';
import { MenuItemType, MenuType } from '@/types/menu.type';

export default function MainNavigation() {
	const [sub, setSub] = React.useState<MenuType | undefined>(undefined);

	const SubMenu = ({ items }: {items: MenuType}) => {
		return (
			<div className="absolute w-full h-lvh">
				<div className="absolute bg-black inset-0 opacity-50 z-0"></div>
				<div className="absolute z-10 w-full">
					<div
						className="bg-white border-1 border-gray-200 grid auto-cols-auto grid-flow-col gap-4 px-8 py-4"
						onMouseLeave={() => setSub(undefined)}
					>
						{items.map((item) => (
							<div key={item.id}>
								<div className="text-lg font-semibold">{item.name}</div>
								{item.children && item.children.length > 0 && (
									<div>
										{item.children.map((subItem) => <div key={subItem.id}>{subItem.name}</div>)}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	const showSubMenu = (items: MenuItemType) => {
		if (items.children && items.children.length === 0) {
			setSub(undefined);
			return;
		}
		setSub(items.children);
	}

	return (
		<div>
			<div className="flex gap-8 text-md justify-center py-5">
				{menu.map(item => (
					<div
						key={item.id}
						onMouseEnter={() => showSubMenu(item)}
					>
						{item.name}
					</div>
				))}
			</div>
			{sub && sub.length > 0 && <SubMenu items={sub} />}
		</div>
	);
}