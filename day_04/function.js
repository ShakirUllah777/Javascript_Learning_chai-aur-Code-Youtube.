// function in the javascript

// simple funcation in the js 
function addtoNumber(a,b){
    return a + b;
}

let result = addtoNumber(5,10);
console.log(result);

function userloggedin(username){
    if(!username){
        return 'Plz enter a username';
    }
    return `User ${username} has logged in.`;
}

let message = userloggedin("");
console.log(message); 

// function with object and array
let user = {
    name: "Alice", 
    age: 30
};

function getUserDetails(user){
    return `Name: ${user.name}, Age: ${user.age}`;
}
console.log(getUserDetails(user));

function getFirstElement(arr){
    if(arr.length === 0){
        return 'Array is empty';
    }
    return arr[0];
}
let numbers = [10, 20, 30];
console.log(getFirstElement(numbers));


// Global and local scope
// Global variable is defined outside any function
// local variable is defined inside a function
let a = 300
if(true){
    let b = 400;
    console.log(a); 
    console.log(b); 
}
console.log(a);

// inner loop variable scope 

function one(){
    const username = 'turkish';
    function two(){
        const age = 25;
        console.log(username + age);
    }

}
one()


// This and arrow function

