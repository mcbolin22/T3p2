require('dotenv').config();

// the above is equivalent to the next two lines below:
// const dotenv = require('dotenv');
// dotenv.config();

const pokePrinterFile = require('./pokePrinter');

console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("Terminal app is running");



pokePrinterFile.pokePrinter();

console.log("Bye Bye, Terminal app finished!");