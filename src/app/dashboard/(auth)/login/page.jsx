"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
	const session = useSession();
	const router = useRouter();
	const params = useSearchParams();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	useEffect(() => {
		setError(params.get("error"));
		setSuccess(params.get("success"));
	}, [params]);

	if (session.status === "loading") {
		return <p>Loading...</p>;
	}

	if (session.status === "authenticated") {
		router?.push("/dashboard");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", {
			email,
			password,
		});
	};
	const buttonClassName =
		" w-[300px] p-5 cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold hover:bg-[#49b07d]";
	const inputClassName =
		"p-5 bg-transparent border-[2px] border-solid border-[#bbb] text-[#bbb] rounded-[5px] text-xl font-bold";
	const google = "bg-red-600 opacity-50 hover:bg-red-600 bg-opacity-80";
	return (
		<div className='flex flex-col gap-[20px] items-center justify-center'>
			<h1 className='text-[#bbb]'>{success ? success : "Welcome Back"}</h1>
			<h2 className=' text-xl mb-7 text-[#bbb]'>
				Please sign in to see the dashboard.
			</h2>

			<form
				onSubmit={handleSubmit}
				className='w-[300px] flex flex-col gap-[20px]'
			>
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
				<button className={buttonClassName}>Login</button>
				{error && error}
			</form>
			<button
				onClick={() => {
					signIn("google");
				}}
				className={buttonClassName + " " + google}
			>
				Login with Google
			</button>
			<span className='text-[#bbb]'>- OR -</span>
			<Link
				className='underline text-[#7d7c7c] hover:text-gray-700'
				href='/dashboard/register'
			>
				Create new account
			</Link>
			{/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
		</div>
	);
};

export default Login;
