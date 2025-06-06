export interface ProductType {
	id: string;
	name: string;
	images: string[][];
	brand: string;
	variations: VariationType[];
	attributes: AttributesType;
	min_reg_price: number;
	max_reg_price: number;
	min_price: number;
	max_price: number;
}

interface VariationType {
	name: string;
	stock: number;
	price: number;
	regular_price: number;
}

interface AttributesType {
	Size?: string[];
	Gender?: string[];
	"Main Accords"?: string[];
	Brand: string[];
	"type"?: string[];
}