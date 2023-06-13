// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let str1 = stringA.replace(/[^\w]/g, '');
  const obj1 = {};
  for (const letter of str1) {
    if (obj1.hasOwnProperty(letter)) {
      obj1[letter]++;
    } else {
      obj1[letter] = 1;
    }
  }

  let str2 = stringB.replace(/[^\w]/g, '');
  const obj2 = {};
  for (const letter of str2) {
    if (obj2.hasOwnProperty(letter)) {
      obj2[letter]++;
    } else {
      obj2[letter] = 1;
    }
  }

  if (Object.entries(obj1).length !== Object.entries(obj2).length) {
    console.log('Not');
  }
  let check = 'Anagram';
  for (const key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      check = 'not anagram';
      break;
    }
  }
  console.log(check);
}

module.exports = anagrams;
