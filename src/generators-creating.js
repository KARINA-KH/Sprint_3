/*let generator = function*() {

}


let obj = {
    *generator() {}
};


class SomeClass {
    *generator() {}
}*/


/*
function* generator() {
    let array = [yield, yield, yield];
    console.log(array[2]);
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));
*/

/*
function generateArray() {
    yield* [1, 2, 3];
}

function* generator() {
    yield 42;
    yield* generateArray();
    yield 43;
}

let iterator = generator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
*/


function* generator() {
    try{
        yield 1;
        yield 2;
        yield 3;
    }
    catch(e) {
        console.log(e);
    }
    
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());