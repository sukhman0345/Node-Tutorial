const express = require("express");
const app = express();
const path = require('path');

const homeRouter = require("./routers/homeRouter")
const contactRouter = require("./routers/contactRouter")

app.use(express.urlencoded()); // Middleware for requesting the body

app.use(homeRouter);

app.use(contactRouter);

app.use((req, res, next)=>{
  res.sendFile(path.join(__dirname, '../', 'views', '404.html'));
})

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`App running at the http://localhost:${PORT}`)
  console.log("Hi!! Sukhman Singh")
});
