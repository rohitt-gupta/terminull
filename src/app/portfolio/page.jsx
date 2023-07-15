import Link from "next/link";
import React from "react";

function Portfolio() {
	const linkTitle = " absolute right-[10px] bottom-[10px] text-4xl font-bold";
	const linkCLass =
		"hover:text-green-500 important-bg-cover border-solid border-[#bbb] border-[5px] h-[400px] w-[300px] relative";
	return (
		<div className=''>
			<h1 className=' text-4xl font-bold my-5'>Choose a gallery</h1>
			<div className=' flex gap-[50px]'>
				<Link
					href='/portfolio/illustrations'
					className={`${linkCLass} bg-url-illustration`}
				>
					<span className={linkTitle}>Illustrations</span>
				</Link>
				<Link
					href='/portfolio/websites'
					className={`${linkCLass} bg-url-websites`}
				>
					<span className={linkTitle}>Websites</span>
				</Link>
				<Link
					href='/portfolio/application'
					className={`${linkCLass} bg-url-apps`}
				>
					<span className={linkTitle}>Application</span>
				</Link>
			</div>
		</div>
	);
}

export default Portfolio;
