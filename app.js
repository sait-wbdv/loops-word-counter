"use strict";

const sentence = "The quick brown fox jumps over the lazy dog.";

// 1. split the sentence up at the spaces and make sure the letters are all lowerCase, 2. remove punctuation
const words = sentence
  .toLowerCase()
  .replace(/[.,!>]/g, "")
  .split(" ");

// 3. initialize an object variable that you can add values to
let wordCounts = {};

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
