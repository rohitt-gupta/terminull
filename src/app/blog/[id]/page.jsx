import Image from "next/image";
import React from "react";

function BlogPost() {
	return (
		<div className='contai_ner'>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between'>
					<h1 className='text-[40px]'>Lorem Ipsum</h1>
					<p className='text-[18px] font-light'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
						quidem totam illo reprehenderit sapiente nulla magnam inventore
						nesciunt eligendi deserunt sit tempore corrupti cumque, culpa
						voluptates corporis facere? Quos, id.
					</p>
					<div className='flex items-center gap-3'>
						<Image
							src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							alt=''
							width={40}
							height={40}
							className=' object-cover rounded-[50%]'
						/>
						<span className=''>John Doe</span>
					</div>
				</div>
				<div className=' flex-1 h-[300px] relative'>
					<Image
						src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
						fill={true}
						className='object-cover'
					/>
				</div>
			</div>
			<div className=' mt-[50px] text-xl font-light text-[#999] text-justify'>
				<p className=''>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
					consequuntur laboriosam beatae totam qui omnis vero voluptates ut
					maiores, repellendus maxime animi architecto necessitatibus aperiam
					repellat excepturi! Accusantium, soluta excepturi?
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
					fugit possimus. Libero nihil quia, eveniet beatae ipsam iure eum
					minima earum corporis accusamus modi animi voluptatibus itaque
					provident facere sunt?
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					iste ipsa eligendi dolores, incidunt perferendis ipsam nemo corrupti.
					A est non laudantium deleniti. Nihil quod nobis repudiandae, eos in
					minima.
				</p>
			</div>
		</div>
	);
}

export default BlogPost;
