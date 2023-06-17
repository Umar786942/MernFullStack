const button1=document.getElementById("button1")
const layerContainer=document.querySelector(".layerContainer")
const layerItem=document.querySelector(".layer")
console.log(button1)
button1.addEventListener("click",()=>{
    console.log("Hello iam button")
    // layerContainer.classList.remove("scale0")
     layerContainer.classList.add("scale")
    
})
const close=document.querySelector(".close")
console.log(close)
close.addEventListener("click",()=>{
    console.log("hello i am close")
    layerContainer.classList.remove("scale")
    // layerContainer.classList.add("scale0")
   
    console.log(layerContainer.classList)
})