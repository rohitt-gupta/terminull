import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/modals/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "credentials",
			async authorize(credentials) {
				// check if the user exists
				await connect();

				try {
					const user = await User.findOne({
						email: credentials.email,
					});

					if (user) {
						// if user exists then check, compare the password.
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isPasswordCorrect) {
							// if password is correct then return user.
							return user;
						} else {
							throw new Error("Wrong Credentials!");
						}
					} else {
						throw new Error("User not found!");
					}
				} catch (error) {
					throw new Error(error);
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		error: "/dashboard/login",
	},
});

export { handler as GET, handler as POST };
