"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we can use this only in browser not in node js environment

console.log(3 + 3);

// JavaScript has the following data types:
// Primitive DataTypes
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAScript 2015)
// 7. BigInt
// Non-Primitive DataTypes (Reference Types)
// 1. Object
// 2. Array
// 3. Functions

// 1. Number
let a = 10;
let b = 10.5;

// 2. String
let c = "Hello";
let d = 'World';

// 3. Boolean
let e = true;
let f = false;

// 4. Undefined
let g;

// 5. Null
let h = null;

// 6. Symbol
let i = Symbol("id");

// 7. BigInt
let j = 1234567890123456789012345678901234567890n;

// Non-Primitive DataTypes (Reference Types)

// 1. Object
let k = {
  name: "John",
  age: 30,
  cgpa: 3.5,
  isGraduated: true,
};

// 2. Array
let l = [1, 2, 3, 4, 5];

// 3. Functions
let m = function () {
  console.log("Hello World");
};

m();
