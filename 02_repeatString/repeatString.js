const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let x = "";
    for (let i = 0; i < num; i++) {
      x += string;
    }
    return x;
  }
};

// Do not edit below this line
module.exports = repeatString;
