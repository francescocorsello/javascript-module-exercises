
// Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.
const isLogged = true;

function userLogged(logStatus){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if (logStatus == true) {
                resolve(rand); 
            } else {
                reject(new Error("LogIn Error!"));
            }
        }, 500)
    })
}

function secondPromise(rand) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand > 0.5) {
                resolve(`{name: "John", age: 24}`)
            } else {
                reject(new Error("Error!"));
            }
        }, 500);   
    })  
}
    
userLogged(isLogged)
    .then(secondPromise)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log("Complete"));