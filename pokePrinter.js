const pokemon = require('pokemon');

function pokePrinter() {
    let randomPokemon = pokemon.random();

    console.log(`Today's lucky Pokemon is ${randomPokemon}`);
}

function pokeNameFromNumber(targetNumber){
    let result = pokemon.getName(targetNumber);

    return result;
}

module.exports = {
    pokePrinter,
    pokeNameFromNumber
}