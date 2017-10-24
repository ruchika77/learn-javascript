function isOdd(arr){
    let result = [];
    for(var i=0;i<arr.length;i=i+2){
        result.push(arr[i]);
    }
    return result;
}
module.exports={
    isOdd,
};