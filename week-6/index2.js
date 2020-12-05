let readlineSync = require('readline-sync');

let escaped = false;
let alive = true;
let key = false;
let one = '1. Put your hand in the hole'
let two = '2. Find the key'
let three = '3. Open the Door'
let Question = "What do you want to do?"

while (!escaped && alive)
{
    let generalQuestions = readlineSync.question(Question.concat(" ",one," ", two, " ", three))

if (generalQuestions == "1") {
    escaped = false
    key = false
    console.log ("you died")
    }
else if (generalQuestions == "2") {
      key = true
      console.log("you found the key")
    
   } 

  else if (generalQuestions == "3") {

    if (key === true){
        console.log("You opened the door")
        escaped = true
    }
    else if (key === false){

        console.log("You need a key to open the door")
    }

} 
}