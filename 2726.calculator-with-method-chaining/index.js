class Calculator {
    
  
  constructor(value) {
      this.result = value;
  }
 
  add(value){
    this.result += value;
    return this;
  }
  
 
  subtract(value){
    this.result -= value;
    return this;
  }
  
 
  multiply(value) {
    this.result *= value;
    return this;
  }
  
 
  divide(value) {
    this.result /= value;
    return this;
  }
 
  power(value) {
    this.result **= value;
    return this;
  }
  
  getResult() {
      return this.result;
  }
}

const calculator = new Calculator(10).add(12).subtract(2);
// console.log(calculator);
