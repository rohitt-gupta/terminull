"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import React from "react";
import Image from "next/image";

function Dashboard() {
	const session = useSession();
	const router = useRouter();

	//NEW WAY TO FETCH DATA
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, mutate, error, isLoading } = useSWR(
		`/api/posts?username=${session?.data?.user.name}`,
		fetcher
	);

	if (session.status === "loading") {
		return <p>Loading...</p>;
	}
	if (session.status === "unauthenticated") {
		router?.push("/dashboard/login");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const desc = e.target[1].value;
		const img = e.target[2].value;
		const content = e.target[3].value;

		try {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session.data.user.name,
				}),
			});
			mutate();
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: "DELETE",
			});
			mutate();
		} catch (error) {
			console.log("delete error,", error);
		}
	};

	const inputClassName =
		"p-3 bg-transparent border-[2px] border-solid border-[#bbb] text-[#bbb] rounded-[3px] text-xl font-bold";
	const buttonClassName =
		" w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold hover:bg-[#49b07d]";

	if (session.status === "authenticated") {
		return (
			<div className='flex gap-[100px] '>
				<div className='flex-1'>
					{isLoading
						? "loading"
						: data?.map((post) => (
								<div
									className='flex items-center justify-between my-[50px] mx-[0px] '
									key={post._id}
								>
									<div className='w-[200px] h-[100px] relative'>
										<Image
											src={post.img}
											alt=''
											width={200}
											height={100}
											className='object-cover'
										/>
									</div>
									<h2 className='PostTitle'>{post.title}</h2>
									<span
										className='cursor-pointer text-red-600'
										onClick={() => handleDelete(post._id)}
									>
										X
									</span>
								</div>
						  ))}
				</div>
				<form
					className='flex-1 flex flex-col gap-[20px] '
					onSubmit={handleSubmit}
				>
					<h1>Add New Post</h1>
					<input type='text' placeholder='Title' className={inputClassName} />
					<input
						type='text'
						placeholder='Description'
						className={inputClassName}
					/>
					<input
						type='text'
						placeholder='Image(Link from pexels)'
						className={inputClassName}
					/>
					<textarea
						placeholder='Content'
						className={inputClassName}
						cols='30'
						rows='10'
					></textarea>
					<button className={buttonClassName}>Send</button>
				</form>
			</div>
		);
	}
}

export default Dashboard;
