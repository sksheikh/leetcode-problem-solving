class ArrayWrapper{
  constructor(nums){
    this.nums = nums;
    
  }

  valueOf(){
    return this.sum = nums.reduce((prev,curr) => {
      return prev + curr;
    });
  }

  toString(){
    return `[${this.nums.join(',')}]`
  }

    
};

// const nums = [[1,2],[3,4]];
// const operation = "Add";
const obj1 = new ArrayWrapper([23,98,42,70]);
// const obj2 = new ArrayWrapper([3,4]);
// const sum = obj1 + obj2;
const sum = String(obj1);
console.log(sum);
