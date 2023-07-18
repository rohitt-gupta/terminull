import Posts from "@/modals/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
	const { id } = params;
	try {
		await connect();
		const post = await Posts.findById(id);

		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (error) {
		return new NextResponse(error, { status: 500 });
	}
};

export const DELETE = async (request, { params }) => {
	const { id } = params;
	try {
		await connect();
		const post = await Posts.findByIdAndDelete(id);

		return new NextResponse("Post has been deleted", { status: 200 });
	} catch (error) {
		return new NextResponse(error, { status: 500 });
	}
};
