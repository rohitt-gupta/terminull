"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
];

function Navbar() {
	const session = useSession();
	return (
		<div className=' h-[90px] flex justify-between items-center'>
			<Link href='/' className=' font-bold text-2xl'>
				terminu_l
			</Link>
			<div className=' flex items-center gap-5 '>
				<DarkModeToggle />
				{links.map((link) => (
					<Link
						key={link.id}
						href={link.url}
						className='rounded-lg hover:text-gray-200 hover:bg-zinc-400/20 transition-all delay-150  relative px-3 py-2'
					>
						{link.title}
					</Link>
				))}
				{session.status === "authenticated" && (
					<button
						onClick={signOut}
						className=' p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded'
					>
						Logout
					</button>
				)}
			</div>
		</div>
	);
}

export default Navbar;
