const http = require("http");
const errorDubugging = require("./errors_and_debugging");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  errorDubugging();
});

const PORT = 3000;
server.listen(PORT, () =>{
  console.log(`Server running at http://localhost:${PORT}`);
});