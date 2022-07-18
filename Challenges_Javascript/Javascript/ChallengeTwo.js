
// function CatchPhrase(phrase){
//     if(phrase.toLowerCase() === 'stop'){
//         prompt("RED")
//     }else if(phrase.toLowerCase() === 'slow'){
//         prompt("YELLOW")
//     }else if(phrase.toLowerCase() === 'go'){
//         prompt("GREEN")
//     }else{
//         prompt("PURPLE")
//     }
// }

function CatchPhrase(phrase){
    switch(phrase.toLowerCase()){
        case "stop":
            prompt("RED");
            break;
        case "slow":
            prompt("YELLOW");
            break;
        case "go":
            prompt("GREEN");
            break;
        default:
            prompt("PURPLE")
    }
}






let catchPhrase = prompt("Enter the Catch Phrase User!!");
CatchPhrase(catchPhrase);
