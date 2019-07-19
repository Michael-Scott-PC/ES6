// basic fetch
// using jsonplaceholder for the data
// remember that fetch returns a promise
// HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
// to test with NODE we need to install the node-fetch package
// npm install node-fetch
// let fetch = require('node-fetch');

// get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1;
let uri = root + '/users/' + id;

console.log('FETCH: ', uri);
// any user id higher than 10 will generate a 404 error

fetch( uri )
    .then( function( res ) {
        if( res.status == 200 ) {
            return res.json();
        } else {
            throw new Error('Invalid user ID');
        }
    } )
    .then( ( data ) => {
        console.log( data );
        let jsonData = JSON.stringify(data);

        let output = document.getElementById('output');
        output.textContent = jsonData;
    } )
    .catch( (err) => {
        console.log('Error: ', err.message);
    } );