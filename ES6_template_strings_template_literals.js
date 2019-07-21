// template string / template literals ES6

// wrapped with back-tick character like table names in SQL
// Variables and expressions wrapped in ${ }
// Tagged Template Literals

const log = console.log;

let message = 'I\'m going to the store';
let message1 = "And then he said, \"That's what she said.\"";

let item = 'Heineken';
let message2 = 'I\'m going to buy ' + item + ' at the store';
let message3 = ''.concat('I\'m going to buy ', item, ' at the store');
let arr = ['a', 'b', 'c'];
let message4 = 'The first letter is ' + arr[0] + '.';

// inside template strings you can put variables or JavaScript expressions or both
let msg = `I'm going to buy ${item.toUpperCase()} at the store`;
log(msg);

function bubba(strings, ...expressions) {
    log(strings.length);
    log(expressions.length);

    return strings[1] + ' ' + strings[0] + expressions[0];
}

// When you use the back-ticks and put a tagged template literal in the middle of a string, it treats the first half of the string and the second half of the string as separate strings with their own indexes. 
let str = bubba`This will be string index 0 ${item} this will be string index 1`;
log(str);