const fibonacci = function (int) {
  let y = parseInt(int);
  if (y == 0 || y == 1) {
    return y;
  } else if (y < 0) {
    return "OOPS";
  } else {
    let fibArr = [1, 1];
    while (fibArr.length < y) {
      let x = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
      fibArr.push(x);
    }
    return fibArr[fibArr.length-1]
  }
};

// Do not edit below this line
module.exports = fibonacci;
