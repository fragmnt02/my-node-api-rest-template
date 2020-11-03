const router = require('express').Router();
const customersRouter = require('./customers/router');
const productsRouter = require('./products/router');

router.use('/customers',customersRouter);
router.use('/products',productsRouter);

// /api/v1/
router.get('/',(req,res)=>{
    res.status(200).send('Hola Mundo v1');
});

module.exports = router;