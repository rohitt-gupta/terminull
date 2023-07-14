import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

function About() {
	return (
		<div className=''>
			<div className='w-full h-[300px] relative'>
				<Image
					src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					fill={true}
					alt=''
					className=' object-cover grayscale'
				/>
				<div className=' absolute bottom-5 left-5 bg-[#53c28b] p-1 text-white'>
					<h1 className='font-bold text-[32px]'>Digital Storytellers</h1>
					<h2 className=' text-[28px] font-semibold '>
						Handcrafting award winning digital experience
					</h2>
				</div>
			</div>
			<div className='flex gap-[100px]'>
				<div className='flex-1 mt-[50px] flex flex-col gap-[30px]'>
					<h1 className='font-bold text-3xl'>Who are we?</h1>
					<p className=' text-lg font-light text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
						quisquam maxime, omnis tempore ab assumenda rem temporibus, earum
						ipsam aliquam accusamus facere obcaecati rerum qui illo eos
						recusandae alias tenetur?
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit laboriosam sequi sint dolores numquam mollitia
						pariatur, doloribus magnam aliquid quae quibusdam exercitationem ut
						ratione voluptatum veritatis nihil ad harum repellendus?
					</p>
				</div>
				<div className='flex-1 mt-[50px] flex flex-col gap-[30px]'>
					<h1 className=' font-bold text-3xl'>Who are we?</h1>
					<p className='text-lg font-light text-justify'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
						minus fuga id eaque ducimus aliquid obcaecati, eveniet distinctio ea
						iure quibusdam impedit ipsa fugiat. Voluptas voluptate omnis
						perferendis cumque eaque?
						<br />
						<br />
						- something pijnt
						<br />
						<br />- second point
						<br />
						<br /> - third point
					</p>
					<Button text='Contact' url='/contact' />
				</div>
			</div>
		</div>
	);
}

export default About;
