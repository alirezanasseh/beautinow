import React from 'react';
import Image from 'next/image';

export default function SocialPosts() {
	const posts = [
		"https://cdn4.beautinow.com/wp-content/uploads/2024/06/41-150x150.png",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/06/Untitled-design-73-150x150.png",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/06/11-150x150.png",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/07/bcbc99a3-2de3-43ad-9170-a00c6d8d8134-150x150.jpg",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/06/2-150x150.png",
		"https://cdn4.beautinow.com/wp-content/uploads/2024/06/31-150x150.png"
	];

	return (
		<div className="mb-12">
			<p className="text-xl px-12 text-[#acacac] mb-2">Connect with us on social media</p>
			<div className="grid grid-cols-6 gap-4 px-8 py-4 justify-items-center">
				{posts.map((post, index) =>
					<a href="#" key={index}>
						<Image
							src={post}
							alt="Social media image"
							width={150}
							height={150}
							className="rounded-2xl saturate-50 hover:saturate-100"
						/>
					</a>
				)}
			</div>
		</div>
	);
}
