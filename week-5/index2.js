//a # 1

const { keyIn } = require("readline-sync");


    let nums = [3, 6, 8, 2];

function fiveAndGreaterOnly(num) {
  return num >= 5;
}

results = nums.filter(fiveAndGreaterOnly);

console.log(results, "A1")

//A # 2

 function evensOnly(num) {
    return num %2 === 0;
}
evens = nums.filter(evensOnly);
console.log(evens, "A2") 

//b # 1

    const arr = [2, 5, 100];
    const result = arr.map(function(num){
        return  num * 2    
    })
    
    console.log(arr, "B1")
    console.log(result, "B1") 


//B # 2


    const arry = [2, 5, 100];

    const result2 = arry.map(function(num){
        return     num.toString()
    })
    
     //console.log(arry)
    console.log(result2) 

    //b # 3

       const str = ["john", "jacob", "jinGleHeimer", "schmidt"];
     
    const toCapital = str => {
      const words = str;
      return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())};
    
    console.log(toCapital(str), "B3")    67'

    /*//C # 

 const nums = [1, 2, 3]
const sum = nums.reduce((total, num) => (total + num), 0);
console.log(sum, "C1") 

//C # 2

 const change = nums.reduce((total, nums) => total.concat(nums), "");
console.log(change, "C2") 

// Section C # 3 

  totalVotes = (arr) => arr.reduce((total, voter) => voter.voted ? total + 1 :(total), 0);
 



 const voters = [
    {name: "Bob" , age: 30 , voted: true},
    {name: "Jake" , age: 32 , voted: true},
    {name: "Kate" , age: 25 , voted: false},
    {name: "Sam" , age: 20 , voted: false},
    {name: "Phil" , age: 21 , voted: true},
    {name: "Ed" , age: 55 , voted: true},
    {name: "Tami" , age: 54 , voted: true},
    {name: "Mary" , age: 31 , voted: false},
    {name: "Becky" , age: 43 , voted: false},
    {name: "Joey" , age: 41 , voted: true},
    {name: "Jeff" , age: 30 , voted: true},
    {name: "Zack" , age: 19 , voted: false},
];
 console.log(totalVotes(voters), "C3"); */








