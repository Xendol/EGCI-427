class MyMath {
  constructor() {
    this.add = (a, b) => {
    return a + b;
  }

  this.minus = (a, b) => {
    return a - b;
  }
  this.multiply = (a, b) => {
    return a * b;
  }
  this.divide = (a, b) => {
    return a / b;
  }
}
}


var result = new MyMath();
console.log(result.add(2, 3)); 
console.log(result.minus(2, 3)); 
console.log(result.multiply(2,3)); 
console.log(result.divide(2,0));