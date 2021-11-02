// Chapter 8 Exercise

// Word info: Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
let givenWord = prompt("Give me a word");

console.log (`Character Counter (Length): ${givenWord.length}`);
const lowercaseWord = givenWord.toLowerCase();
console.log (`Lowercase: ${lowercaseWord}`);
const uppercaseWord = givenWord.toUpperCase();
console.log (`Uppercase: ${uppercaseWord}`);


//Vowel count: Improve the previous program so that it also shows the number of vowels inside the word.
// Store the vowelCounter function inside of the constant variable named "vowelCount"
const vowelCount = vowelCounter(givenWord);
// Display the number of vowels in the console
console.log(`Number of Vowels: ${vowelCount}`);

// Define the vowelCounter() function
function vowelCounter(givenWord) {
    const count = givenWord.match(/[aeiou]/gi).length;
    return count;
}
