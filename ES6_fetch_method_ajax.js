// basic fetch
// using jsonplaceholder for the data
// remember that fetch returns a promise
// HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
// to test with NODE we need to install the node-fetch package
// npm install node-fetch
let fetch = require('node-fetch');

// get the details for a random user
const root = 'https://uselessfacts.jsph.pl';
//let id = Math.floor(Math.random() * 20) + 1;
let uri = root + '/random.json?language=en';

console.log('FETCH: ', uri);
// any user id higher than 10 will generate a 404 error

fetch( uri )
    .then( function( res ) {
        if( res.status == 200 ) {
            //console.log(res.text);
            return res.json();
        } else {
            throw new Error('Invalid user ID');
        }
    } )
    .then( ( data ) => {
        //console.log( data );
        let textData = Object.values(data);
        console.log(textData);

        let output = document.getElementById('output');
        output.textContent = textData;
    } )
    .catch( (err) => {
        console.log('Error: ', err.message);
    } );