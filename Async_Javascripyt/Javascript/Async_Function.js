// async function hello() {
//
// }

// const sing = async () =>{
//   return "La La La"
// }
//
// sing().then(() => console.log("Promise Resolved !!")).catch((err) => console.log("Promise Rejected !!", err))




// const delayedColorChange = (color, delay) =>{
//   return new Promise((res,rej) =>{
//     setTimeout(() =>{
//       document.body.style.backgroundColor = color;
//       res();
//     }, delay)
//   })
// }

// delayedColorChange('red', 1000).
// then(() => delayedColorChange('yellow', 1000)).
// then(() => delayedColorChange('green', 1000)).
// then(() => delayedColorChange('blue', 1000)).
// then(() => delayedColorChange('violet', 1000)).
// then(() => delayedColorChange('indigo', 1000)).
// then(() => delayedColorChange('orange', 1000)).
// then(() => delayedColorChange('red', 1000))



// await Function
// async function rainbow(){
//   await delayedColorChange('red', 1000)
//   await delayedColorChange('yellow', 1000)
//   await delayedColorChange('blue', 1000)
//   await delayedColorChange('indigo', 1000)
//   await delayedColorChange('orange', 1000)
//   await delayedColorChange('green', 1000)
//   await delayedColorChange('violet', 1000)
//   return "All Done:"
// }

// rainbow().then(() => console.log("promise resolved:"))

// async function printRainbow() {
//   await rainbow();
//   console.log("END OF RAINBOW:")
// }
//
// printRainbow().then(() => console.log("Promise Resolved "))

// write a Fake Request Function with async and await
const fakeRequest = (url) =>{
  return new Promise((res,rej) =>{
    const delay = Math.floor(Math.random() * (4500)) + 500
    setTimeout(() => {
       delay < 4000 ? rej("Connection Timeout") : res(`Connection Resolved , here is your Fake Url ${url}`)
    },delay)
  })
}

async function makeTwoRequest(){
  try {
    let data = await  fakeRequest('/page/1')
    console.log(data)
  }catch(err){
    console.log(err)
  }

}

makeTwoRequest()
