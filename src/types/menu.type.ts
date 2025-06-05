export type MenuItemType = {
	id: string;
	name: string;
	icon?: string;
	path?: string;
	children?: MenuType;
}

export type MenuType = MenuItemType[];