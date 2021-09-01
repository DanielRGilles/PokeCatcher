import { renderThreePokemon } from '../utils.js';
import { capturePokemon, setPokedex } from '../local-storage.js';
import { seenPokemon, getPokedex } from '../local-storage.js';
// import pokemon from '../data.js';
const test = QUnit.test;

test('should take in an id and either create an array or increment the encountered', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let dataMon = {
        captured: 0,
        encountered: 1,
        id: 1
    };
    const expected = {
        captured: 0,
        encountered: 2,
        id: 1
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = seenPokemon('1');
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
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
    //Arrange
    // Set up your arguments and expectations
    const stringyItem = ['1', '2', '3', '4'];
    setPokedex(stringyItem);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPokedex();
    
    const expected = [1, 2, 3, 4];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
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
