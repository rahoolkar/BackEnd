//requiring the data from the directory 
let data = require("./fruits") //in the case of the files and folder we use "./folder"

//node will not goto the all the files of the folder and collect data from them, it will rather look for the index.js file in the folder and will transfer the data from it

console.log(data);

for(let item of data){
    console.log(item);
}

console.log(data[1].name)
console.log(data[1].price)