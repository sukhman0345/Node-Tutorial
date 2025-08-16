const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
 console.log("Second Dummy Middleware", req.url, req.method);
 next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method)
//   res.send("<h1>WELCOME TO THE nOdE jS tUtOrIaL </h1>")
// })

app.get("/",(req, res, next) => {
 console.log("Handling / for GET", req.url, req.method);
 res.send(`<h1>WELCOME TO THE HOME PAGE</h1>`);

});

app.get("/contact-us", (req, res, next) => {
 console.log("Handling /contact-us for GET", req.url, req.method);
 res.send(`<h1>WELCOME TO THE CONTACT-US PAGE </h1>
       <form action="contact-us" method="POST">
       <input type="text" name="name" placeholder="Enter your Name" /><br>
       <input type="text" name="email" placeholder="Enter your email" /><br>
       <input type="Submit"/>
       </form>
  `)
});

app.post("/contact-us", (req, res, next) => {
 console.log("First Handling", req.url, req.method);
 next();
});

app.use(bodyParser.urlencoded()); //Middleware used here

app.post("/contact-us", (req, res, next) => {
 console.log("Handling /contact-us for POST", req.url, req.method);
 res.send(`<h1>WE WILL CONTACT YOU SHORTLY</h1>`);
});


const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`App running at the http://localhost:${PORT}`)
  console.log("Hi!! Sukhman Singh")
});
