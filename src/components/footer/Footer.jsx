import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<div className=' h-12 text-sm flex items-center justify-between'>
			<div className=''>@2023 Terminull. All rights reserved.</div>
			<div className='flex items-center gap-3'>
				<Image
					className=' opacity-60 cursor-pointer'
					src='/1.png'
					height={15}
					width={15}
					alt='Terminull facebook icon button'
				/>
				<Image
					className=' opacity-60 cursor-pointer'
					src='/2.png'
					height={15}
					width={15}
					alt='Terminull instagram icon button'
				/>
				<Image
					className=' opacity-60 cursor-pointer'
					src='/3.png'
					height={15}
					width={15}
					alt='Terminull twitter icon button'
				/>
				<Image
					className=' opacity-60 cursor-pointer'
					src='/4.png'
					height={15}
					width={15}
					alt='Terminull youtube icon button'
				/>
			</div>
		</div>
	);
}

export default Footer;
