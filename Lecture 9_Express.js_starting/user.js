const fs = require("fs");
const userRequestHandler = (req, res) => {
console.log(req.url, req.method);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>sukhman.singh.codes</title> 
        </head> 
        <body>
          <h1>ENTER YOUR DETAILS</h1> <br>
          <form action="/submit-detalis" method="POST"> 

            <lable>USER_NAME</label> <br>
            <input type="text" placeholder="ENTER YOUR NAME" name="username" /> <br>

            <label for="male">MALE</label><br>
            <input type="radio" id="male" name="gender" value="male" /> <br>

            <label for="female">FEMALE</label><br>
            <input type="radio" id="female" name="gender" value="female" /> <br>

            <input type="submit" value="Submit">

           </form>
        </body>
      </html>
      `);
      return res.end();
    }
    else if(req.url.toLowerCase() === "/submit-detalis" && req.method=="POST"){
      // Create the chunk or the starting of chunk
      const body = [];
      req.on("data", chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      // End of the chunk
      req.on("end", () => {
        const fullData = Buffer.concat(body).toString();
        console.log(fullData);

        // Now parse the data
        const parse = new URLSearchParams(fullData);
        
        // Now formEntries
        const bodyObject = Object.fromEntries(parse);
        console.log(bodyObject);
        
        // Now write the file
        fs.writeFile('user.txt', JSON.stringify(bodyObject), error =>{
          console.log('Data written successfully', error)
          //For that your file is successfully write
          res.statusCode = 302;
          res.setHeader('Location', '/')
          return res.end();
        });
      });
    }
}

exports.userRequestHandler = userRequestHandler; 
