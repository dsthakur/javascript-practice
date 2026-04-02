console.log("===========JavaScript Basics , Scope and Hosting ============");
var name ="Diwakar Singh Thakur";
let age = 25;
const country = "India";
console.log(name);
console.log(age);
console.log(country);
console.log("===========Reassigning values to variables ============");
name = "Diwakar Thakur";
age = 26;
country = "USA"; // This will throw an error because we cannot reassign a constant variable
console.log(name);
console.log(age);
console.log(country);
console.log("===========Scope and Hosting ============");
function greet() {
    console.log("Hello, " + name);
}
greet();
console.log("===========block scope with let and const ============");
{
    let age = 30;
    const state = "Punjab";
    console.log(age);
    console.log(state);
}
console.log(age); // This will log 26, not 30, because the block scope variable is not accessible here
console.log(state); // This will throw an error because state is not defined in this scope
console.log("===========Hoisting ============");
console.log(hoistedVar); // This will log undefined because of hoisting
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // This will log "I am hoisted"    
console.log("===========Hoisting with let and const ============");
console.log(hoistedLet); // This will throw an error because let is not hoisted
let hoistedLet = "I am hoisted let";
console.log(hoistedLet); // This will log "I am hoisted let"
console.log(hoistedConst); // This will throw an error because const is not hoisted
const hoistedConst = "I am hoisted const";
console.log(hoistedConst); // This will log "I am hoisted const"
console.log("===========End of JavaScript Basics ============");