const fs = require("fs");

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${message}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Ошибка при записи в лог:", err);
    }
  });
}

module.exports = logMessage;
