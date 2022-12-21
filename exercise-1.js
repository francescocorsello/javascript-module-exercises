const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".
// we are making a Shallow copy so both variables will reference the same object in the memory
// that's why, by modifying the object `person2`, also the object `person1` would be modified.

console.log(person1);
console.log(person2);
