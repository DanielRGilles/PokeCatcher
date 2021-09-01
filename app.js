// import functions and grab DOM elements
import { capturePokemon } from './local-storage.js';
import { renderThreePokemon } from './utils.js';

const button = document.querySelector('#catch');
let caughtPokemon = 0;

renderThreePokemon();

button.addEventListener('click', () => {
  // On clicking "capture" button
    const caughtRadio = document.querySelector(':checked');
    const caughtPokemonId = caughtRadio.value;

    capturePokemon(caughtPokemonId);
  
    renderThreePokemon();
    caughtPokemon++;
    if (caughtPokemon > 10) {
        window.location.href = './results/index.html'; 
    }
});


