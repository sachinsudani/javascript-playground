// Two types of memory
// 1. Stack
// 2. Heap

// 1. Stack - Primitive

let a = 10;
let b = a; // Copy by value
// console.log(a, b); // 10 10
a = 20;
// console.log(a, b); // 20 10

// 2. Heap - Reference

let d = { name: "John", age: 30 };

let e = d; // Copy by reference
// console.log(d, e); // { name: 'John', age: 30 } { name: 'John', age: 30 }
d.name = "Jane";
// console.log(d, e); // { name: 'Jane', age: 30 } { name: 'Jane', age: 30 }
