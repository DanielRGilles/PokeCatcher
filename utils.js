import pokemon from './data.js';
import { getPokedex, seenPokemon } from './local-storage.js';
export function findById(someArray, someId) {
    const num = Number(someId);
    for (let item of someArray) {
        if (item.id === num) return item;
    }
    return null;
}

const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');
const caughtEl1 = document.querySelector('#caught-one');
const caughtEl2 = document.querySelector('#caught-two');
const caughtEl3 = document.querySelector('#caught-three');

export function renderThreePokemon() {
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    while (
        poke1.id === poke2.id 
      || poke1.id === poke3.id 
      || poke2.id === poke3.id
    ) {
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
   
    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
    let poke1stat = getCaught(poke1.id);
    let poke2stat = getCaught(poke2.id);
    let poke3stat = getCaught(poke3.id);
    caughtEl1.textContent = `You have caught ${poke1stat} of this pokemon`;
    caughtEl2.textContent = `You have caught ${poke2stat} of this pokemon`;
    caughtEl3.textContent = `You have caught ${poke3stat} of this pokemon`;
    
}

export function getCaught(pokeId) {
    let localStorageData = getPokedex();
    const caughtPokemon = findById(localStorageData, pokeId);
    return caughtPokemon.captured; }


export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    
    const randomon = pokemon[randomIndex];
    
    return randomon;
}
