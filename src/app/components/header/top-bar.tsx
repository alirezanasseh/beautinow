import Search from '@/app/components/header/search';
import Profile from '@/app/components/header/profile';
import Cart from '@/app/components/header/cart';
import CurrencyDropdown from '@/app/components/header/currency-dropdown';
import Image from 'next/image';

export default function TopBar() {
	 return (
		 <div className="px-8">
			 <div className="flex justify-between items-center border-b-1 border-gray-200">
				 <div>
					 <Image
						 src={'https://cdn4.beautinow.com/wp-content/uploads/2024/02/Black-Logo-Cut-New.png'}
						 alt={'beautinow'}
						 width={190}
						 height={79}
					 />
				 </div>
				 <div className="py-4 flex gap-4 items-center">
					 <Search />
					 <Profile />
					 <Cart />
					 <CurrencyDropdown />
				 </div>
			 </div>
		 </div>
	 );
}