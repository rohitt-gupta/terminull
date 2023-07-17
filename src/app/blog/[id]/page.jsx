import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		return notFound();
		// throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function generateMetadata({ params }) {
	const post = await getData(params.id);
	return {
		title: post.title,
		description: post.desc,
	};
}
const BlogPost = async ({ params }) => {
	const data = await getData(params.id);

	return (
		<div className='contai_ner'>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between'>
					<h1 className='text-[40px]'>{data.title}</h1>
					<p className='text-[18px] font-light'>{data.desc}</p>
					<div className='flex items-center gap-3'>
						<Image
							src={data.img}
							alt=''
							width={40}
							height={40}
							className=' object-cover rounded-[50%]'
						/>
						<span className=''>{data.username}</span>
					</div>
				</div>
				<div className=' flex-1 h-[300px] relative'>
					<Image src={data.img} alt='' fill={true} className='object-cover' />
				</div>
			</div>
			<div className=' mt-[50px] text-xl font-light text-[#999] text-justify'>
				<p className=''>{data.content}</p>
			</div>
		</div>
	);
};

export default BlogPost;
