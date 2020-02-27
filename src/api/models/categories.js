const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryModel = new Schema({
    name: {
        type: String
    },
    cat_type: {
    	type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Categories', CategoryModel);