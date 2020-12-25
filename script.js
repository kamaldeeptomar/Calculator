const btn=document.querySelectorAll(".btn");
const btnequal=document.querySelector(".btnequal");
const btnclear=document.querySelector(".btnclear");
const screen=document.querySelector(".screen");

for(let i=0;i<btn.length;i++)
btn[i].addEventListener("click",function() {
    let number = btn[i].getAttribute("data-num");
    screen.value +=number;

})
btnequal.addEventListener("click",function(){
    if(screen.value===""){
        alert("Invalid")
    }
    else{
    let value=eval(screen.value)
    screen.value=value}
})

btnclear.addEventListener("click",function(){
    screen.value="";
})