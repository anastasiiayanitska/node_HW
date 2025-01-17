const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const fileName = process.env.FILENAME;

const textToWrite = "Hallo. Task 2!";

fs.writeFileSync(fileName, textToWrite, (err) => {
  if (err) throw err;
  console.log(`Файл ${fileName} был успешно создан и заполнен текстом.`);
});

const fileContent = fs.readFileSync(fileName, "utf8");
console.log(`Task2: ${fileName}:`);
console.log(fileContent);
