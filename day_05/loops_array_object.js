// Loops over the arrays and objects

let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits){
  console.log(fruit);
}

// loop over the object properties
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person){
    console.log(key, person[key]);
}

// for loop with continue and break
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i); 
}

console.log('new line plz');


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit loop when i is 5
    }
    console.log(i);
}
