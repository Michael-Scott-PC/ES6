// Sending data to the server using Fetch()
// using jsonplaceholder for the data
// GET
// http://jsonplaceholder.typicode.com/posts?userId=1
// http://jsonplaceholder.typicode.com/todos?userId=2
// POST
// http://jsonplaceholder.typicode.com/posts

const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

let formdata = new FormData();
formdata.append('userId', 3);
formdata.append('title', 'This is my title');
formdata.append('body', 'This the body text of the post');


let options = {
    method: 'POST',
    mode: 'cors',
    body: formdata
};

let req = new Request(uri, options);

fetch(req)
    .then( (res)  => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error('BAD HTTP');
        }
    })
    .then( (jsonData)  => {
        console.log(jsonData);
    })
    .catch( (err)  => {
        console.log('ERROR: ', err.message);
    });