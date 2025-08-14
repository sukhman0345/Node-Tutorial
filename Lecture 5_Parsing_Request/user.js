
const fs = require('fs') //FOR FILE WRITE
//SERVER CREATE
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
// FROM MAKING IN NODE.JS
  if (req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Sukhman.Singh.Codes</title></head>');
  res.write('<body><h1>ENTER YOUR DETAILS:</h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<label>UserName</label>');
  res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male" />');
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id="female" name="gender" value="female" />');
  res.write('<br><input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
} 
else if (req.url.toLowerCase() === "/submit-details" && req.method=="POST"){

  // Parsing request stream, chunks, buffer
  const body = [];
  req.on('data', chunk =>{
    console.log(chunk);
    body.push(chunk);
  });

  // This code signifies the end of the chunk

  req.on('end', () => {
   const fullData=  Buffer.concat(body).toString();
   console.log(fullData);// output : username=Singh+Sukhman&gender=male

  //  Here actual parsing of data

   const params = new URLSearchParams(fullData); // It will decode to key, val pair "username=Singh+Sukhman&gender=male"
  //  const bodyObject = {}; // For storing key, val pair
  //  for (const[key, val] of params.entries()){
  //   bodyObject[key] = val;
  //  }

  // Easy Way
  
  const bodyObject = Object.fromEntries(params); // One Liner code
   console.log(bodyObject);// Output : { username: 'Singh Sukhman', gender: 'male' }
   fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
  });


res.statusCode= 302; // for changing location
res.setHeader('Location', '/') // Then go back to the home page
res.end();
}

else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sukhman.Singh.Codes</title></head>');
    res.write('<body><h1>Hii your form is submited</h1></body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = userRequestHandler;
