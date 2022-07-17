// alert("Hi , Good Evening!!")

// with double quotes
let username = "danny"

// with single quotes
let favAnimal = 'Dumbo Octopus'

console.log(username)
console.log(favAnimal)

// Strings can be accessed through index
console.log(favAnimal[3])

// to get the length of the string use .length
console.log(favAnimal.length)

// use + sign to concat
console.log(favAnimal+" "+username)

//************************  Strings Methods *************************************************************//
// to convert to uppercase
console.log(favAnimal.toUpperCase())
// to convert to lowercase
console.log(favAnimal.toLowerCase())
// to remove leading and trailing spaces
favAnimal = " "+favAnimal+" "
console.log(favAnimal.trim())

//****************** String Method with Arguements ******************************************************//
// to get the index of a character ------------> indexOf
let TvShow = "catdog"

console.log(TvShow.indexOf('cat'))
console.log(TvShow.indexOf('dog'))
console.log(TvShow.indexOf('Z')) // whenever a value is not present in a string indexOf method returns -1

// to get a slice of a String use the Slice Method
console.log(TvShow.slice(2,4))
// to replace a substring
let replaceString = TvShow.replace('do','dont')
console.log(replaceString)

// to repeat a string use the repeat function
console.log(replaceString.repeat(2))

// String Tempelate Literal
let Product = "Ketchup"
const price = 66.63
const number = 6

console.log(`Hi You Have Bought ${number}  ${Product} for ${number*price}`)



