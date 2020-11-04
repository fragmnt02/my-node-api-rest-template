const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
});

exports.Customer = mongoose.model('customer', customerSchema);