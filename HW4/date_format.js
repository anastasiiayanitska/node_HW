const moment = require("moment");

const now = moment();

const format1 = now.format("DD-MM-YYYY");
const format2 = now.format("MMM Do YY");
const format3 = now.format("dddd");

console.log(`Date in format DD-MM-YYYY: ${format1}`);
console.log(`Date in format MMM Do YY: ${format2}`);
console.log(`Current day: ${format3}`);
