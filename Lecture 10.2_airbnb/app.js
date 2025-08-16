//External module
const express = require("express");

const app = express();

app.use((req, res, next)=> {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded()); // Inbuild middleware work as the stream, chunk, buffer to display html text in the terminal
app.get("/", (req, res)=> {
  res.send(`<h1>Welcome to the airbnb</h1>
    <a href="/add-home"> Add Home </a>
    `);
});

// Get handling

app.get("/add-home", (req, res, next)=> {
  res.send(`<h1>Register your home here: </h1>
    <form action="/add-home" method="POST"> 
    
      <input type="text" name = "houseName" placeholder="Enter the name of your house"/>
      <br>
      <input type="submit"/>
     </form>
    `);
  
  // Post handling
    app.post("/add-home", (req, res, next)=> {
      console.log(req.body)
      res.send(`
        <h1>Home Registration successfully </h1>
        <a href="/"> Go to Home</a>
        `)
    })


});



const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`App running at http://localhost:${PORT}`);
  console.log("Hii! Sukhman Singh")
})
