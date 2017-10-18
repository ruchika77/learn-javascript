function isEven(n) {
    if(n%2==0){
        return true;
    }
    else{
     return false;
    }
}

module.exports = {
    // key & value is a function isEven
    'isEven': isEven,
};