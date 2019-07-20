// Promise.race()
// when you only want the result from the first
// resolved promise

let p1 = Promise.reject(111);
let p2 = Promise.resolve(222);
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 333);
});

Promise.race([p1, p2, p3])
    .then((resp) => {
        console.log('Winning: ', resp);
    })
    .catch((resp) => {
        console.log('Failed: ', resp);
    });