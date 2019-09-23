// Destructuring assignment is a feature that came along with ES6. 
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables. 
// That is, we can extract data from arrays and objects and assign them to variables.
var a,b,d;
[a,b]=[10,20];
console.log(a);
console.log(b);
[a,b,...d]=[10,20,30,40,50,60,70,80,90];
console.log(d);
// ---------------------------------Array destructuring------------------------------------
var g=["roshan","rohan","swapan"];
var [one,two,three]=g;
console.log(one);
console.log(two);
console.log(three); 
// -----------------------------------object destructuring-----------------------------------
var h={name:"roshan",age:20,year:2019};
var {name,age,year}=h;
console.log(name);
console.log(age);
console.log(year);