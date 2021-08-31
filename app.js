// import functions and grab DOM elements
import { renderNewPokemon } from './utils.js';
import { getRandomPokemon } from './utils.js';
import { getPokedex } from './utils.js';
import { setPokedex } from './utils.js';
// initialize state
console.log(renderNewPokemon);
// set event listeners 
  // User clicks catch button
  // - increment: `pokeCaught++`
  // - We figure out the id of the pokemon that was captured.
  //     - call `catchPokemon(id)` with this id
  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`
