let myName = ["ahmad","omer","enas","ghadeer","fareh"]


var smallLetters = [
       "a","b", "c","d","e", "f","g","h", "i",  "j",  "k",  "l",  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
      "z",
     ];
let RandomIndex= Math.floor (Math.random() * smallLetters.length)
let genretedIetter = smallLetters[RandomIndex]

console.log(genretedIetter)



function chackmyName(){
for (let i = 0; i < myName.length; i++) 
{


    if(myName[i][0] ==  genretedIetter ) {

     console.log(`this name ${myName[i]}  starting with the latter ${smallLetters}`)


} 

}


chackmyName("o")
chackmyName("g")
}