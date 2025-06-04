import React from 'react';

export default function Content(props: React.PropsWithChildren) {
	return (
		<main>{props.children}</main>
	);
}