import { renderThreePokemon } from '../utils.js';
import { capturePokemon } from '../local-storage.js';
import { seenPokemon } from '../local-storage.js';

const test = QUnit.test;

test('should take in an id and either create an array or increment the encountered', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = seenPokemon();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
