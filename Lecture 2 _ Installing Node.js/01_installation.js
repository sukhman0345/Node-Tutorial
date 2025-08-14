console.log("Lest get into the Node.js")

const fs = require('fs')
fs.writeFile("output.txt", "Welcome to sukhman.singh.codes", (err) => {
  if (err) console.log("Error accured");
  else console.log("File Written Successfully");
})
