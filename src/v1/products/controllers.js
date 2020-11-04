const { Product } = require('../../../utils/models/Product');
exports.getAllProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(products);
    }).exec();
}

exports.getAProduct = (req, res) => {
    let { id } = req.params;
    Product.findById(id, (err, product) => {
        callback(err, product, res);
    }).exec();
};

exports.createAProduct = (req, res) => {
    Product.create(req.body).then((product) => {
        res.status(201).json(product.toJSON());
    }).catch(err => {
        res.status(400).json(err);
    });
};

exports.updateAProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true }, (err, product) => {
        callback(err, product, res);
    }).exec();
};

exports.deleteAProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id, { useFindAndModify: true }).exec().then(() => {
        res.status(200).send();
    }).catch((err) => {
        res.status(400).json(err);
    });
};

const callback = (err, product, res) => {
    if (!product) {
        return res.status(404).send();
    } else {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(product.toJSON());
    }
}