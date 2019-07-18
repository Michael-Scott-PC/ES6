// Promises
// wrappers for anything async
// ajax calls, reading files, timeouts, geolocation, talk to a database, or anything that would use a callback function
// use them to get rid of callback hell
// fetch() returns a Promise.

//var result = multiplyTwoNumbers(5, 10);
//console.log(result); 

//var photo = downloadPhoto('http://localhost/cat.jpg');
// photo would be 'undefined'

const rand = () => Math.floor(Math.random() * 10) + 1;

// a promise can be wrapped around any function, but typically it is for asynchronous functions
let p1 = new Promise((res, rej) => {
    let x = 5;
    //res(x); // calling this will call then()
    rej(x);
    let num = rand();
    setTimeout(res, 1500, num);
});

p1.then((ex) => {
    return ex;
}).then((x) => {
    console.log(x);
}).catch( (exx) => {
    console.log('caught', exx);
});