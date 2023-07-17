import Posts from "@/modals/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		await connect();
		console.log("Connection successfull");
		const posts = await Posts.find();

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse(error, { status: 500 });
	}
};
