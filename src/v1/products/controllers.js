const dbManager = require('../../../utils/dbManager');

exports.getAllProducts = (req, res) => {
    try {
        const products = dbManager.getAll('products');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getAProduct = (req, res) => {
    const { id } = req.params;
    try {
        const product = dbManager.findByElement('products', id);
        res.status(200).json(product);
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};

exports.createAProduct = (req, res) => {
    const id = `Product${Object.keys(dbManager.getAll('products')).length + 1}`;
    const { name } = req.body;
    const product = {
        id,
        name
    };
    try {
        dbManager.createElement('products', id, product);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAProduct = (req, res) => {
    const { id } = req.params;
    try {
        const product = dbManager.updateByElement('products', id, req.body);
        res.status(200).json(product);
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};

exports.deleteAProduct = (req, res) => {
    const { id } = req.params;
    try {
        dbManager.deleteByElement('products', id);
        res.status(200).send();
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};