const express = require('express');
const challengeRouter = require('./challenge');


function routerAPI(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/test', challengeRouter);
}

module.exports = routerAPI;