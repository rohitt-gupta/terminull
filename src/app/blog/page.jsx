import Image from "next/image";
import Link from "next/link";
import React from "react";
import Posts from "@/modals/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const getData = async () => {
	try {
		await connect();
		const posts = await Posts.find();

		return posts;
	} catch (error) {
		return error;
	}
};

const Blog = async () => {
	const data = await getData();
	// console.log("data", await data);
	return (
		<div>
			{data &&
				data.map((item) => (
					<Link
						href={`/blog/${item._id}`}
						className='flex items-center gap-[50px] mb-[50px]'
						key={item.id}
					>
						<div>
							<Image
								src={item.img}
								alt=''
								width={400}
								height={250}
								className=' min-w-[400px] object-cover'
							/>
						</div>
						<div>
							<h1 className='mb-[10px]'>{item.title}</h1>
							<p className='text-xl text-[#999]'>{item.desc}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Blog;
