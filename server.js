require('dotenv/config');
const express = require('express');
const {connect} =  require('./utils/connection');
const hasAuthorization = require('./middlewares/hasAuthorization');
const logging = require('./middlewares/logging');
const v1Router = require('./src/v1/index');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(hasAuthorization);
app.use(logging);
app.use(express.json());
app.use('/api/v1',v1Router);

app.get('/',(req,res)=>{
    res.status(200).send('Hola Mundo');
});

connect().then(()=>{
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
}).catch(err=>{
    console.error(err);
})