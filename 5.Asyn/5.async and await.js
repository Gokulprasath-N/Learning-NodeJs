// async and await
// aysnc means asynchronous
// await means wait for the promise to resolve
// async function always returns a promise

function displayUser() {
    console.log("1. Fetching user...");
    
    // We have to use .then() to wait for the data
    fetchDataFromDatabase()
        .then(user => {
            console.log("2. Got the user: " + user.name);
        });
}

// We put 'async' in front of the function
async function displayUser() {
    console.log("1. Fetching user...");

    // 'await' tells JS to pause THIS function until the Promise finishes
    // Notice how we don't need .then() anymore! It looks totally perfectly normal.
    const user = await fetchDataFromDatabase(); 
    
    console.log("2. Got the user: " + user.name);
}
