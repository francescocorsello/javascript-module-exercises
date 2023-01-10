const person = {
  id: 1,
  info:{
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const id = person.id;
const personInfo = {...person.info};

console.log(id, personInfo);