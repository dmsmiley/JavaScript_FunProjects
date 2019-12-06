function palindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^a-zA-Z0-9]/gi, '')
  let newStr = str
  newStr = newStr.split('')
  newStr = newStr.reverse()
  newStr = newStr.join('')
  
  if (newStr == str) {
    return true;
  }
  else {
    return false;
  }
}

#example
palindrome("eye");
