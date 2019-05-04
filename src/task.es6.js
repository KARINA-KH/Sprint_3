class Task {
    constructor(title = 'Задача') {
    this._title = title;
    this._done = false;
    Task.count += 1;
    }

    get: title() {
        return this.title;
    },
    set: title(value) {
        this._title =value;
    }

    complete() {
    this._done = true;
    }
    
    static getDefaultTitle() {
    return 'Задача';
    }
}

Task.count = 0;



class SubTask extends Task {
    constructor(title, parent) {
        super(title);    
        this._parent = parent;
    }
}



let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6', task);

console.log(task);
console.log(subtask);