module.exports = function reverse (n) {
  n = Math.abs(n);
  let n_array = String(n).split("")
  let result = []
  for (let i=n_array.length-1;i>=0;i--) {
    result += n_array[i];
  }
  return Number(result);
}
