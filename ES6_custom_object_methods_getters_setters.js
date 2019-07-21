// New ways of declaring methods for objects
// getters and setters for object properties

const log = console.log;
let x = 7;

let obj = {
    _prop1: 1979,
    get prop1() {
        return this._prop1 * 2;
    },
    set prop1(_val) {
        return this._prop1 = _val;
    },
    prop2: 'Alien',
    x,
    prop3() {
        log('called prop3');
    }
};

//obj.prop3();
//log(obj.x);
log(obj.prop1);
obj.prop1 = obj._prop1 * 2;
log(obj.prop1);

/* var obj = {
    prop1: 1979,
    prop2: 'Alien',
    prop3: function() {

    }
}; */