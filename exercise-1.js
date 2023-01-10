// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum (...rest) {
    let total = rest.reduce((a,b) => a + b);
    return  total;
}

console.log(sum(1, 2, 3, 4, 5,));