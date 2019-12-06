function telephoneCheck(str) {
  //(1\s?)? checks for a 1 or 1 with space if it is there
  //\d{3} checks for three digits
  //(\d{3}\)|\d{3}) checks for either three digits with parenthesis on each side or three digits without parenthesis
  
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return regex.test(str);
  
}

//example
telephoneCheck("-1 (757) 622-7382");
