const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
/*
    GET products
    GET products/:id
    POST products
    PUT products/:id
    DELETE products/:id
*/

// /api/v1/products
router.route('/')
    .get(controllers.getAllProducts)
    .post(controllers.createAProduct);

// /api/v1/products/:id
router.route('/:id')
    .get(controllers.getAProduct)
    .put(controllers.updateAProduct)
    .delete(controllers.deleteAProduct);

module.exports = router;