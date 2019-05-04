let staticLanguaches = ['C', 'C++', 'Java'];
let dynamicLanguaches = ['JS', 'PHP', 'Ruby'];

let languaches = [...staticLanguaches, 'C#', ...dynamicLanguaches, 'Python'];
console.log(languaches);

function add(x, y, z){
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);