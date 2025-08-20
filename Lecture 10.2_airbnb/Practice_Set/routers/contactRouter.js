const express = require("express");

const path = require("path");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
 console.log("Handling /contact-us for GET", req.url, req.method);
 res.sendFile(path.join(__dirname, '../', 'views','contact-us.html'))
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Here is your info");
  console.log(req.body); // for body
 console.log("Handling /contact-us for POST", req.url, req.method);
 res.sendFile(path.join(__dirname, '../', 'views', 'contact-success.html'));
});


module.exports = contactRouter;