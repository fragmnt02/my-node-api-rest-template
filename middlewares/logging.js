const sendToLogServer = require('../utils/sendToLogServer');
module.exports = async (req,res,next) => {
    const logString = `${req.path} -> ${req.ip}: ${new Date()}`;
    await sendToLogServer(logString);
    next();
}