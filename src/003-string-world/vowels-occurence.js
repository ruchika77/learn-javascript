function hasVowel(str){
    if(str.search("a")>=0 || (str.search("e")>=0) || (str.search("i")>=0) || (str.search("o")>=0) || (str.search("u")>=0)){
        return true;
    }
    else{
        return false;
    }
}
function filterStringsContainVowels(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(hasVowel(arr[i])){
            result.push(arr[i]);
            // console.log("i=",i,", array =",arr[i],"result =", result);
        }
    }
    return result;
}
module.exports = {
    // key & value is a function isEven
    hasVowel,
    filterStringsContainVowels,
};