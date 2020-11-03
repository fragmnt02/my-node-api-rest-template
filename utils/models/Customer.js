const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        maxlength: 25,
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);