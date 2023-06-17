const grandParent=document.querySelector(".grandParent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
grandParent.addEventListener("click",function(e){
    console.log("You Clicked on GrandParent")
    console.log("Target is - ",e.target)
    console.log("Current Target is - ",e.currentTarget)
})
// parent.addEventListener("click",function(e){
//     console.log("You Clicked on Parent")
//     console.log("Target is - ",e.target)
//        console.log("Current Target is - ",e.currentTarget)
// })
// child.addEventListener("mouseover",function(e){
//     console.log("You Clicked on Child")
//     console.log("Target is - ",e.target)
//        console.log("Current Target is - ",e.currentTarget)
// })