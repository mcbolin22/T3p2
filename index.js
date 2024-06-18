require('dotenv').config();

const { CustomFancyError } = require('./customError');
// the above is equivalent to the next two lines below:
// const dotenv = require('dotenv');
// dotenv.config();

const pokePrinterFile = require('./pokePrinter');
const {pokeNameFromNumber} = require('./pokePrinter');

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
            throw new CustomFancyError("Custom Error for NaN");
        }

        // Give number to pokePackage and get result
        // let pokeName = pokePrinterFile.pokeNameFromNumber(n);
        try {
            let pokeName = pokeNameFromNumber(n);
            console.log(`Your pokemon is: ${pokeName}`)
        } catch (error) {
            console.log("Try a number between 1 and 1025!")
        } finally {
            let userInputToExit = prompt("Would you like to try again?");

            if (userInputToExit == "y") {
                userWantstoExit = false;
            } else {
                userWantstoExit = true;
            }
        } 
        

        // console.log("User entered: " + n);

        

    } while (userWantstoExit == false);
}

try {
    app();
} catch (error) {
    console.log("Gracefully handling error...: ");
    console.log(error.message);
    console.log(JSON.stringify(error));
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