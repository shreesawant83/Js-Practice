//Learn about promises

//promise is an object
// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Promise One called");
//         resolve();
//     }, 2000)
// })

// promiseOne.then(function () {
//     console.log("Promise worked");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Set timeout promise");
//         resolve();
//     }, 2000)
// }).then(function () {
//     console.log("Promise called");
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Work");
//         resolve({ username: "Shreepad83", pass: 123 });
//     }, 2000)
// });

// promiseThree.then(function (userData) {
// console.log(userData);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("Set timeout");
//         let Error = false;
//         if (!Error) {
//             resolve({ username: "Shreepad83", pass: 123 });
//         } else {
//             reject("Error : something went wrong");
//         }
//     })
// })

// promiseFour.then(function (users) {
//     // console.log(users);
//     return users.username;
// }).catch(function (error) {
//     console.log(error);
// }).then(function (username) {
//     console.log(username);
// }).finally(function () {
//     console.log("Promise either resolve or reject");
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Set time out called");
//         // resolve({ username: "Shreepad83", pass: 123 })
//         reject("Error happened")
//     }, 2000)
// })

// async function getPromiseData() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(`${error} error log`);
//     }
// }

// getPromiseData();



//Learn fetch API
fetch("https://api.github.com/users/shreesawant83")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })