import { getPokedex, getPokedexHistory } from '../local-storage.js';

const resetEl = document.getElementById('reset-button');

resetEl.addEventListener('click', () => {
    let history = getPokedexHistory();
    const thisPlay = getPokedex();
    history.push(thisPlay);
    setPokeHistory(history);
    window.location.href = '../index.html';  
    
});


function setPokeHistory(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem('PLAYSFORALLTIME', stringyPokedex);
    localStorage.removeItem('PDEX');
} 


// array.push(new array)