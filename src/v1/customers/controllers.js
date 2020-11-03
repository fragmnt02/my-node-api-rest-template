const dbManager = require('../../../utils/dbManager');

exports.getAllCustomers = (req, res) => {
    try {
        const customers = dbManager.getAll('customers');
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getACustomer = (req, res) => {
    const { id } = req.params;
    try {
        const customer = dbManager.findById('customers', id);
        res.status(200).json(customer);
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};

exports.createACustomer = (req, res) => {
    const id = dbManager.getAll('customers').length + 1;
    const { name } = req.body;
    const customer = {
        id,
        name
    };
    try {
        dbManager.createOne('customers', customer);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateACustomer = (req, res) => {
    const { id } = req.params;
    try {
        const customer = dbManager.updateById('customers', id, req.body);
        res.status(200).json(customer);
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};

exports.deleteACustomer = (req, res) => {
    const { id } = req.params;
    try {
        dbManager.deleteById('customers', id);
        res.status(200).send();
    } catch (error) {
        if (error.includes && error.includes('NOT_FOUND:')) {
            res.status(404).send();
        } else {
            res.status(500).send(error);
        }
    }
};