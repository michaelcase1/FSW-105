var people = [
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

/*for ( x  = 0; x <101; x++){
    if([x].number =){
        
    }
}*/



