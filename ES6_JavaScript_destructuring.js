// ES6 Destructuring
// extracting values from objects and arrays
// and assigning them to multiple values

let name, id, nm, num, star, planet, rest;
let personObj = {name: 'Arthur Dent', id: 42, planet: 'Earth'};
let personArr = ['Zaphod', 123, 'Betelgeuse'];

[nm, num] = personArr;
console.log(nm, num);

[nm, , star] = personArr;
console.log(nm, star);

[nm, ...rest] = personArr;
console.log(nm, rest);
console.log(nm, rest[1]);

({name , planet, id} = personObj);
console.log(name, planet, id);

const f = ({id, planet, name, star='Sol'}) => {
    console.log(name, id, planet, star);
};

f(personObj);
