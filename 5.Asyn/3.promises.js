const p = new Promise((resolve, reject) => {
    setTimeout(() => {
     // if resolve is called, the promise is resolved
        // resolve(1);
     // if reject is called, the promise is rejected
        reject(new Error("Something went wrong"));
    }, 2000);
});
// then is used to handle the resolve case
p.then(result => console.log(result)).
// catch is used to handle the reject case
    catch(error => console.log(error));  


    // creating a settled promise
    
 const e = Promise.reject(new Error("Something went wrong"));
e.then(result => console.log(result)).
    catch(error => console.log(error));  