//  String Methods

a = 'luMInar'

// startsWith()
console.log(a.startsWith('lum'));

// endsWith()
console.log(a.endsWith('nar'));

//toUpperCase()
console.log(a.toUpperCase()); 

// toLowerCase()
console.log(a.toLowerCase());

// trim()
str = '          asdfghjk'
str1 = str.trim()
console.log(str1);

// substring()   (startindex,endindex) - endindex is not included in the new array

str = 'luminar'

str1 = str.substring(0,4)
console.log(str1);
str2 = str.substring(2)
console.log(str2);