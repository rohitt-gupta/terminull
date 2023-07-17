import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description:
		"Contact page for contacting ROhit gupta for work related queries of any projects.",
};

function Contact() {
	const inputClassname = "  ";
	return (
		<div>
			<h1 className=' text-[60px] mb-[100px] text-center'>
				Lets keep in touch
			</h1>
			<div className='flex items-center gap-24'>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='/contact.png'
						alt=''
						fill={true}
						className=' object-contain image animate-move'
					/>
				</div>
				<form className='flex-1 flex flex-col gap-5'>
					<input
						type='text'
						placeholder='Name'
						className=' text-xl font-bold p-5 bg-transparent border-solid border-2 border-gray-300 outline-none text-[#bbb]'
					/>
					<input
						type='text'
						placeholder='Email'
						className=' text-xl font-bold p-5 bg-transparent border-solid border-2 border-gray-300 outline-none text-[#bbb]'
					/>
					<textarea
						className=' text-xl font-bold p-5 bg-transparent border-solid border-2 border-gray-300 outline-none text-[#bbb]'
						placeholder='Message'
						cols='30'
						rows='10'
					></textarea>
					<Button url='#' text='Send' />
				</form>
			</div>
		</div>
	);
}

export default Contact;
