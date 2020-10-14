
//question #1
{
    const name = "John"
    const age = 101
    
    function runForLoop(pets) {
      let petObjects = []
      for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
       let name;
        if (pets[i] === "cat") {
          name = "fluffy"
        } else {
          name = "spot"
        }
        console.log("pet name: ", name)
        pet.name =  name
        petObjects.push(pet)
      }
      console.log("man name: ", name)
      return petObjects
    }
    
    runForLoop(["cat", "dog"])
    }

    //question# 2
        const carrots = ["bright orange", "ripe", "rotten"]
    
    function mapVegetables(arr) {
        return arr.map(function(carrot) {
            return {type: "carrot", name: carrot}
        })
    }
    //question# 3
    const people = [
        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "Luigi",
            friendly: true
        },
        {
            name: "Mario",
            friendly: true
        },
        {
            name: "Bowser",
            friendly: false
        }
    ]
    function filterForFriendly(arr) {
        return arr.filter(function(person){
            return person.friendly
        })
    }

    //question #4
    
     function doMathSum(a, b) {
        return a + b
    }
    let produceProduct = function(a, b) {
        return a * b
    }

    //question #5