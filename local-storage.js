import { findById } from './utils.js';
import Rawpokemon from './data.js';
const PDEX = 'PDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(PDEX);
    if (!stringyPokedex) return [];  
    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
}

export function setPokedex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem(PDEX, stringyPokedex);
}

export function capturePokemon(selectedPokemonId) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, selectedPokemonId);
    matchingPokemon.captured++;
    setPokedex(pokedex);
}


export function seenPokemon(selectedPokemonId) {
    const pokedex = getPokedex();
    const findPokemon = findById(pokedex, selectedPokemonId);
    let pokeName = findById(Rawpokemon, selectedPokemonId);
    if (findPokemon) {
        findPokemon.encountered++;
    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId,
            name: pokeName.pokemon
        };
        pokedex.push(newItem);
    }
    setPokedex(pokedex);
}
export function setPokedexHistory(newPokedex)  {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem('PLAYSFORALLTIME', stringyPokedex);
}
export function getPokedexHistory() {
    const stringyPokedex = localStorage.getItem('PLAYSFORALLTIME');
    if (!stringyPokedex) return [];  
    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
}