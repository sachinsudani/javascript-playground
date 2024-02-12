// This is a single line comment
/* This is a multi-line comment */

// operator
// 1. Arithmetic operator
// + - * / % ++ --

let a = 5;
let b = 2;

//
console.log('a = ', a, 'b = ', b);
console.log('a + b = ', a + b);
console.log('a - b = ', a - b);
console.log('a * b = ', a * b);
console.log('a / b = ', a / b);
console.log('a % b = ', a % b);
console.log('a ** b = ', a ** b);

// Increment and Decrement operator (Unary operator)
// post increment
console.log('a++ = ', a++);
console.log('a = ', a);
// pre increment
console.log('++a = ', ++a);
console.log('a = ', a);
// post decrement
console.log('a-- = ', a--);
console.log('a = ', a);
// pre decrement
console.log('--a = ', --a);
console.log('a = ', a);

// 2. Assignment operator
// = += -= *= /= %= **=
let c = 10;
console.log('c = ', c);
c += 5; // c = c + 5 increment
console.log('c += 5 = ', c);

c -= 5; // c = c - 5 decrement
console.log('c -= 5 = ', c);

c *= 5; // c = c * 5 multiply
console.log('c *= 5 = ', c);

c /= 5; // c = c / 5 divide
console.log('c /= 5 = ', c);

c %= 5; // c = c % 5 modulus
console.log('c %= 5 = ', c);

c = 2;
c **= 5; // c = c ** 5 exponentiation
console.log('c **= 5 = ', c);

// 3. Comparison operator
// == === != !== > < >= <=

let d = 5;
let e = 3;
console.log('d = ', d);
console.log('e = ', e);
console.log('d == e = ', d == e);
console.log('d === e = ', d === e);
console.log('d != e = ', d != e);
console.log('d !== e = ', d !== e);
console.log('d > e = ', d > e);
console.log('d < e = ', d < e);
console.log('d >= e = ', d >= e);
console.log('d <= e = ', d <= e);

// 4. Logical operator
// && || !

let f = true;
let g = false;
console.log('f = ', f);
console.log('g = ', g);
console.log('f && g = ', f && g);
console.log('f || g = ', f || g);
console.log('!f = ', !f);
console.log('!g = ', !g);

// 5. Bitwise operator
// & | ^ ~ << >>

let h = 5; // 101
let i = 3; // 011
console.log('h = ', h);
console.log('i = ', i);
console.log('h & i = ', h & i); // 001
console.log('h | i = ', h | i); // 111
console.log('h ^ i = ', h ^ i); // 110
console.log('~h = ', ~h); // 010
console.log('~i = ', ~i); // 100
console.log('h << 1 = ', h << 1); // 1010
console.log('i >> 1 = ', i >> 1); // 001

// 6. String operator
// +

let j = 'Hello';
let k = 'World';
console.log('j = ', j);
console.log('k = ', k);
console.log('j + k = ', j + k);

// 7. Conditional operator
// ? :

let l = 5;
let m = 3;
console.log('l = ', l);
console.log('m = ', m);
console.log('l > m ? l : m = ', l > m ? l : m);

// 8. Typeof operator
// typeof

let n = 5;
let o = 'Hello';
let p = true;
let q = null;
let r;
let s = {};
let t = [];
let u = function () {};
console.log('n = ', n, 'typeof n = ', typeof n);
console.log('o = ', o, 'typeof o = ', typeof o);
console.log('p = ', p, 'typeof p = ', typeof p);
console.log('q = ', q, 'typeof q = ', typeof q);
console.log('r = ', r, 'typeof r = ', typeof r);
console.log('s = ', s, 'typeof s = ', typeof s);
console.log('t = ', t, 'typeof t = ', typeof t);
console.log('u = ', u, 'typeof u = ', typeof u);

// 9. instanceof operator
// instanceof

let v = {};
let w = [];
let x = function () {};
console.log('v = ', v, 'v instanceof Object = ', v instanceof Object);
console.log('w = ', w, 'w instanceof Array = ', w instanceof Array);
console.log('x = ', x, 'x instanceof Function = ', x instanceof Function);

// 10. delete operator
// delete

let y = { a: 5, b: 3 };
console.log('y = ', y);
delete y.a;
console.log('y = ', y);

// 11. in operator
// in

let z = { a: 5, b: 3 };
console.log('z = ', z);
console.log('a in z = ', 'a' in z);
console.log('c in z = ', 'c' in z);

// 12. new operator
// new

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

let person = new Person('John', 25);
console.log('person = ', person);
