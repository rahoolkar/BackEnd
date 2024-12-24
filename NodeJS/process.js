//process is an object in nodejs that contains all the information about the current running process of nodejs 

console.log(process.version) //displays the current version of node running in the current node process


//process.argv 
//this returns an array containing all the arguements passed during start of the process of node

let arguementarray = process.argv;

for(let i=2;i<arguementarray.length;i++){
    console.log("hello and wolcome",arguementarray[i]); 
}

