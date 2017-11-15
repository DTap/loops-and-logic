//Print every number from zero to one hundred, including zero
//and one hundred, but if the number is evenly
//divisibe by 3 log 'fizz' instead, if the number
//is evenly divisble by 5 log 'buzz' instead, if the
//the number is evenly divisble by 3 and 5 log 'fizzbuzz'

//BONUS

//Create an array and reverse it
//or
//orcreate a function that tests if a string is a palindrome

for (var x = 0; x <= 100; x++) {
 if (x===0) {
  console.log(0);
 }else if (x % 3 === 0 && x % 5 === 0) {
   console.log('fizzbuzz');
 }else if (x % 5 === 0) {
   console.log('buzz');
 }else if (x % 3 === 0 && x % 5 ===0) {
   console.log('fizz');
 }else {
   console.log(x);
 }
}

//this is the while loop solution
var y = 0;
while (y<= 100) {
  if (y === 0) {
  console.log(y);
}else if (y % 3 === 0 && y % 5 === 0) {
 console.log('fizzbuzz');
}else if (y % 3 === 0) {
  console.log('fizz');
}else if (y % 5 === 0) {
  console.log('buzz');
}else {
  console.log(y);
}
y++;
}
