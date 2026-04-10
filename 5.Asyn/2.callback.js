// callback function
// first 1 will print
console.log("1");
// 2 will print after 2 seconds, but this it didt give undefined

getC(2, function(number){
    console.log(number);
});
// 
console.log("3");

function getC(number, callback) {
    setTimeout(() => {
        callback(number);
    }, 2000);
}

