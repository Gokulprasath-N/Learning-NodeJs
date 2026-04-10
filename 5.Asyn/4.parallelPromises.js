const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("p1 resolved");
        resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("p2 resolved");
        resolve(2);
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("p3 resolved");
        resolve(3);
    }, 2000);
});

// all the promises should resolve
Promise.all([p1, p2, p3]).then(result => console.log(result)).catch(error => console.log(error));

// race the promises --> first promise to resolve wins
Promise.race([p1, p2, p3]).then(result => console.log(result)).catch(error => console.log(error));