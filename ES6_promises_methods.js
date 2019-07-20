// ES6 Promises - More syntax and examples
// calling resolve directly
// calling reject directly

let p1 = new Promise((resolve, reject) => {
    if(true) {
        resolve('p1 resolved');
    } else {
        reject('p1 rejected');
    }
});

let p2 = Promise.resolve('p2 resolved');
let p3 = () => Promise.resolve(null);
let p4 = () => Promise.reject('p4 rejected');

p1.then( (resp) => {
    console.log('p1: ', resp);
});
p2.then( (resp) => {
    console.log('p2: ', resp);
});

p3().then( (resp) => {
    console.log('p3: ', resp);
});

p4().then( (resp) => {
    console.log('Not resolved')
}) .catch( (resp) => {
    console.log('p4 reject: ', resp);
});