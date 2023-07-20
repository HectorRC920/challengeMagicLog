const express = require('express')
const app = express()

const routerAPI = require('./routes');

routerAPI(app);

console.log('Server is running on port 3000')

app.listen(3000)