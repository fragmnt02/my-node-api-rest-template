const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        maxlength: 25,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);