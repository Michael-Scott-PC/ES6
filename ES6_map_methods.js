// ES6 Map methods
// 
// .get(k) .set(k, v) .clear() .delete(k) .has(k)
// .forEach(func) .size property
const log = console.log;
let starWars = new Map();

starWars.set('Luke', 'Mark Hamill');
starWars.set('Han', 'Harrison Ford');
let h = starWars.get('Han');
log(h);

//starWars.delete('Han');
// .clear() will clear every k,v pair in the map
//starWars.clear();

starWars.forEach( (value, key) => {
    console.log(`${key} = ${value}`);
});

let t = starWars.has('Luke');
log(t);

if(starWars.has('Han')) {
    log('starWars map has Han!');
}

if(starWars.has('Chewbaca')) {
    log('starWars map has Chewbaca');
} else {
    log('starWars map does NOT have Chewbaca');
}

log(starWars.size);

// .entries() .keys() .values() are the 3 other methods for the maps