// import functions and grab DOM elements
import { capturePokemon } from './local-storage.js';
import { renderThreePokemon } from './utils.js';

const button = document.querySelector('#catch');


renderThreePokemon();

button.addEventListener('click', () => {
  // On clicking "capture" button
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;

    capturePokemon(selectedPokemonId);
  // - call `renderThreePokemon`
    renderThreePokemon();
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

