const add = (a,b) =>{
    return a+b;
}

const mul = (a,b) =>{
    return a*b;
}


const sub = (a,b) =>{
    return a-b;
}

const div = (a,b) =>{
    return a/b;
}

let object = {
    add : add,
    sub : sub,
    mul : mul,
    div : div
}
//module.exports = 123; //this is an special object that contains all the things that one file wants to send to another file.


module.exports = object;


module.exports.add = (a,b) =>{
    return a+b;
}

module.exports.mul = (a,b) =>{
    return a*b;
}


module.exports.sub = (a,b) =>{
    return a-b;
}

module.exports.div = (a,b) =>{
    return a/b;
}