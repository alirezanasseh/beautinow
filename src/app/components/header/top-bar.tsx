import Search from '@/app/components/header/search';
import Profile from '@/app/components/header/profile';
import Cart from '@/app/components/header/cart';
import CurrencyDropdown from '@/app/components/header/currency-dropdown';

export default function TopBar() {
	 return (
		 <div className="flex justify-between items-center">
			 <div>Brand</div>
			 <div>
				 <Search />
				 <Profile />
				 <Cart />
				 <CurrencyDropdown />
			 </div>
		 </div>
	 );
}