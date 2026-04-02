console.log("===========JavaScript Data Types ============");
// Primitive Data Types
let name = "Diwakar Singh Thakur";  
let age = 25;
let isEmployed = true;
let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("unique");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Employed:", isEmployed);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
console.log("Symbol Value:", symbolValue);
// Reference Data Types
let person = {
    name: "Diwakar Singh Thakur",       
    age: 25,
    isEmployed: true
};
let numbers = [1, 2, 3, 4, 5];      
function greet() {
    console.log("Hello, " + name);  
}
greet();
console.log("Person Object:", person);
console.log("Numbers Array:", numbers);
console.log("===========End of JavaScript Data Types ============");
console.log("===========Type Checking and Type Coercion ============");
var a = null; // This will log null
console.log("type of a:", typeof a);
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isEmployed:", typeof isEmployed);
console.log("Type of nullValue:", typeof nullValue);
console.log("Type of undefinedValue:", typeof undefinedValue);
console.log("Type of symbolValue:", typeof symbolValue);
console.log("Type of person:", typeof person);
console.log("Type of numbers:", typeof numbers);
console.log("Type of greet:", typeof greet);
console.log("===========Type Coercion============");
console.log("5" + 10); // This will log "510" because of string concatenation
console.log("5" - 10); // This will log -5 because of numeric subtraction
console.log("5" * 10);  // This will log 50 because of numeric multiplication
console.log("5" / 10);  // This will log 0.5 because of numeric division
console.log("5" == 5); // This will log true because of type coercion
console.log("5" === 5); // This will log false because of strict equality
console.log(0 == false); // This will log true because of type coercion
console.log(0 === false);   // This will log false because of strict equality
console.log(true + false); // This will log 1 because true is coerced to 1 and false is coerced to 0
console.log(true + 1); // This will log 2 because true is coerced to 1
console.log(false + 1); // This will log 1 because false is coerced to 0    
console.log("true" + 1); // This will log "true1" because of string concatenation
console.log("===========End of Type Checking and Type Coercion ============");
