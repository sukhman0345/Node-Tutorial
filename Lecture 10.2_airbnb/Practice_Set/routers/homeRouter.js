// External Module
const express = require('express');
// Local Module
const homeRouter = express.Router();
// Core Module
const path = require('path');

homeRouter.get("/",(req, res, next) => {
 console.log("Handling / for GET", req.url, req.method);
 res.sendFile(path.join(__dirname, '../','views', 'home.html'));

});

module.exports = homeRouter;
