/*function greet(greet, name) {
    console.log(`${greet}, ${name}`);
}

function greet(greeting, name) {
    if (greeting !== undefined && name !== undefined) {
        console.log(`${greeting} ${name}`);
    } else if (greeting === undefined && name !== undefined) {
        console.log(`Hello ${name}`);
    } else if (greeting !== undefined && name == undefined) {
        console.log(`${greeting} friend`);
    } else {
        console.log ('Hello friend');
    }

}*/

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet ('Hello', 'Bill');
greet ('Hi');
greet (undefined, 'Bill');
greet ();



function sum() {
    console.log(arguments instanceof Array);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });

    console.log(sum);
}
 function sum(...values) {
     console.log(values instanceof Array);

     let sum = 0;

     values.forEach(function (value) {
         sum += value;
     });

     console.log(sum);
 }

 function sum(...values) {
     console.log(values.reduce(function(preValue, currentValue){
         return preValue + currentValue;
     }));
 }


sum (5, 7, 2, 10);