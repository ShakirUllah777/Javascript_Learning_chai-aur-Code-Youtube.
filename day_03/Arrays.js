// Arays in the javscripts 

const muarray = ['apple', 'banna' , 'chali']
console.log(muarray);

// accessing the array elements
console.log(muarray[0]);
console.log(muarray[1]);
console.log(muarray[2]);

// modifying the array elements
muarray[1] = 'grapes'
console.log(muarray);

// array methods
// 1. push() - adds an element to the end of the array
muarray.push('orange')
console.log(muarray);

// 2. pop() - removes the last element of the array
muarray.pop()
console.log(muarray);

// 3. shift() - removes the first element of the array
muarray.shift()
console.log(muarray);

// 4. unshift() - adds an element to the beginning of the array
muarray.unshift('mango')
console.log(muarray);

// 5. length - returns the length of the array
console.log(muarray.length);
// 6. indexOf() - returns the index of the first occurrence of an element
console.log(muarray.indexOf('chali'));

// 7. slice() - returns a shallow copy of a portion of an array
const newArray = muarray.slice(0,2)
console.log(newArray);

// 8. splice() - adds/removes elements from an array
muarray.splice(1,1,'kiwi')
console.log(muarray);

// concatenation of arrays  -- return a new array 
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const concatenatedArray = array1.concat(array2)
console.log(concatenatedArray);

// of --- used to create a new array from a set of values
const array3 = Array.of(1,2,3,4,5)
console.log(array3);



