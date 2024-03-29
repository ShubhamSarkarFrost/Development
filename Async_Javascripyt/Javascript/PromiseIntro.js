// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const makerequest = (() =>{
//
// },
//     () =>{
//
// })

fakeRequestCallback('books.com/page1',
    function (response){
         console.log("IT Worked !!")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response){
            console.log("IT Worked Again!!")
                console.log(response)
                fakeRequestCallback('books.com/page3',
                    function (response){
                           console.log("IT Worked Again & Again !!")
                           console.log(response)
                    }, function (err){
                         console.log(err, "3rd request failed!!")
                    })
            }, function (err) {
                console.log(err, "2nd request failed!!")
            })
    }, function (err){
        console.log(err, "1st request failed!!")
    })