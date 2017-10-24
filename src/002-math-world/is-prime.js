function getFactors(n) {
    var factorValues = [];
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            factorValues.push(i);
        }
    }
    return factorValues ;
}
function isPrime(n) {
    let result = false;
    let factorList = getFactors(n);
    const count = factorList.length;
    result = (count <= 2);
    return result;
}
module.exports = {
    // key & value is a function isEven
    isPrime,
    getFactors,
};