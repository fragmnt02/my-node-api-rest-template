const router = require('express').Router();
// /api/v2
router.get('/',(req,res)=>{
    res.status(200).send('Hola Mundo v2');
});

module.exports = router;