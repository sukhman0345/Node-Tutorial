const http  = require('http'); //FOR CREATE SERVER
const fs = require('fs') //FOR FILE WRITE
//SERVER CREATE
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
// FROM MAKING IN NODE.JS
  if (req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Sukhman.Singh.Codes</title></head>');
  res.write('<body><h1>ENTER YOUR DETAILS:</h1>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<label>UserName</label>');
  res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
  res.write('<lable for="male">Male</label>');
  res.write('<input type="radio" id="male" name="gender" value="male" />');
  res.write('<lable for="female">Female</label>');
  res.write('<input type="radio" id="female" name="gender" value="female" />');
  res.write('<br><input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
} 
else if (req.url.toLowerCase() === "/submit-details" && req.method=="POST"){
fs.writeFileSync('user.txt', 'Sukhman Singh');
res.statusCode= 302; // for changing location
res.setHeader('Location', '/') // Then go back to the home page
}

else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sukhman.Singh.Codes</title></head>');
    res.write('<body><h1>Hii your form is submited</h1></body>');
    res.write('</html>');
    return res.end();
  }
});
// SERVER LISTEN
const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Server running at http://localhost:${PORT}`)
});