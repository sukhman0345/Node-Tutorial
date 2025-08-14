const http  = require('http');

// OPTION 1:

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener) // here we pass the reference 

// OPTION 2

const server = http.createServer((req, res) => {
  console.log(req);
});
const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Server running at http://localhost:${PORT}`)
});

// OPTION 3

// http.createServer(function(req, res){
//   console.log(req)
// })