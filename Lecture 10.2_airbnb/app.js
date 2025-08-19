//External module
const express = require("express");

// Local Module
const userRouter = require("./routes/userRouter") 
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use((req, res, next)=> {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded()); // Inbuild middleware work as the stream, chunk, buffer to display html text in the terminal

//Routes
app.use(userRouter);
app.use(hostRouter);

// for 404 status
app.use((req, res, next)=>{
  res.status(404).send(`<h1>PAGE NOT FOUND</h1>`)
})

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`App running at http://localhost:${PORT}`);
  console.log("Hii! Sukhman Singh")
})
