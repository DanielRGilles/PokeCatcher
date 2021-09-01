import { getPokedex } from '../local-storage.js';

var ctx = document.getElementById('myChart');

const pokedex = getPokedex();
const arrayOfNames = pokedex.map(({ name }) => name);
const numberofEnc = pokedex.map(({ encountered }) => encountered);
const numberofCap = pokedex.map(({ captured }) => captured);


var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: arrayOfNames,
        datasets: [
            {
                label: 'captured',
                data: numberofCap,
                backgroundColor: [
                    'orange'
                ],

                borderWidth: 1
            },
            {
                label: 'encounterd',
                data: numberofEnc,
                backgroundColor: [
                    'red'
                ],

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});