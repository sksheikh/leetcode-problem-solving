const memoizedFn = function memoize(fn) {
  const cache = {};
  return function(...args) {
      if(args in cache){
          return cache[args]
      }else{
          const result = fn(...args)
          cache[args] = result
          return result
      }
  }
}

const sum = (a,b) => {
  return a + b;
}

console.log(memoizedFn(sum(2,5)));
console.log(memoizedFn(sum(2,4)));
