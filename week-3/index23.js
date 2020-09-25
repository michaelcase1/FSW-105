function stringCombo (str){
    if (str.length <=20){
        return str=str
        } else if (str.length > 20){
            return str.slice (0,str.length / 2)
        }
}
console.log (stringCombo("hello"))
console.log (stringCombo("hello world how are you today"))