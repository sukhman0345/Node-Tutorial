const http = require("http")
const userRequestHandler =   require('./user')

const server = http.createServer(userRequestHandler);

// SERVER LISTEN
const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Server running at http://localhost:${PORT}`)
});