//Varaible

//let keyword - to assign a value to a variable
let a = 5
console.log(a);

if (true) {
    let b = 10
}

// console.log(b) - it gives error because b has scope in between { }


//var keyword
if (true){
    var c = 11
}
console.log(c)

const d = 20
console.log(d)

//Dynamic Typing
let a1 = 100
console.log(a1)

a1 = "moiz"
console.log(a1)

// Ternay Operator
let age = 24
let status = (age >= 19) ? "You can vote" : "You cannot Vote"

console.log(status)
