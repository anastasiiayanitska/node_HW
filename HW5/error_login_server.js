const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  try {
    throw new Error("Error");
  } catch (error) {
    const logMessage = `Error - ${error.message}\n`;
    fs.appendFile("errors.log", logMessage, (err) => {
      if (err) console.error("Error writing:", err);
    });

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening:${PORT}`);
});
