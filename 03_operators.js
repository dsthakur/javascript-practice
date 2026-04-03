console.log("===========Javascripts Operators ============");
console.log("===========Arithmetic Operators============");
let a = 10;
let b = 5;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("===========Assignment Operators============");
let c =10;
c +=5; // c = c + 5
console.log("c += 5:", c);
c -= 3; // c = c - 3
console.log("c -= 3:", c);
c *= 2; // c = c * 2
console.log("c *= 2:", c);
c /= 4; // c = c / 4
console.log("c /= 4:", c);
c %= 4; // c = c % 4
console.log("c %= 4:", c);
c **= 2; // c = c ** 2
console.log("c **= 2:", c);
console.log("===========Comparison Operators============");
d = "5";
e = 5;
console.log("d == e :",d ==e); // Equality checks only value, not type
console.log("d === e :",d === e);   // Strict equality checks both value and type
console.log("d != e :",d !=e); // Equality checks only value, not type
console.log("d !== e :",d !== e);// Strict inequality checks both value and type
console.log("d > e :",d > e);   //  Greater than
console.log("d >= e :",d >= e); // Greater than or equal to 
console.log("d < e :",d < e);     // Less than
console.log("d <= e :",d <= e); // Less than or equal to
console.log("===========Logical Operators============");
let age = 25;
let isEmployed = false;
console.log("age > 18 && isEmployed:", age > 18 && isEmployed); // Logical AND
console.log("age > 18 || isEmployed:", age > 18 || isEmployed); // Logical OR
console.log("!isEmployed:", !isEmployed); // Logical NOT
console.log("===========Ternary Operator============");
let status = age > 18 ? "Adult" : "Minor";
console.log("Status:", status);
access = isEmployed ? "Access Granted" : "Access Denied"; // This will log "Access Denied" because isEmployed is false
console.log("Access:", access);
console.log("===========Typeof Operator============");
console.log("typeof age:", typeof age);
console.log("typeof isEmployed:", typeof isEmployed);
console.log("===========End of JavaScript Operators ============");