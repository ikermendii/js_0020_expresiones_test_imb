// mathExpressions.js

function add(a, b) {
  let s = a + b;
  return s;
}

function subtract(a, b) {
  let d = a - b;
  return d;
}

function multiply(a, b) {
  let p = a * b;
  return p;
}

function divide(a, b) {
  let div = a/b;
  return div;
}

function modulus(a, b) {
  let rest = a%b;
  return rest;
}

function exponent(a, b) {
  let pow = Math.pow(a,b);
  return pow;
}

function squareRoot(a) {
 let raiz = Math.sqrt(a);
 return raiz;
}

function cube(a) {
  let cubo = Math.pow(a,3);
  return cubo;  
}

function absolute(a) {
  if (a < 0){
    n = a*(-1);
  }
  return a;
}

function sine(degrees) {
  Math.sin(degrees);  
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponent,
  squareRoot,
  cube,
  absolute,
  sine
};
