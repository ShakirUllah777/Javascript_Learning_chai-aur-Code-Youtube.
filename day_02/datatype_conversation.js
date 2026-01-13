// data type conversation in the javascript 

let age = '24'
let isStudent = 'true'
console.log(typeof age) // string
console.log(typeof isStudent) // string

// converting string to number
let ageNumber = Number(age)
console.log(typeof ageNumber) // number

// converting string to boolean
let isStudentBoolean = (isStudent === 'true')
console.log(typeof isStudentBoolean) // boolean

// converting number to string
let score = 95
let scoreString = String(score)
console.log(typeof scoreString) // string

// converting boolean to string
let isGraduated = false
let isGraduatedString = String(isGraduated)
console.log(typeof isGraduatedString) // string

// converting number to boolean
let height = 0
let heightBoolean = Boolean(height)
console.log(typeof heightBoolean) // boolean
