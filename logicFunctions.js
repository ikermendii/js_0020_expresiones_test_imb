function isEven(num) {
    if (num){
        return true;
    }
    return false;
}

function isGreater(a, b) {
    if (a > b){
        return true;
    }
    return false;
}

function isLessOrEqual(a, b) {
    if(a <= b){
        return true;
    }
    return false;
}

function isInRange(value, min, max) {
    if(value > min & value < max){
        return true;
    }
    return false;
}

function areEqual(a, b) {
    if(a == b){
        return true;
    }
    return false;
}

function areNotEqual(a, b) {
    if( a != b){
        return true;
    }
    return false;
}

function eitherOr(a, b) {
    if (a || b ){
        return true;
    }
   return false;
        
}

function neitherNor(a, b) {
    if (!a & !b){
        return true;
    }
    return false;
}

function bothAnd(a, b) {
    if (a & b){
        return true;
    }
    return false;    
}

function exclusiveOr(a, b) {
  if(a || b){
    return true;
  }
  return false;
   
        
}

module.exports = {
    isEven,
    isGreater,
    isLessOrEqual,
    isInRange,
    areEqual,
    areNotEqual,
    eitherOr,
    neitherNor,
    bothAnd,
    exclusiveOr
};
