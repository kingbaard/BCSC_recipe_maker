const mongoose =  require('mongoose')
var colors = require('colors')

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://Admin:admin@cluster0.jcv2w.mongodb.net/bcsc?retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...'.bold.green);
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;