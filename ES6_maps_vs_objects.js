// Maps vs Objects
// ES6 Maps are a good replacement for Objects
// in many circumstances but not all

let a = {'name': 'Sherlock'};
let b = {'name': 'Watson'};
let people = {};

people[a] = 'Detective'; // a ['object':Object]
people[b] = 'Doctor'; // b ['object':Object]
// can't use objects as keys for other objects
// object keys are converted into a string

// A map is a structure made up of key/value pairs
// and the keys can be objects, strings, symbols
// numbers, pretty much anything you want to use 
let characters = new Map();
characters.set(a, 'Detective');
characters.set(b, 'Doctor');

// console.log( characters.get(a), characters.get(b));
// console.log(a);
// console.log(b);

for(let [key, value] of characters) {
    console.log(key, value);
    console.log(`${key} = ${value}`);
}