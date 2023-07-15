import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
	return (
		<div className='flex items-center gap-24 '>
			<div className='flex-1 flex flex-col gap-[50px] '>
				<h1 className=' font-bold text-[72px] bg-gradient-to-b from-green-900 to-blue-300 custom-text-clip '>
					Better design for your digital products.
				</h1>
				<p className=' text-[24px] font-semibold'>
					Turning your idea into reality, We bring together the teams from the
					global tech industry.
				</p>
				<Button text='See our work' url='/portfolio' />
			</div>
			<div className='flex-1 flex flex-col gap-[50px]'>
				<Image
					src={Hero}
					alt='Hero 3d illustration/image'
					className=' w-full h-[500px] object-contain image animate-homeImageMove '
				/>
			</div>
		</div>
	);
}
