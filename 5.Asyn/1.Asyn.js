// Asynchronous JavaScript
// first 1 will print
console.log("1");
// c will be undefined because it is not returned immediately
const c = getC(2);
console.log(c);
// 3 will print after 2 seconds
console.log("3");

function getC(number) {
    setTimeout(() => {
        console.log(number);
        return number;
    }, 2000);
}

