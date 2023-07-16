"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function DarkModeToggle() {
	const { toggle, mode } = useContext(ThemeContext);
	return (
		<div
			onClick={toggle}
			className=' w-11 h-6 rounded-[30px] border-solid border-[#53c28b70] border-2 flex items-center justify-between p-[2px] relative cursor-pointer'
		>
			<div className=' text-[12px]'>🌙</div>
			<div className=' text-[12px]'>🔆</div>
			<div
				className=' w-4 h-4 bg-[#53c28b] rounded-[50%] absolute'
				style={mode === "light" ? { left: "2px" } : { right: "2px" }}
			/>
		</div>
	);
}

export default DarkModeToggle;
