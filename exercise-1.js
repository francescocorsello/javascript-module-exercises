const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}


let i=0;
let keys = Object.keys(person)
let values = Object.values(person)

for (entries in person)
{
console.log(keys[i] + ": " + values[i]);
i++;
}
