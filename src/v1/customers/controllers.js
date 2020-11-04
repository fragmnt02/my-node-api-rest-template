const { Customer } = require('../../../utils/models/Customer');

exports.getAllCustomers = async (req, res) => {
    Customer.find({}, (err, customers) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(customers);
    }).exec();
}

exports.getACustomer = async (req, res) => {
    let { id } = req.params;
    Customer.findById(id, (err, customer) => {
        callback(err, customer, res);
    }).exec();
};

exports.createACustomer = async (req, res) => {
    Customer.create(req.body).then((customer) => {
        res.status(201).json(customer.toJSON());
    }).catch(err => {
        res.status(400).json(err);
    });
};

exports.updateACustomer = async (req, res) => {
    const { id } = req.params;
    Customer.findByIdAndUpdate(id, req.body, { new: true }, (err, customer) => {
        callback(err, customer, res);
    }).exec();
};

exports.deleteACustomer = async (req, res) => {
    const { id } = req.params;
    Customer.findByIdAndDelete(id, { useFindAndModify: true }).exec().then(() => {
        res.status(200).send();
    }).catch((err) => {
        res.status(400).json(err);
    });
};

const callback = (err, customer, res) => {
    if (!customer) {
        return res.status(404).send();
    } else {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(customer.toJSON());
    }
}