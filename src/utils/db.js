const { default: mongoose } = require("mongoose");

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
	} catch (error) {
		console.log("error", error);
		throw new Error("Connection failed!");
	}
};

export default connect;
