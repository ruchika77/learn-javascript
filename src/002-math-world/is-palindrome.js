function isPalindrome(n) {
    var result = false;
    var rev = 0;
    var temp = n;
    while (n > 0) {
        let remainder = n % 10;
        rev = rev * 10 + remainder;
        n = n / 10;
        n = ~~n;
    }
    result = (temp === rev);

    return result;
}

module.exports = {
    isPalindrome,
};