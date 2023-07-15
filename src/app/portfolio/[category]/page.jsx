import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

function Category({ params }) {
	return (
		<div>
			<h1 className=' text-[#53c28b]'>{params.category}</h1>
			{/* <div className=' item md:flex-row-reverse'> */}
			<div className=' flex gap-[50px] mt-[50px] mb-[100px]'>
				<div className=' flex-1 flex flex-col justify-center gap-5'>
					<h1 className='text-[50px] '>Test Title</h1>
					<p className='text-[20px]'>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab
						obcaecati totam in excepturi blanditiis id dolorem minima sint
						assumenda repellendus maiores, non quos velit dolor porro maxime
						provident est!
					</p>
					<Button text='see more' url='#' />
				</div>
				<div className='flex-1 h-[500px] relative'>
					<Image
						className=' object-cover'
						fill={true}
						src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
					/>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default Category;
