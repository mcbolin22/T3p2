require('dotenv').config();

// the above is equivalent to the next two lines below:
// const dotenv = require('dotenv');
// dotenv.config();

const pokePrinterFile = require('./pokePrinter');

// Style 1 for setting up prompt-sync
var prompt = require('prompt-sync')({sigint: true});
// Style 2 for setting up prompt-sync
let promtPackage = require('prompt-sync');
let promptInstance = promtPackage({sigint: true});
//
// get input from the user.
//
// var n = prompt('What number of Pokemon do you want to see?');



function app() {
    let userWantstoExit = false;

    do {
        let n = parseFloat(prompt('What number of Pokemon do you want to see?'));

        console.log(typeof(n));
        console.log("Input is not a number: " + Number.isNaN(n));

        if (Number.isNaN(n)) {
            throw new Error("Input is not a number");
        }

        console.log("User entered: " + n);

        let userInputToExit = prompt("Would you like to try again?");

        if (userInputToExit == "y") {
            userWantstoExit = false;
        } else {
            userWantstoExit = true;
        }

    } while (userWantstoExit == false);
}

try {
    app();
} catch (error) {
    console.log("Gracefully handling error...: ");
    console.log(error.message);
    // Full error message (dev use only)
    //console.log(error);
}

// console.log("User entered: " + n);
// console.log(typeof(n));

// let nAsNumber = parseFloat(n);
// console.log(typeof(nAsNumber));















// console.log(process.env.ENVIRONMENT_MESSAGE);

// console.log("Terminal app is running");



// pokePrinterFile.pokePrinter();

// console.log("Bye Bye, Terminal app finished!");