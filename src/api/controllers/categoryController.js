const CategoryModel = require('../models/categories');

exports.create = async (req, res) => {

	const { name, cat_type } = req.body;

	if (!name ||!cat_type) {
		return res.status(400).json({
            status: 400,
            message: 'Ada yang salah'
        });
	}

	try {
		const data = await CategoryModel.create({
			name, 
			cat_type
		});

		res.status(201).json(data);
	}
	catch(err) {
		return res.status(400).json(err);
	}

}

exports.show = async (req, res) => {
	try {
		const data = await CategoryModel.find();

		res.status(201).json(data);	
	}
	catch(err) {
		return res.status(400).json(err);	
	}
}