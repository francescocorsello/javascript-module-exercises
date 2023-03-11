
function sum(...num) {
  return num.reduce((num1,num2)=>num1+num2,0);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));
