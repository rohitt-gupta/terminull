import Image from "next/image";
import Link from "next/link";
import React from "react";

function Blog() {
	return (
		<div className='conti_ner'>
			<Link
				href='/blog/testId'
				className='flex items-center gap-[50px] mb-[50px]'
			>
				<div className='imgCOntainer'>
					<Image
						src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>
				<div className='content'>
					<h1 className='mb-[10px]'>Test</h1>
					<p className='text-xl text-[#999]'>Description</p>
				</div>
			</Link>
			<Link
				href='/blog/testId'
				className='flex items-center gap-[50px] mb-[50px]'
			>
				<div className='imgCOntainer'>
					<Image
						src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>
				<div className='content'>
					<h1 className='mb-[10px]'>Test</h1>
					<p className='text-xl text-[#999]'>Description</p>
				</div>
			</Link>
			<Link
				href='/blog/testId'
				className='flex items-center gap-[50px] mb-[50px]'
			>
				<div className='imgCOntainer'>
					<Image
						src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						width={400}
						height={250}
						className='object-cover'
					/>
				</div>
				<div className='content'>
					<h1 className='mb-[10px]'>Test</h1>
					<p className='text-xl text-[#999]'>Description</p>
				</div>
			</Link>
		</div>
	);
}

export default Blog;
