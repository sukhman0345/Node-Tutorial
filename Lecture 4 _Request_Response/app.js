const http  = require('http');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Sukhman.Singh.Codes</title></head>');
  res.write('<body><h1>WELCOME TO THE HOME PAGE </h1></body>');
  res.write('</html>');
  return res.end();

  } else if (req.url === '/products'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Sukhman.Singh.Codes</title></head>');
  res.write('<body><h1>WELCOME TO THE PRODUCT PAGE</h1></body>');
  res.write('</html>');
  return res.end();

  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sukhman.Singh.Codes</title></head>');
    res.write('<body><h1>Hii Sukhman </h1></body>');
    res.write('</html>');
    return res.end();
  }

});
const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Server running at http://localhost:${PORT}`)
});

