const mongoose = require('mongoose');

exports.connect = async () => {
	try {
		await mongoose.connect(process.env.DB_HOST, {
	  		useNewUrlParser: true,
	  		useUnifiedTopology: true,
	  		dbName: 'xdcm'
		});

		return
	}
	catch(err) {
		console.log(err);
	}
}