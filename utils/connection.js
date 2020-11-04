const mongoose = require('mongoose');

exports.connect = () => {
    return mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qjtaf.mongodb.net/${process.env.MONGO_DB_NAME}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

