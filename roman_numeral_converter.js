

function convertToRoman(num) {
    if (num >= 4000) {return "Please enter a number between 1 and 3999"}
    else if(num >= 1000){ return "M" + convertToRoman(num - 1000);}    
    else if(num >= 900){ return "CM" + convertToRoman(num - 900);}    
    else if(num >= 500){ return "D" + convertToRoman(num - 500);}
    else if(num >= 400){ return "CD" + convertToRoman(num - 400);}
    else if(num >= 100){ return "C" + convertToRoman(num - 100);}
    else if(num >= 90){ return "XC" + convertToRoman(num - 90);}
    else if(num >= 50){ return "L" + convertToRoman(num - 50);}
    else if(num >= 40){ return "XL" + convertToRoman(num - 40);}
    else if(num >= 10){ return "X" + convertToRoman(num - 10);}
    else if(num >= 9){ return "IX" + convertToRoman(num - 9);}
    else if(num >= 5){ return "V" + convertToRoman(num - 5);}
    else if(num >= 4){ return "IV" + convertToRoman(num - 4);}
    else if(num >= 1){ return "I" + convertToRoman(num - 1);}
    else if(num == 0) { return ""}
}

//using the recursive method to convert a number into a roman numberal
function romanToArabic(romanNumber){
  romanNumber = romanNumber.toUpperCase();
  const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }
  return num;
}

romanToArabic('MMC');

convertToRoman(3999);
