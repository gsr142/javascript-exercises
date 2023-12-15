const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	let x = 0
  for (let i = 0; i < arr.length; i++){
    x += arr[i]
  }
  return x
};

const multiply = function(arr) {
  let prod = 1
  for (let i = 0; i < arr.length; i++){
    prod *= arr[i]
  }
  return prod
  
};

const power = function(a, b) {
  return a**b
	
};

const factorial = function(int) {
	if (int<2){
    return 1
  }else{
    let x = 1
    for (let i = int; i>1; i--){
      x *= i
    }
    return x
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
