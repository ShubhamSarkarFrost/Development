// Generating a Request through axios

// const starWarsUrl = "https://swapi.dev/api/people/"
// const newStarWarsUrl = "https://swapi.dev/api/people/1/"
//
// const loadStarWarsPeople = (url,id) =>{
//      axios.get(`${starWarsUrl}/${id}/`).then(function (response){
//          console.log(response.data.name)
//      }).catch(function (err) {
//          console.log(err)
//      })
// }
//
// loadStarWarsPeople(starWarsUrl, "1")

//Very OLD Way - XMLHTTPRequest
// const request = new XMLHttpRequest()
//
// request.onload = function()  {
//     console.log("Request Resolved!!")
//     const data = JSON.parse(this.responseText)
//     console.log(data.name)
// }
//
// request.onerror= function (er){
//     console.log("ERROR OCCURED!!")
//     console.log(err)
// }
//
//
// request.open("GET", newStarWarsUrl)
// request.send()
//
// // Relatively new - Axios
// const newStarWarsLoad = async (url) =>{
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data.name)
//     }catch (er){
//         console.log(er)
//     }
//
// }
//
// newStarWarsLoad(newStarWarsUrl)

//Setting Header with axios
// // const dad_Joke_url = "https://icanhazdadjoke.com/"
//
// const jokes =document.querySelector('#jokes')
// const getDadJoke = async () => {
//     try {
//         const conf = {headers:{Accept: 'application/json'}}
//         const res = await axios.get("https://icanhazdadjoke.com/",conf)
//         console.log("Request Resolved!!")
//         console.log(res.data.joke)
//         const newList = document.createElement('LI')
//         newList.classList.add('list-group-item')
//         newList.append(res.data.joke)
//         jokes.append(newList)
//
//     }catch (error){
//         console.log(error)
//     }
//
// }
//
// document.querySelector('#jokehere').addEventListener('click',getDadJoke)

//Reformat GetDadJokes

const jokes =document.querySelector('#jokes')

const addNewJoke = async () =>{
    const jokeText = await getDadJokes()
    const newList = document.createElement('LI')
    newList.classList.add('list-group-item')
    newList.append(jokeText)
    jokes.append(newList)

}


const getDadJokes = async () =>{
    try{
        console.log("YUP , Request Resolved !!")
        const conf = {headers:{Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/",conf)
        return res.data.joke
    }catch(err) {
        console.log("You Have an Error :")
        console.log(err)
    }

}

document.querySelector('#jokehere').addEventListener('click',addNewJoke)
