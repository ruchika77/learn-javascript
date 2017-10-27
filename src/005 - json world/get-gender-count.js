// result = {female:243, male:257}
var allStudents = require('E:/Ruchi/jupyter-notebooks/data/student-data.json');
// console.log("Data",allStudents); 
function getGenderCounts(jsonArray){
    var genderJson = {Female:0, Male:0};
    for(var i=0;i<jsonArray.length;i++){
        if(jsonArray[i].gender==="Male"){
            genderJson.Male++;
            
        }
        else{
            genderJson.Female++;
        }
    }   
    return genderJson;
}
module.exports = {
    getGenderCounts,
};