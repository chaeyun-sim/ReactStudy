const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        maxlength: 50,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    continents: {
        type: Number,
        default: 1,
    },
    images: {
        type: Array,
        default: []
    },
    soldout: {  //강의에서는 sold
        type: Number,
        maxlength: 100,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    }
}, { timestamps: true, collection: 'product' })


const Product = mongoose.model('Product', productSchema);

module.exports = { Product }