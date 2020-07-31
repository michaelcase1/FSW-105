
function sum(num1, num2){
    return num1 + num2
}

var result = sum(2,19)
console.log(result)

function get_max(num1, num2, num3){
   
    return max
}

var max = Math.max(11, 12, 13)
console.log(max)



 function isEven(number)
{
  //console.log(number)
  if (number%2 == 0) {
    console.log(number +" is even")
  } else { 
    console.log(number + " is odd")
  
  }

}
 isEven (7)

 function stringLen(takesString) {
    console.log(takesString.length);
    var len = takesString.length;
    if (len <= 20){
      console.log (takesString + takesString)
    } else {
      //console.log (Math.floor(takesString.length/2))
      var round = Math.floor(takesString.length/2);
      var res = takesString.slice(0,round);
      console.log (res);
    }
  }
  stringLen('0123456789012345678901234567890123456789012');
 
