// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

function sum(...rest) {
  let total = rest.reduce((a,b) => a + b);
    return  total;
}


const numbers = [1, 2, 3,];
console.log(sum(numbers[0], numbers[1], numbers[2]));