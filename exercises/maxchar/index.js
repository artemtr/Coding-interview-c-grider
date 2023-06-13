// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let ob = {};
  let max = 1;
  let value = '';

  for (char of str) {
    if (ob[char]) {
      ob[char]++;
    } else {
      ob[char] = 1;
    }
  }
  for (key in ob) {
    if (ob[key] >= max) {
      max = ob[key];
      value = key;
    }
  }
  return value;
}

module.exports = maxChar;
