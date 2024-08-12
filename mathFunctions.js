function roundNumber(num) {
   return Math.round(num);
}

function ceilNumber(num) {
    return Math.ceil(num);
}

function floorNumber(num) {
    return Math.floor(num);
    
}

function findMax(...nums) {
    return Math.max(...nums);    
}

function findMin(...nums) {
    return Math.min(...nums);
    
}

function calculatePower(base, exponent) {
    return Math.pow(base,exponent);
    
}

function generateRandom() {
    return Math.random();
}

function convertRadiansToDegrees(radians) {
    const grados = radians*180/Math.PI;
    return grados;    
}

function findSquareRoot(num) {
    return Math.sqrt(num);
    
}

function calculateLogarithm(num) {
    return Math.log(num);
    
}

module.exports = {
    roundNumber,
    ceilNumber,
    floorNumber,
    findMax,
    findMin,
    calculatePower,
    generateRandom,
    convertRadiansToDegrees,
    findSquareRoot,
    calculateLogarithm
};
