// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let convertedStringtoArray = Array.from(str);
  let revesedArray = Array.prototype.reverse(convertedStringtoArray);
  debugger;
  let convertedArraytoString = revesedArray.toString();
  console.log(convertedArraytoString);
}

module.exports = reverse;
