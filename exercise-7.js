// Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). 
// Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.
class Person {
   _firstName = "";
   _lastName = "";
   _age = 0;

   constructor (firstName, lastName, age){
    if (typeof(firstName === "string")){
      this._firstName = firstName;
    } else {
      console.log("Invalid First Name!")
    }
    if (typeof(lastName === "string")){
      this._lastName = lastName;
    } else {
      console.log("Invalid Last Name!")
    }
    this._age = age;
   }

   set age(newVal){
      if (newVal < 1) {
        this.newVal = 1;
      } else if (age > 110) {
        this.newVal = 110;
      } else {
        (this.newVal = newVal)};
    }

    get age(){
      return this._age
     } 

     set firstName(newVal){
      if (typeof(newVal === "string")){
        this._firstName = newVal;
      } else {
        console.log("Invalid First Name!")
      }
     }
     
    get firstName(){
      return this._firstName
     } 
    
     set lastName(newVal){
      if (typeof(newVal === "string")){
        this._lastName = newVal;
      } else {
        console.log("Invalid Last Name!")
      }
     }  
    get lastName(){
      return this._lastName
    }  
    get fullName(){
      return this._firstName + " " + this._lastName
    }
  
};

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);