// //Asynchronous javascript
// console.log("Script start")
// // setTimeout also provides setTimeout id

// const setTimeoutId=setTimeout(()=>
// {
//     console.log("inside setTimeout method which will be called after 2sec")
// },0)//now even if we give 0ms web api will give callback function in 0 ms but it will not execute unti and unless gec completes
// for(let i=0;i<2000;i++){
//     console.log("inside for loop")
// }
// console.log("SetTimeout id is",setTimeoutId)
// clearTimeout(setTimeoutId)//now call back function will not be executed
// console.log("script end")
// setInterval
// console.log("script start")
// setInterval(()=>{
//     let total=0
//     for(let i=0;i<5000;i++){
//        total+=i
//     }
//     console.log(total)
//     console.log(Math.floor(Math.random()*100))
// },1000)
// console.log("script end")
//if callBackFunction of setInterval has iteration then it may delay the output
// const body=document.body;
// console.log(body)
// const button=document.querySelector("button")
// console.log(button)
// const setIntervalId=setInterval(()=>{
//     const red=Math.floor(Math.random()*256)
//     const green=Math.floor(Math.random()*256)
//     const blue=Math.floor(Math.random()*256)
//     const randomColor=`rgb(${red},${green},${blue})`
//     body.style.background=randomColor
// },1000)
// body.addEventListener("click",()=>{
//     clearInterval(setIntervalId)
//     button.textContent=body.style.background
// })
// function sum(num1,num2,onSuccessCallback,onFailureCallback)//this function is taking two callbacks and is calling them inside
// {
//     if(typeof num1==="number" && typeof num2==="number")
//     {
//         onSuccessCallback(num1,num2)
//     }
//     else{
//         onFailureCallback()
//     }
// }
// sum("4",5,(num1,num2)=>{console.log(num1+num2)},()=>{console.log("You Entered wrong datatype")})
// const heading1 = document.querySelector(".heading");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// setTimeout(()=>{heading1.style.color="violet";
// heading1.textContent="one"
// },1000)
// setTimeout(()=>{heading2.style.color="purple"
// heading2.textContent="two"
// },2000)
// setTimeout(()=>{heading3.style.color="red"
// heading3.textContent="three"
// },3000)
// setTimeout(()=>{heading4.style.color="pink"
// heading4.textContent="four"
// },4000)
// Callback hell ----- results in pyramid of doom-------- can beresolved by promises
// setTimeout(()=>{if(heading1){
//     heading1.style.color="violet";
//     heading1.textContent="one"
// }else{
//     console.log("Element Doesnt exist")
// }

// setTimeout(()=>{heading2.style.color="purple"
// heading2.textContent="two"
// setTimeout(()=>{heading3.style.color="red"
// heading3.textContent="three"
// setTimeout(()=>{heading4.style.color="pink"
// heading4.textContent="four"
// },1000)
// },1000)
// },1000)
// },1000)
// Above code using function
// function changeColorText(element,text,color,delayTime){
//       setTimeout(()=>{
//         element.textContent=text
//         element.style.color=color
//       },delayTime)
// }
// changeColorText(heading1,"one","violet",1000)
// changeColorText(heading2,"two","purple",2000)
// changeColorText(heading3,"three","red",3000)
// changeColorText(heading4,"four","pink",4000)
// function changeColorText(
//     element,
//     text,
//     color,
//     delayTime,
//     onSuccessCallback,
//     onFailureCallBack
// ) {
//     setTimeout(()=>{
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             //after changing one element working for second element
//             onSuccessCallback(element);
//         } else {
//             onFailureCallBack(element);
//         }
//     },delayTime)
// }

// changeColorText(
//     heading1,
//     "one",
//     "violet",
//     1000,
//     (element) => {
//         console.log(
//             `${element.textContent} updated , now working on second element`
//         );
//         changeColorText(
//             heading2,
//             "two",
//             "purple",
//             1000,
//             (element) => {
//                 console.log(
//                     `${element.textContent} updated , now working on third  element`
                    
