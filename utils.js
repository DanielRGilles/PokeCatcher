import pokemon from './data.js';
import { seenPokemon } from './local-storage.js';
export function findById(someArray, someId) {
    const numberId = Number(someId);
    for (let item of someArray) {
        if (item.id === numberId) return item;
    }

    return null;
}

const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

export function renderThreePokemon() {
    //   - Generate three new random pokemon
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    // we need to check to see if any of our random pokemon are the same
    //   - Q: How do we prevent repeats? (A: use a `while` loop)
    while (
        poke1.id === poke2.id 
      || poke1.id === poke3.id 
      || poke2.id === poke3.id
    ) {
        // generate three new pokemon
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }
    
   
    seenPokemon(poke1.id);
    seenPokemon(poke2.id);
    seenPokemon(poke3.id);

   
    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;
    // add values to the radio buttons
    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
}
export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    const randomPokemon = pokemon[randomIndex];

    return randomPokemon;
}
