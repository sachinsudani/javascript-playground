let score = 33;

console.log(typeof score);

let value = Object(score);

console.log(typeof value);

console.log(value);

// Number
// "33" => 33
// "33.5" => 33.5
// "true" => 1
// "false" => 0
// "hello" => NaN
// "3 + 3" => NaN

// String
// 33 => "33"
// 33.5 => "33.5"
// 1 => "1"
// 0 => "0"
// NaN => "NaN"
// 3 + 3 => "6"

// Boolean
// "33" => true
// "33.5" => true
// "true" => true
// "false" => false
// "hello" => true
// "3 + 3" => true
