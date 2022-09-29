// VERY IMPORTANT TO LEARN THE CODE


// ------------------------------XMLHTTPReqest--------------------------------------
// const swapi_endpoint = "https://swapi.dev/api/people/1/"
//
// const request = new XMLHttpRequest()
//
// request.onload = function (){
//     console.log("Request Resolved!!")
//     const data = JSON.parse(this.responseText)
//     console.log(data.name, data.height)
// }
// request.onerror = function (){
//     console.log("Error Occured!!")
//     console.log(this)
// }
// request.open("GET",swapi_endpoint)
// request.send()

//Fetch - Method
// const loadStarWarsPeople = async () =>{
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/")
//         const data = await res.json()
//         console.log(data.name)
//         const restwo = await fetch("https://swapi.dev/api/people/2/")
//         const data2 = await  restwo.json()
//         console.log(data2.name)
//     }catch (e) {
//         console.log(e)
//     }
// }
//
// loadStarWarsPeople()

//Refactor Fetch Method
// const loadStarWarsPerson = async(id) =>{
//     try{
//         const res = await fetch(`https://swapi.dev/api/people/${id}/`)
//         const data = await  res.json()
//         console.log(data.name)
//     }catch (e){
//      console.log(e)
//     }
//
// }
//
// loadStarWarsPerson(1)

