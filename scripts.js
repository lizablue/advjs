// hoisting
name = 'liz';
var name;
console.log(name);

setName();
function setName() {
    var name = 'liz';
    console.log(name);
}
console.log('average');
let avg = findAvg(2, 2);
console.log('average = ', avg);
function findAvg(a, b) {
    var answer = (a+b)/2;
    return answer;
}

// scoping
let fruits = ['apple', 'strawberry', 'pear'];
let favFruit;

function printFruits() {
    favFruit = fruits[1];
    console.log(fruits[0]);
};

function printFavFruit() {
    console.log(favFruit);
};

printFruits();
printFavFruit();