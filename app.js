// import functions and grab DOM elements
import { capturePokemon } from './local-storage.js';
import { renderThreePokemon } from './utils.js';

const button = document.querySelector('#catch');


renderThreePokemon();

button.addEventListener('click', () => {
  // On clicking "capture" button
    const caughtRadio = document.querySelector(':checked');
    const caughtPokemonId = caughtRadio.value;

    capturePokemon(caughtPokemonId);
  
    renderThreePokemon();
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

