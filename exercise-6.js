class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    if (figure instanceof Square) {
      figure =  square.side*square.side; 
    } else if (figure instanceof Rectangle) {
      figure = rectangle.width*rectangle.height;
    } else {
      figure =  circle.radius*3,14;
    }
    return figure;
  } 
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));



