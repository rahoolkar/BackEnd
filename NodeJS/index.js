let exportFromFile = require("./exportInFile");  //when we are exporting things from a js file we user "./fileName";

console.log(exportFromFile); //if the export file is sending nothing and we require something, we get an empty object as an output

let sumValue = exportFromFile.add(2,2);
console.log(sumValue);