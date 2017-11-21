function isAllPass(arr, passMark){
    var result = true;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<passMark){
            result = false;
            break;
        }
    }
    return result;
}
function getResult(record){
    var output = {};
    var res = isAllPass(record.marks,45);
    output.firstName = record.firstName;
    if(res== true){
        output.result = "Pass"; 
    }
    else{
        output.result = "Fail";
    }
   return output; 
}

module.exports={
    isAllPass,
    getResult,
};