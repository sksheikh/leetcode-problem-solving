var sortBy = function(arr, fn) {
    return sortedArr = arr.sort((a,b) => {
      return fn(a) - fn(b);
    });
};

// const arr = [5, 4, 1, 2, 3];
const arr = [{"x": 1}, {"x": 0}, {"x": -1}];
// const fn = (x) => x;
const fn = (d) => d.x;
const result = sortBy(arr, fn);
console.log(result);
