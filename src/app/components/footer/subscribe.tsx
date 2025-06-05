import React from 'react';

export default function Subscribe() {
	return (
		<div className="rounded-2xl bg-[#f7f5f0] p-6 text-center shadow-xl flex flex-3 justify-center">
			<div className="w-110">
				<h3 className="text-2xl mb-2">Subscribe</h3>
				<p className="text-xl font-light mb-6">And never miss out on new offers!</p>
				<form>
					<div className="flex h-14 justify-center mb-6">
						<input
							type="email"
							placeholder="Email"
							className="bg-white px-6 h-full border-1 border-gray-400 w-full"
						/>
						<button
							type="submit"
							className="bg-[#783838] text-white h-full px-3"
						>
							Subscribe
						</button>
					</div>
				</form>
				<p className="text-xl mb-6">Get Extra 5% OFF your first order</p>
				<p className="text-xs font-extralight">By entering your email, you agree to receive Beautinow emails, including marketing emails, and agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
			</div>
		</div>
	);
}
