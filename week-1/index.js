var shopper = {
  myName: "michael",
  myAge: 24,
  isAlive: true,
  fullName: function(){
      return this.myName + " " + this.myAge;
  }
};
console.log(shopper);
