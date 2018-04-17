'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

// Your code :
function jadenCase(string) {
    let tab = string.split(" ");
    for (let i = 0; i < tab.length; i++) {
        let word = tab[i].split("");
        word[0] = word[0].toUpperCase();
        tab[i] = word.join("");
    }
    return tab.join(" ");
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('hello world'), 'Hello World')
assert.strictEqual(jadenCase('hello world how are you today'),
    'Hello World How Are You Today')
// End of tests */
