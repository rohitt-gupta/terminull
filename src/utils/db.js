const mongoose = require("mongoose");

const connect = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://rohit:rohit@cluster0.1koumrm.mongodb.net/test?retryWrites=true&w=majority"
		);
	} catch (error) {
		console.log("error", error);
		throw new Error("Connection failed!");
	}
};

export default connect;

// import mongoose from "mongoose";

// const connectToDatabase = async () => {
// 	if (mongoose.connections[0].readyState) {
// 		console.log("Already connected to MongoDB");
// 		return;
// 	}

// 	try {
// 		await mongoose.connect(
// 			"mongodb+srv://rohit:rohit@cluster0.1koumrm.mongodb.net/test?retryWrites=true&w=majority",
// 			{
// 				useNewUrlParser: true,
// 				useUnifiedTopology: true,
// 			}
// 		);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.error("Failed to connect to MongoDB", error);
// 		throw new Error("Connection failed!");
// 	}
// };

// export default connectToDatabase;
