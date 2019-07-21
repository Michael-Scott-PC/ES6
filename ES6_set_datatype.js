// the Set datatype in ES6
// An Array-like object that enforces uniqueness
// Methods - add(), delete(), has(), clear(),
// forEach(), entries() same as values()
// Properties - size

let s = new Set();
s.add(23);
s.add('hello');
s.add(true);

s.forEach(function(item) {
    console.log(item);
});

console.log(s.has('hello'));
s.delete(23);
s.delete(true);
s.forEach(function(item) {
    console.log('xx', item);
});

