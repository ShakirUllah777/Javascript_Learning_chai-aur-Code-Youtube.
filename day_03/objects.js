// objects in the JavaScript
// singleton pattern ---- this is one of the way to create singleton object
// in python we can say that it is the dictionary key value pair

// object literal syntax 
const jsunser = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    courses: ["html", "css", "js"],
    wife: null
}


console.log(jsunser);
console.log(typeof jsunser); // object
console.log(jsunser.name); // accessing value using dot notation
console.log(jsunser["age"]); // accessing value using bracket notation
console.log(jsunser.courses[1]); // accessing array value inside object
jsunser.isAdmin = false; // modifying value
console.log(jsunser.isAdmin);

jsunser.greeting = function(){
    console.log("Hello, " + this.name);
}

console.log(jsunser.greeting);


// singleton pattern 
const tinderuser = {}

tinderuser.name = "Jane Doe"
tinderuser.age = 25
tinderuser.isPremium = true
tinderuser.likes = ["music", "traveling", "cooking"]

console.log(tinderuser);

