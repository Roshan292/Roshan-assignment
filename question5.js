var arr1=[23,67,56,45];
var arr2=[85,95,34,12];
var arr3=arr2[Symbol.iterator]();
arr2.map(myfunction=>{arr1=[...arr1,arr3.next().value];})
console.log(arr1);