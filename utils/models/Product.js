const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
    }
});

exports.Product = mongoose.model('product', productSchema);