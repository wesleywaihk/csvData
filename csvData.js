const d3 = require("d3");
const csvData = (csv, callback) => {
    d3.csv(csv).then(function(data){
        callback(data);   
    });
}
export default csvData;
