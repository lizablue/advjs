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