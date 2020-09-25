const readlineSync = require("readline-sync")


var thirdNum = readlineSync.question("please enter the operation you wish to perform - add, subtract, multiply, divide ")

function addTwoNums(firstNum,secondNum){
    var firstNum = readlineSync.question("please enter your first number")
var secondNum = readlineSync.question("please enter your second number")
    var addResults = Number(firstNum) + Number(secondNum);

console.log ("adding number 1" + firstNum + "with number 2" + secondNum + "results" + addResults);

}

function subtractTwoNums (firstNum,secondNum){
    var firstNum = readlineSync.question("please enter your first number")
var secondNum = readlineSync.question("please enter your second number")
        var subResults = Number(firstNum) - Number(secondNum);
    
    console.log ("subtracting number 1" + firstNum + "by number 2" + secondNum + "results" + subResults);
    

}

function multiplyTwoNums (firstNum,secondNum){
    var firstNum = readlineSync.question("please enter your first number")
var secondNum = readlineSync.question("please enter your second number")
        var mulResults = Number(firstNum) * Number(secondNum);
    
    console.log ("multiplying number 1" + firstNum + "by number 2" + secondNum + "results" + mulResults);
    
}

function divideTwoNums (firstNum,secondNum){
    var firstNum = readlineSync.question("please enter your first number")
    var secondNum = readlineSync.question("please enter your second number")
            var divResults = Number(firstNum) / Number(secondNum);
        
        console.log ("dividing number 1" + firstNum + "by number 2" + secondNum + "results" + divResults);
        
}

if (thirdNum == "add")

{
    addTwoNums();
}
else if (thirdNum == "subtract")
{
    console.log(subtractTwoNums());
}
else if (thirdNum == "multiply")
{
    console.log(multiplyTwoNums());
}
else if (thirdNum == "divide") 
{
    console.log(divideTwoNums());
}


