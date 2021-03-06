let xmen = ['Cyclopes', 'Wolverine', 'Rogue'];

/*console.info('for');
for (let index = 0; index < xmen.length; index++) {
    console.log(xmen[index]);
}

console.info('for...in');
for (let key in xmen) {
    console.log(xmen[key]);
}

console.info('forEach');
xmen.forEach(xman => console.log(xman));

console.info('for...of');*/

/*for (let xman of xmen) {
    console.log(xman);
}

let iterator = xmen[Symbol.iterator]();*/

/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.length); // не можем использовать*/

/*let next = xmen[Symbol.iterator]();

let next = iterator.next();

while(!next.done) {
    console.log(next.value);
    next = iterator.next();
}*/

/*
let idGenerator = {
    [Symbol,iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;
                return { value, done };
            }
        };
    }
};

for (let id of idGenerator) {
    console.log(id);
}



let randomGenerator = {
    generate() {
        return this.[Symbol.iterator]();
    },

    [Symbol,iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;
                return { value, done };
            }
        };
    }
};

let random = randomGenerator.generate();
console.log(random.next().value);*/


class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = { value: undefined, done: true };

            if (this.index < tthis.array.length) {
                result.value = this.array[this.index];
                result.done = false;
                this.index += 1;
            }

            return result;
    }
}



class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterqator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks('Изучить JavaScript', 'Изучить ES6', 'Купить продукты');

for (let task of taskList) {
    console.log(task);
}


