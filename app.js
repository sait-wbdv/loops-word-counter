"use strict";

const sentence = "The quick brown fox jumps over the lazy dog.";

// 1. split the sentence up at the spaces and make sure the letters are all lowerCase
const words = sentence.toLowerCase().split(" ");

// 2 add this replace method with a regular expression to the split code to remove punctuation
/* .replace(/[.,!>]/g, "") */
let wordCounts = {};

// 3. initialize an object variable that you can add values to

// 4. iterate through the words in the array
for (const word of words) {
  // if the word exists, add to it's count
  if (wordCounts[word]) {
    wordCounts[word]++;
    // if it's the first encounter, add the word with the value of 1
  } else {
    wordCounts[word] = 1;
  }
}

console.log(wordCounts);
