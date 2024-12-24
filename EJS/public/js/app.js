let buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("click",()=>{
        console.log("button was clicked")
    })
}