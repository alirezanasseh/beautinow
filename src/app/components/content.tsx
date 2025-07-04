import React from 'react';

export default function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex-1">{children}</main>
	);
}