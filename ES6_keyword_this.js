// Understanding what "this" is
// "use strict"; with use strict enabled, this
// will become undefined. With it disabled,
// this will become the global object, which is
// the window.

/* eslint no-undef: "off"*/
let box = document.querySelector('.box');
let log = console.log;


// when you use an event listener to call
// a function, this will point to the object
// that triggered it.
let myFunc = function() {
    log('1', this);
    setTimeout( () => {
        log('3', 'timed out', this);
    }, 250);
};

// this inside of an arrow function ALWAYS uses the
// lexical scope - it will look to its parent
// to see where it was declared.
let myFunc2 = () => {
    log('2', this);
    setTimeout( () => {
        log('3', 'timed out', this);
    }, 250);
};

box.addEventListener('mousedown', myFunc);
box.addEventListener('mouseup', myFunc2);

//myFunc2();
//myFunc2.call(window);
//myFunc2.call(box);