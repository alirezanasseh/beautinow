import React from 'react';

export default function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>{children}</main>
	);
}