//                 );
//                 changeColorText(
//                     heading3,
//                     "three",
//                     "red",
//                     1000,
//                     (element) => {
//                         console.log(
//                             `${element.textContent} updated , now working on fourth  element`
//                         );
//                         changeColorText(
//                             heading4,
//                             "four",
//                             "pink",
//                             1000,
//                             (element) => {
//                                 console.log(
//                                     `${element.textContent} updated , now working on fifth  element`
//                                 );
//                                 changeColorText(
//                                     heading5,
//                                     "five",
//                                     "green",
//                                     1000,
//                                     (element) => {
//                                         console.log(
//                                             `${element.textContent} updated , now working on sixth  element`
//                                         );
//                                     },
//                                     () => {
//                                         console.log("Heading 5 doesnt exist");
//                                     }
//                                 );
//                             },
//                             () => {
//                                 console.log("Heading 4 doesnt exist");
//                             }
//                         );
//                     },
//                     () => {
//                         console.log("Heading 3 doesnt exist");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Heading 2 doesnt exist");
//             }
//         );
//     },
//     () => {
//         console.log("Heading1 doesnt exist");
//     }
// );
// console.log("script start")
// setTimeout(()=>{console.log("inside timeout")},2000)
// const bucket=["rice","vegetable","salt","toffee"]
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if (bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")) {
//         resolve("Fried Rice")
//     } else {
//         reject("All ingredients are not there")
//     }
// })
//Consuming a promise
// friedRicePromise.then((resolve)=>{
//     console.log("Lets eat",resolve)
// },(error)=>{
//   console.log(error)
// })
// friedRicePromise.then((resolve)=>{console.log("lets eat",resolve)}).catch((error)=>{console.log(error)})
//promise takes place asynchronously and its then and catch callbacks are added in microstack queue...setTimeout callbacks are added in callback queue but microstack queue is given preference
// let total =0
// for(let i=0;i<1000;i++){
// total+=i
// }
// console.log(total)
// console.log("script end")

//Function returning a promise
// const bucket=["rice","salt","vegetable","toffe"]
// function friedRice()
// {
//     const friedRicePromise=new Promise((resolve,reject)=>{
//         //resolve or reject a ;romise object after a interval
//         setTimeout(()=>{
//             if(bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt") ){
//                 resolve("Fried Rice")
//            }else{
//                   reject(new Error("All ingredients are not there"))
//            }
//         },2000)
      
//     })
//     return friedRicePromise
// }
// const returnedPromise=friedRice()
// returnedPromise.then((resolve)=>{
//     console.log("lets eat",resolve)
//     return resolve+=" with vegetables"
// })
// .then((updatedValue)=>{
//     console.log(updatedValue)
// })

// console.log(returnedPromise)
// const a=returnedPromise.then((resolve)=>{
//     console.log("lets eat",resolve)
//     return 5//will return a resolved promodse with value as 5
// })
// a.catch((error)=>{
//     console.log(error)
// })
// console.log(a)

// const friedRicePromise=new Promise((resolve,reject)=>{
//         if (bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")) {
//             resolve("Fried Rice")
//         } else {
//             reject("All ingredients are not there")
//         }
//     })
//     console.log(friedRicePromise)
//     console.log(typeof friedRicePromise)

//chngin the headings color and content using promise
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeTextColor(element,color,text,time)
// {
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         if (element) {
//             element.style.color=color
//             element.textContent=text 
//             resolve(`${element.textContent} got resolved`)
//         } else {
//             reject(new Error("element not found"))
//         }
       
//        },time)
//     })
// }
// const heading1Operation=changeTextColor(heading1,"violet","one",1000)
// console.log(heading1Operation)
// const heading2operation=heading1Operation.then((resolve)=>{
//     console.log(resolve)
//      return changeTextColor(heading2,"red","two",1000)
// })
// console.log(heading2operation)
// const heading3Operation=heading2operation.then((data)=>{
//      console.log(data)
//      return changeTextColor(heading3,"blue","three",1000)
// }).then((data)=>{
//     console.log(data)
//     return changeTextColor(heading4,"yellow","four",1000)})
//     .then((data)=>{
//         console.log(data)
//         return changeTextColor(heading5,"green","five",1000)})
//         .then((data)=>{
//             console.log(data)
//             return changeTextColor(heading6,"violet","six",1000)})
//             .then((data)=>{
//                 console.log(data)
//                 return changeTextColor(heading7,"orange","seven",1000)})
// const xhr=new XMLHttpRequest()
// console.log(xhr)
// console.log(xhr.readyState)
// const url="https://jsonplaceholder.typicode.com/posts"
// xhr.open("GET",url)
// console.log(xhr.readyState)
// // xhr.onreadystatechange=function(){
// //     console.log(xhr.readyState)
// //     if(xhr.readyState===4){
// //         const data=JSON.parse(xhr.response)
// //         console.log(data)
// //     }
// // }
// xhr.onload=function(){
//     if (xhr.status>=200 && xhr.status<300) {
//         console.log(xhr.readyState)
//         const data=JSON.parse(xhr.response) 
//         // const data=xhr.response
        
//         console.log(typeof data)
//         console.log(data)
//         const id=data[3].id
        
//         const newUrl=`${url}/${id}`
//         console.log(newUrl)
//         const xhr2=new XMLHttpRequest()
//         xhr2.open("GET",newUrl)
//         xhr2.onload=()=>{
//             const newdata=JSON.parse(xhr2.response) 
//             console.log(newdata)
//         }
//         xhr2.send()
//     } else {
//         console.log(xhr.readyState)
//        console.log("url is wrong") 
//     }
  
// }
// xhr.onerror=()=>{
//     // console.log(xhr.readyState)
//     // console.log(xhr.status)
//     console.log("Network error")}
// xhr.send()

//Promisifying the above
// const url="https://jsonplaceholder.typicode.com/posts"
// function PromiseApiMethod(method,url){
//     const promiseApi=new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest()
//         xhr.open(method,url)
//         xhr.onload=()=>{
//             if (xhr.status>=200 && xhr.status<300) {
//                 const data=JSON.parse(xhr.response) 
//                 resolve(data)
//             } else {
//                 reject("Some error occured")
//             }
//             const data=JSON.parse(xhr.response)
//         }
//         xhr.onerror=()=>{
//             console.log("Network Error detected")
//         }
//         xhr.send()
//     })
//     return promiseApi
// }


// PromiseApiMethod("GET",url).then((data)=>{
//    console.log(data)
//    return data[3].id
// }).then((id)=>{
//      console.log(id)
    
//      const newUrl=`${url}/${id}`
//      return PromiseApiMethod("GET",newUrl)
// })
// .then((newData)=>{
//    console.log(newData)
// }).catch(()=>{
//     console.log(error)
// })
// fetchApi ---- it always return a promise with a object as a resolved value and catches only network error
const url="https://jsonplaceholder.typicode.com/posts"

// console.log(fetch(url))
// fetch(url).then((object)=>{
//     if (object.ok) {
//         console.log(object) 
//         //   console.log(object.json())    
//           return object.json()
//     } else {
//         throw new Error("Something went wrong")
//     }

// }).then((data)=>{
//    console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })
// post data
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(json => console.log(json));
// Async funct runs asynchronously and always returns a promise..await always wait for the promise to be resolved
async function fetchApi(){
   const response=await fetch(url)//no need to apply then await will automatically will provide with the resolved value
   console.log(response.ok)
  if (!response.ok) {
    throw new Error("something went wrong")
  }
   const data=await response.json()
//    console.log(data) 
   return data
}
fetchApi().then((data)=>{
   console.log(data)
}).catch((error)=>{
    console.log(error)
})
