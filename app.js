"use strict";

const sentence = "The quick brown fox jumps over the lazy dog.";

// 1. split the sentence up at the spaces and make sure the letters are all lowerCase

// 2 add the following replace method with a regular expression to the split code to remove punctuation: .replace(/[.,!>]/g, "")

// 3. initialize an object variable that you can add values to. the conditional code supplied expects this to be called "wordCounts"

// 4. iterate through the words in the array and execute the following conditional code for each word

// NOTE: depending on the type of loop that you use, where you initialize the word variable as seen below will change

if (wordCounts[word]) {
  /* if the word is already a key in the object */
  wordCounts[word]++; /* increment it's value count */
} else {
  /* if the word doesn't exist yet, add it and set it's value to 1 */
  wordCounts[word] = 1;
}
