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


