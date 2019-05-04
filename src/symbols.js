/*let symbol = Symbol.for('name');
let symbol2 = Symbol.keyFor(symbol);

console.log(name);

//console.log(symbol);
//console.log(symbol2);
//console.log(symbol === symbol2);*/


/*let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'adsfa'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

//let password = user[Symbol.for('password')];
//console.log(password);

console.log(Object.getOwnPropertySymbols(user));*/

let object = {
    iterator: 0;
    [Symbol.iterator]() {}
};