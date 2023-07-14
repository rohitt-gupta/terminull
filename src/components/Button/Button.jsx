import Link from "next/link";
import React from "react";

export const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<div className='p-3 cursor-pointer bg-[#53c28b] border-none rounded-md max-w-max text-white '>
				{text}
			</div>
		</Link>
	);
};
