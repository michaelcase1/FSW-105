let people = [
  {
    name:"mike",
    age:18,
    gender: "male"
  },{
    name:"jesse",
    age:13,
    gender:"female"
  },{
    name:"tori-lynn",
    age:21,
    gender:"female"
  }
]

for (var i = 0; i < people.length; i++){
  
}
























/*var people = [
    {
        name: "Mike",
        age: 12,
        gender:"male"
    },{
        name:"Madeline",
        age:80,
        gender:"female"
    },{
        name:"cheryl",
        age:22,
        gender:"female"
    },{
        name:"sam",
        age:30,
        gender:"male"
    },{
        name:"Suzi",
        age:4,
        gender:"female"
    }
]

for (var i = 0; i < people.length; i++){
    if(people[i].age >= 18){
        let userGender = people[i].gender === "male" ? "HE'S" : "SHE'S"
        console.log (people[i].name + " is old enough, "+ userGender +" good to see Mad Max Fury Road  ")
    }else{
        let userGender = people[i].gender === "male" ? "HIM" : "HER"
        console.log (people[i].name + " is not old enough to see mad max fury road, dont let "+ userGender +" in ")
    }

}

for (var i = 0; i < 101; i++){
   
    if (i%2 !== 0){
      console.log(i + " is Odd");
    }else{
      console.log (i + " is Even");
    }
    
  }


  var numArray = [2,3,2];

  function addUp(num){
    console.log(num)
    var sum = 0;
    var len = num.length;
    for(var i =0; i < len; i++){
        sum = sum + num[i]
    }
   
    blink(sum);
  } 
  
  function blink(num){
    
    for (var i = 0; i < num; i++){
     
      if (i%2 !== 0){
        console.log("ON");
      }else{
        console.log ("OFF");
        
      }
    
    }
  }
  
  addUp(numArray);*/