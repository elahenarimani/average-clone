"use strict"
let number;
let sum=0;
let average;
let i;
for(i=0; i<100 ; i++){
number=Number(prompt());
sum=number+sum;
}
average=sum/i;
console.log(average);