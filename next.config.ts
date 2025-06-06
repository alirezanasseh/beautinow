import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			new URL('https://cdn4.beautinow.com/**'),
			new URL('https://imagedelivery.net/**')
		],
	}
};

export default nextConfig;
