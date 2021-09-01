import { renderThreePokemon } from '../utils.js';
import { capturePokemon, setPokedex } from '../local-storage.js';
import { seenPokemon, getPokedex } from '../local-storage.js';
// import pokemon from '../data.js';
const test = QUnit.test;

test('should take in an id and either create an array or increment the encountered by passing an array into the local storage and pulling out with get and set pokedex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let testedArray = [
        { captured: 0, encountered: 0, id: 1 },
        { captured: 0, encountered: 1, id: 2 },
        { captured: 0, encountered: 1, id: 4 }
    ];
    setPokedex(testedArray);
    
    //Act 
    seenPokemon(1);
    // Call the function you're testing and set the result to a const
    const mutatedPokemon = getPokedex(); 
    const actual = mutatedPokemon[0].encountered === 1;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, true);
});
test('should take in an id and either create an array or increment the captured by passing an array into the local storage and pulling out with get and set pokedex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let testedArray = [
        { captured: 0, encountered: 0, id: 1 },
        { captured: 0, encountered: 1, id: 2 },
        { captured: 0, encountered: 1, id: 4 }
    ];
    setPokedex(testedArray);
    //Act 
    capturePokemon(1);
    // Call the function you're testing and set the result to a const
    const mutatedPokemon = getPokedex(); 
    const actual = mutatedPokemon[0].captured === 1;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, true);
});


test('should take an array and stringify it into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testedArray = [1, 2, 3, 4];
    const expected = localStorage.setItem('PDEX', testedArray);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setPokedex(testedArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should grab an stringy item out of localstorage and then parse ', (expect) => {
    // Set up your arguments and expectations
    const sendingtoStorage = [1, 2, 3, 4];
    const stringyPokedex = JSON.stringify(sendingtoStorage);
    localStorage.setItem('PDEX', stringyPokedex);
    //Act 
    
    // Call the function you're testing and set the result to a const
    const actual = getPokedex();
    //Expect
    const expected = [1, 2, 3, 4];
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
// skip('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
