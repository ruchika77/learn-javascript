function isAmstrong(n) {
    var temp=n;
    var num=n.toString();
    var length=num.length;
    var result=0;
    for(i=0;i<length;i++){
        var remainder = n%10;
        result= result+Math.pow(remainder,length);
        n=n/10;
        n=~~n;
    }
    if(result==temp){
     return true;
    }
    else{
        return false;
    }
}

module.exports = {
    // key & value is a function isEven
    'isAmstrong': isAmstrong,
};