// Core Module
// const http = require("http"); this are already defined in the express.js so need to make it

// External Module
const express = require('express');

// Local Module
const userRequestHandler = require('./user');

// Now execute the express
const app = express();

// Adding middleware 1st 
//Note we can add multiple middleware
app.use('/',(req, res, next)=>{
 console.log("Came in first middleware", req.url, req.method);
 console.log("<p>YOU ARE IN THE FIRST MIDDLEWARE </p>")
 next(); // Here we pass the request to the second middleware one its work is done
});

// Second middleware
app.use("/submit-detalis", (req, res, next)=>{
 console.log("Came in second middleware", req.url, req.method);
 res.send("<p>YOU ARE IN THE SECOND MIDDLEWARE</p>")
});

// const server = http.createServer(app);  this are already defined in the express.js so need to make it
const PORT = 3000;

app.listen(PORT, () => { // use app instead of the server
  console.log(`Server is listen at http://localhost${PORT}`);
})