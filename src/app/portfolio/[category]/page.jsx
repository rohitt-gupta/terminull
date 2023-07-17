import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { items } from "./data";

const getData = (cat) => {
	const data = items[cat];

	if (data) {
		return data;
	}

	return notFound();
};

const Category = ({ params }) => {
	const data = getData(params.category);
	return (
		<div>
			<h1 className=' text-[#53c28b]'>{params.category}</h1>
			<div className=' item md:flex-row-reverse'>
				{data.map((item, index) => (
					<div
						className={` flex gap-[50px] mt-[50px] mb-[100px] item ${
							index % 2 === 0 ? "" : "flex-row-reverse"
						}`}
						key={item.id}
					>
						<div className=' flex-1 flex flex-col justify-center gap-5'>
							<h1 className='text-[50px] '>{item.title}</h1>
							<p className='text-[20px]'>{item.desc}</p>
							<Button text='see more' url='#' />
						</div>
						<div className='flex-1 h-[500px] relative'>
							<Image
								className=' object-cover'
								fill={true}
								src={item.image}
								// src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								alt=''
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
