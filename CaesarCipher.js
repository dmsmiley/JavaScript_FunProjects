//Caesar Cipher
function rot13(str) {
  str = str.toUpperCase();
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  //function for finding the currect index value of the chr
  var index = x => input.indexOf(x);
  //function for the index value and if it is greater than -1 it will output the corresponding output index chr for x
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  //split the chr input, replace chr with the translate function and map into new array, then join the new chr in a new str
  return str.split('').map(translate).join('');
}
// Change the inputs below to test
a = rot13("SERR PBQR PNZC");
console.log(a);
