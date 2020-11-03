const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
/*
    GET customers
    GET customers/:id
    POST customers
    PUT customers/:id
    DELETE customers/:id
*/

// /api/v1/customer
router.route('/')
    .get(controllers.getAllCustomers)
    .post(controllers.createACustomer);

// /api/v1/customer/:id
router.route('/:id')
    .get(controllers.getACustomer)
    .put(controllers.updateACustomer)
    .delete(controllers.deleteACustomer);

module.exports = router;