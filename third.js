// Loops

// for loop
for (let i = 1; i <= 5; i++) {
	console.log(i);
}

// while loop
let j = 0;
while (j <= 5) {
	console.log(j);
	j++;
}

// do while loop
let k = 0;
do {
	console.log(k);
	k++;
} while (k <= 5);

// for in loop
const person = {
	name: 'John',
	age: 30,
};
for (let key in person) {
	console.log(key, person[key]);
}

// for of loop
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
	console.log(color);
}
