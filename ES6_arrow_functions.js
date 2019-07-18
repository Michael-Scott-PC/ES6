let numbers = [100, 200, 300, 400, 500];
let names = ['Mike', 'Eric', 'Donnie', 'Kyle', 'Kristin'];

let big = numbers.filter(function(num) {
    return num < 200;
});
console.log(big);

let bigA = numbers.filter( num => num > 200 );
console.log(bigA);

names.forEach(function( item, index ) {
    console.log( index, item );
});

names.forEach( ( name, index ) => console.log( index, name ) );