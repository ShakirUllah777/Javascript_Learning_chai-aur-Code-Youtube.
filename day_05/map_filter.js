// map and filter in the jacscript


// filter function 
// The filter method creates a new array containing only the elements that pass a test (condition).

let myarrya = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = myarrya.filter(num => num > 5);
console.log(result);

let result2 = myarrya.filter(num => num < 5);
console.log(result2);


// map function
// The map method creates a new array by transforming each element of the original array.

let myarryb = [1, 2, 3, 4, 5];
let result3 = myarryb.map(num => num * 2);
console.log(result3);