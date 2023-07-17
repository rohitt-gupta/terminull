"use client";
import { signIn } from "next-auth/react";
import React from "react";

function Login() {
	return (
		<div>
			<button
				onClick={() => signIn("google")}
				className=' p-3 bg-gray-400 text-black rounded-md'
			>
				SIgn in with google
			</button>
		</div>
	);
}

export default Login;
