const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "PUT") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("PUT");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("DELETE");
  } else {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain");
    res.end("Method not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening:${PORT}`);
});
