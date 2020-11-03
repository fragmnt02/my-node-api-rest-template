const checkToken = require('../utils/checkToken');
module.exports = (req, res, next) => {
    const header = req.get('authorization');
    if (!header) return res.status(401).send('No token provided');
    const token = header.replace('Bearer ','');
    const validToken = checkToken(token);
    if(validToken) next();
    else return res.status(401).send('');
}