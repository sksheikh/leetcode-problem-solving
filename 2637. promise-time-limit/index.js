var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      fn(...args)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => { // Corrected from .error to .catch
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const inputs = [5];
const t = 200;

timeLimit(fn, t)(...inputs)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
