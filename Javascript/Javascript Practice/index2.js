// const rootNode=document.getRootNode()
// console.log(rootNode)
// console.log(rootNode.childNodes)
// const htmlElementNode=rootNode.childNodes[0]
// console.log(htmlElementNode)
// const headNode=htmlElementNode.childNodes[0]
// const textNode=htmlElementNode.childNodes[1]
// const bodyNode=htmlElementNode.childNodes[2]
// console.log(headNode)
// console.log(textNode)
// console.log(bodyNode)
// console.log(headNode.nextSibling)
// console.log(headNode.nextSibling.nextSibling)
// console.log(headNode.nextElementSibling)
// console.log(bodyNode.previousElementSibling)
// const headNode=document.querySelector("h1")
// const divContainer=headNode.parentNode
// divContainer.style.backgroundColor="blue"
// divContainer.parentNode.style.backgroundColor="cyan"
//directly selecting an element
// const body=document.body
// console.log(body)
// const head=document.head
// console.log(head)
// const heading=document.title
// console.log(heading)
// const head=document.querySelector("head")
// const head=document.querySelector("head title")
// console.log(head)
// const headChildren=head.querySelector("title")
// console.log(headChildren)
const html=document.querySelector("html")
console.log(html)
console.log(html.childNodes)
console.log(html.children)
const htmlChildrens=html.children
for(let child of htmlChildrens)
{
    console.log(child)
}