"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
	const [error, setError] = useState(null);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});
			res.status === 201 &&
				router.push("/dashboard/login?success=Account has been created");
		} catch (err) {
			setError(err);
			console.log(err);
		}
	};
	const inputClassName =
		"p-5 bg-transparent border-[2px] border-solid border-[#bbb] text-[#bbb] rounded-[5px] text-xl font-bold";
	return (
		<div className='flex flex-col gap-[20px] items-center justify-center'>
			<h1 className='text-[#bbb]'>Create an Account</h1>
			<h2 className='text-xl mb-7 text-[#bbb]'>
				Please sign up to see the dashboard.
			</h2>
			<form
				onSubmit={handleSubmit}
				className='w-[300px] flex flex-col gap-[20px]'
			>
				<input
					type='text'
					placeholder='Username'
					required
					className={inputClassName}
				/>
				<input
					type='text'
					placeholder='Email'
					required
					className={inputClassName}
				/>
				<input
					type='password'
					placeholder='Password'
					required
					className={inputClassName}
				/>
				<button className=' w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold'>
					Register
				</button>
				{error && "Something went wrong!"}
			</form>
			<span className='or'>- OR -</span>
			<Link className='link' href='/dashboard/login'>
				Login with an existing account
			</Link>
		</div>
	);
};

export default Register;
