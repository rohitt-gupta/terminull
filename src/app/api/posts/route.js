import Posts from "@/modals/Posts";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request) => {
	try {
		await connect();

		const posts = await Posts.find();

		return new NextResponse(posts, { status: 200 });
	} catch (error) {
		return new NextResponse(error, { status: 500 });
	}
};
