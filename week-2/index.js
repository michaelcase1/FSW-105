//prelims
if (5 > 7) {
  console.log("is greater than");
} else {
  console.log("is lesser than");
}

var animal = "cat";
if (animal.length === 3) {
  console.log("is the length");
}
console.log("****")
//bronze
var person = {
  name: "Bobby",
  age: 12,
};
if (person.age >= 18) {
  console.log(`${person.name}can go to the movies`);
} else {
  console.log(`${person.name} cant go to the movies`);
}
console.log(person);

if (person.name.charAt(0) === "b" || person.name.charAt(0) === "B") {
  console.log(`${person.name} can go to the movies`);
}
-
if (person.age >= 18 && person.name.charAt(0) === "b"){
  console.log(`${person.name} can go to the movies`)
} else {
  console.log(`${person.name} cant go to the movies`)
}
console.log("**************")
//silver
if (1 === "1") {
  console.log("strict")
} else if (1 == "1") {
  console.log("loose")
} else {
  console.log("its broken")
}
 if (1 <= 2 && 2 === 4) {
   console.log("yes")
 } else {
   console.log("no")
 }
