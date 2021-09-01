import { findById } from './utils.js';

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
    if (findPokemon) {
        findPokemon.encountered++;
    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId
        };
        pokedex.push(newItem);
    }
    setPokedex(pokedex);
}