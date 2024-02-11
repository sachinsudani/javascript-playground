// JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type will be determined automatically when the program is being processed.

// JavaScript has the following data types:

fullName = 'John Doe'; // string
age = 25; // number
price = 10.5; // number
x = null; // object
y = undefined; // undefined
z = true; // boolean

// We can change the data type of a variable, even after the variable has been set. For example:
fullName = 25; // number
age = 'John Doe'; // string
price = true; // boolean
x = undefined; // undefined
y = null; // object
z = 10.5; // number

// Variable Rules

// JavaScript variables are case-sensitive. This means that the following variables are different:
var carName = 'Volvo';
var CarName = 'BMW';
// The following are also different:
var x = 5;
var X = 6;

// Only letters, numbers, and underscores and dollar signs can be used in variable names. not even spaces are allowed.

// var car Name = 'Toyota'; // This is not allowed
// var car-Name = 'Honda'; // This is not allowed
// var xxx@xxxx = 'Nissan'; // This is not allowed
// var carName! = 'Ford'; // This is not allowed

var carName = 'Volvo';
var car_name = 'BMW';
var $carName = 'Mercedes';
var _carName = 'Audi';

// only the first character of a variable name can be a letter, an underscore, or a dollar sign. The first character cannot be a number.

// var 1carName = 'Volvo'; // This is not allowed
// var @carName = 'BMW'; // This is not allowed
// var #carName = 'Mercedes'; // This is not allowed
// var &carName = 'Audi'; // This is not allowed

var carName1 = 'Volvo';
var carName_ = 'BMW';
var carName$ = 'Mercedes';
var carName_ = 'Audi';

// Reserved Words (Keywords)
// JavaScript has a set of keywords that are reserved words that cannot be used as variable names, function names, or any other identifiers.

// The following are examples of reserved words:
// abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, void, volatile, while, with, yield

var console = 'Volvo'; // This is not allowed

// Variable Names are Camel Case

// Variable names are often written in camel case in JavaScript. In camel case, the first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized. For example:
var firstName = 'John';
var lastName = 'Doe';
var carName = 'Volvo';
var priceValue = 10.5;
var fullName = firstName + ' ' + lastName;

// let, const and var
// In JavaScript, you can use var, let, or const to declare a variable.

// var
// The var keyword is used to declare a variable. The variable can be re-declared and updated. A global scope variable. It is not recommended to use var. For example:
var carName = 'Volvo';
var carName = 'BMW';
carName = 'Audi';

// let
// The let keyword is used to declare a variable. The variable can be updated but not re-declared. A block scope variable. It is recommended to use let. For example:
let carName = 'Volvo';
let carName;
carName = 'BMW';

// const
// The const keyword is used to declare a variable. The variable cannot be updated or re-declared. A block scope variable. It is recommended to use const. For example:

const carName = 'Volvo';
// const carName; // This is not allowed
// carName = 'BMW'; // This is not allowed

// Data Types
// JavaScript has the following data types:

// Primitive Data Types
// String
// Number
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Non-Primitive Data Types
// Object (Array, Function, Date, RegExp)

// String
// A string is a sequence of characters. For example:
var carName = 'Volvo';
var carName = 'Volvo' + ' ' + 'XC60';
var carName = 'Volvo' + ' ' + 5;

// Number
// A number can be written with or without decimals. For example:
var x = 3.14;
var y = 3;

// Boolean
// A Boolean represents one of two values: true or false. For example:
var x = true;
var y = false;

// Undefined
// A variable that has not been assigned a value has the value undefined. For example:
var car;
console.log(car); // undefined

// Null
// In JavaScript, null is "nothing". It is supposed to be something that doesn't exist. For example:
var car = null;

// Symbol
// A symbol is a unique and immutable data type that is often used to identify object properties. For example:
const id = Symbol('id');
const id1 = Symbol('id');
console.log(id === id1); // false

// BigInt
// BigInt is a new data type that can represent integers of arbitrary length. For example:
const bigIntValue = 1234567890123456789012345678901234567890n;

// Object
// In JavaScript, an object is a standalone entity, with properties and type. For example:
const student = { fullName: 'John Doe', age: 25, cgpa: 3.5, isGraduated: true };

student.fullName = 'Jane Doe';
student.age = 26;
student.cgpa = 3.6;
student.isGraduated = false;
student.address = 'Dhaka Bangladesh';

console.log(student);
