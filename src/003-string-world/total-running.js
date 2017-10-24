function totalOfList(arr){
    let result=0;
    for(var i=0;i<arr.length;i++){
        result= result+arr[i];
    }
    return result;
}

module.exports={
    totalOfList,
};