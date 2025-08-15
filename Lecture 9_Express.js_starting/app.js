// Core Module
const http = require("http");

// External Module
const express = require('express');

// Local Module
const userRequestHandler = require('./user');

// Now execute the express
const app = express();

// Adding middleware 1st 
//Note we can add multiple middleware
app.use((req, res, next)=>{
 console.log("Came in first middleware", req.url, req.method);
 next(); // Here we pass the request to the second middleware one its work is done
});

// Second middleware
app.use((req, res, next)=>{
 console.log("Came in second middleware", req.url, req.method);
});

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listen at http://localhost${PORT}`);
})