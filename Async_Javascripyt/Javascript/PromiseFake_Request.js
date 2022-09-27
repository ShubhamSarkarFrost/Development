// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure("Connection Timeout :(");
//         } else {
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay);
// };
// // THE PROMISE VERSION
//
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject("Connection Timeout :(");
//             } else {
//                 resolve(`Here is your fake data from ${url}`);
//             }
//         }, delay);
//     });
// };

// run if the request is resolved with .then() and pass-in a callback function
// if the request is rejected .catch() would handle it.
// can pass in the response messages as defined in the function above
// not the cleanest option -> can chain with .then .then .then for multiple requests

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((response) => {
//         //in case the promise switches from pending to resolved status, it would print out the result
//         console.log(response, "\nIt worked (1)");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then((response) => {
//                 //in case the promise switches from pending to resolved status, it would print out the result
//                 console.log(response, "\nIt worked (2)");
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                     .then((response) => {
//                         //in case the promise switches from pending to resolved status, it would print out the result
//                         console.log(response, "\nIt worked (3)");
//                     })
//                     .catch((error) => {
//                         console.log(error, "\nOh no, error has occured");
//                     });
//             })
//             .catch((error) => {
//                 console.log(error, "\nOh no, error has occured");
//             });
//     })
//     .catch((error) => {
//         console.log(error, "\nOh no, error has occured");
//     });




// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// returned promise calls .THEN() and so on.



// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then((data) => {
//         console.log("It Worked!!! (1)");
//         console.log(data);
//         return fakeRequestPromise("yelp.com/api/coffee/page2");
//     })
//     .then((data) => {
//         console.log("It Worked!!! (2)");
//         console.log(data);
//
//         return fakeRequestPromise("yelp.com/api/coffee/page3");
//     })
//     .then((data) => {
//         console.log("It Worked!!! (3)");
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("OH no, the request failed!!!");
//         console.log(error);
//     });

// const FakeRequest = (url) =>{
//    return  new Promise((res, rej) => {
//        const rand = Math.random()
//         setTimeout(() =>{
//             if(rand < 0.7){
//                 res(`Your Fake Data is ${url}`);
//             }
//             rej("Oh No You Got an Error")
//         },1000)
//     })
// }
//
// FakeRequest("/dogs/1").then(() =>{
//     console.log("Done with the request")
// }).catch((err) =>{
//     console.log("Oh No Error", err)
// })

const delayedColorChange = (color, delay) =>{
    return new Promise((res,rej) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            res();
        }, delay)
    })
}

delayedColorChange('red', 1000).
then(() => delayedColorChange('yellow', 1000)).then(() => delayedColorChange('green', 1000))