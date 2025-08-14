const http = require("http");

const server  = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.header);

  if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>WELCOME TO THE HOME PAGE</h1></body>');
    res.write('</html>')
    return res.end();
}
else if (req.url === '/men'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Mens</title></head>');
  res.write('<body><h1>WELCOME TO THE MEN SECTION</h1></body>')
  res.write('</html>')
  return res.end();
}
else if (req.url === '/women'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Women</title></head>');
  res.write('<body><h1>WELCOME TO THE WOMEN SECTION<h1></body>')
  res.write('</html>');
  return res.end();
}
else if (req.url === '/kids'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Kids</title></head>');
  res.write('<body><h1>WELCOME TO THE KIDS SECTION</h1></body>');
  res.write('</html>');
  return res.end();
}

else if(req.url === '/card'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Card</title></head>');
  res.write('<body><h1>WELCOME TO THE CARD SECTION</h1></body>')
  res.write('</html>')
  return res.end();
}; 
});

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}`)

});