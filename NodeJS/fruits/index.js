let apple = require("./apple");
let mango = require("./mango");
let orange = require("./orange");

//collecting all the data from the files in the folder 

let dataarray = [apple,mango,orange];

//exporting the collected data from the sources (files)
module.exports = dataarray; 