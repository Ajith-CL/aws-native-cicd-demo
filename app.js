const http = require("node:http");

function getMessage() {
  return "Version 1 - AWS Native CI/CD is working!";
}

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("OK");
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>${getMessage()}</h1>`);
});

if (require.main === module) {
  server.listen(3000, "0.0.0.0", () => {
    console.log("Application listening on port 3000");
  });
}

module.exports = { getMessage };