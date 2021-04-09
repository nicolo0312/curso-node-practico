const express  = require('express');
const app = express();
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')

const config = require('../config.js');
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const errors = require('./../network/errors')

//SETTINGS
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')
//ROUTES
app.use('/api/user',user)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc))
app.use('/api/auth',auth)

app.use(errors)

app.listen(config.api.port, ()=>{
    console.log('Api listen on port', config.api.port)
})