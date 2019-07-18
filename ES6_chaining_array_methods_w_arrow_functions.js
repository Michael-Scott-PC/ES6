// Arrays of Objects
// Efficiently combining and chaining Array Methods and Arrow Functions
// person.email.indexOf("@replicant") > -1
// Find the names of all the people who have "replicant.io" emails

let people = [
    {'id': 123, 'name': 'Rick Deckard', 'email': 'rick@bladerunner.org'},
    {'id': 456, 'name': 'Steve Jett', 'email': 'steve@yahoo.com'},
    {'id': 789, 'name': 'Dirk Nowitzki', 'email': 'dirk@mavs.io'},
    {'id': 101, 'name': 'Lebron James', 'email': 'LBJ@lakers.io'}
];

// Two step version
let replicants = people.filter(function(person) {
    return person.email.indexOf('io') > -1;
});
let names = replicants.map(function(person) {
    return person.name;
});
console.log('console.log #1: Names of replicant io: ', names);

// Chain the two steps
let replicantNames = people.filter(function(person) {
    return person.email.indexOf('io') > -1;
}).map(function(person) {
    return person.name;
});
console.log('console.log #2: Names of replicant io: ', replicantNames);

// Arrow Function version
let replicantNamesArrow = people.filter( person => person.email.indexOf('io') > -1 )
    .map( person => person.name );

console.log('conole.log #3: using arrow function' , replicantNamesArrow);
