// "use strict"
// console.log('Hello World');
// var firstName="Amish";
// console.log(firstName)
// firstName="Sonu";
// console.log(firstName)
// lastName="Umar";//Not a good practice..so to avoid use strict
// console.log(lastName)
// Rules for naming variable
// cannot start with a number
// let 1rat="chuha";
// let rat1="chuha";
// console.log(rat1)
// // cannot use spaces
// // let rat 2="chuha2"
// // console.log(rat 2);
// //only use underscores and dollar sign
// let $rat3="chuha 3"
// console.log($rat3)
// let rat_4="chuha 4";
// console.log(rat_4)
//in var redeclaration is possible but in let it is not possible however updation is possible in both case
// var firstName="amish";
// var firstName="Sonu";
// console.log(firstName);
// let firstName="Amish"
// let firstName="sonu"
// Reassignment to constant variable is not allowed
// const pi=3.14
// pi=4.18
// let firstName="Amish";
// console.log(firstName[0]);
// console.log(firstName[1]);
// console.log(firstName[2]);
// console.log(firstName[3]);
// console.log(firstName[5]);//will get undefined as at 5th index we havent defined anything
// console.log(firstName[4]);
// let lastName="  Umar 1";
// console.log(lastName.length);
// console.log(lastName[lastName.length-1]);//will give the last index
//Strings are immutable so all string methods will return new string
// let firstName="   Amish  "
// console.log(firstName.length);
// // console.log(firstName.trim());
// // console.log(firstName.length);
// let newFirstName=firstName.trim();
// console.log(newFirstName)
// console.log(newFirstName.length);
// let firstName="Amish"
// console.log(firstName.toUpperCase());
// console.log(firstName)
// let newName=firstName.toUpperCase();
// console.log(newName);
// let newName2=firstName.toLowerCase();
// console.log(newName2)
// console.log(firstName.slice(0,3))
// console.log(firstName);
// let newName=firstName.slice(1);
// console.log(newName);
// console.log(typeof firstName)
// // convert string to number
// firstName=+firstName;
// console.log(typeof firstName)
// // convert number to string
// firstName=firstName+"";
// console.log(typeof firstName);
// firstName=Number(firstName)
// console.log(typeof firstName);
// firstName=String(firstName);
// console.log(typeof firstName)
// String Concatenation
// let lastName="Umar";
// let fullName=firstName+lastName;
// console.log(fullName)
// let age=25;
// String template- quick way of string concatenation
// let aboutMe=`My name is ${firstName} ${lastName} and my age is ${age}`
// console.log(typeof aboutMe, aboutMe)
// console.log(aboutMe);
// let n=undefined;
// console.log(typeof n)
// let n2=null
// console.log(n2,typeof n2)//javscript error showing null as object
// console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
// let num1=900719925474199988n;
// let num2=BigInt(900719925474099100999393)
// console.log(num1+num2)
// let num3=90
// console.log(num1+num2+num3);//will throw error, both should be bigint to perform mathematical operation
// Comparison operators

// let num1=+prompt("Enter your age :- ")
// console.log(typeof num1)
// if (num1>18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }

// let a=4
// let b="4"
// if(a>=b){
//     console.log("A is superior")
// }
// else{
//     console.log("B is superior")
// }

// console.log(a===b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a!==b)
// truthy and falsy values
// let name1=""
// if(name1){
//     console.log(`Your name is ${name1}`)

// }
// else{
//     console.log("Your name is empty")
//     }

// let drink=age>18?"coffee":"milk"
// console.log(drink)
// let vote=age>=18?"You can vote":"You cannot vote"
// console.log(vote)
// if(firstName[0]==='A' && age>18){
//     console.log(`Your name starts with ${firstName[0]} and your age is ${age} and you are eligible to vote`)
// }
// if(firstName==="Amish" || age>35)
// {
//     console.log("Yourname is Amish and you can vote")
// }
// Gussing a number
// let winningNumber=19;
// let userGuess=25
// if(userGuess===19){
//     console.log("Your guess is correct")
// }
// else{
//     if(userGuess<winningNumber){
//         console.log("Number is too low")
//     }
//     else{
//         console.log("Number is too high")
//     }
// }
// if-elseif-else
// let temp=25
// if(temp<0)
// {
//     console.log("Itis extremely cold outside")
// }
// else if(temp<18)
// {
//     console.log("It is cold outside")
// }
// else if(temp<30){
//     console.log("Weather is good today")
// }
// else if(temp<45){
//     console.log("Turn on the A.C")
// }
// else{
//     console.log("It is extremely hot")
// }
// let lang="Bhojpuri"
// //same thing we can write with if-elseif-else
// switch(lang) 
// {
//     case "English":console.log('Hello')
//     break
//     case "Hindi":console.log("Kaise hai aap log")
//     break
//     case "German":console.log("Bonjour")
//     break
//     default:console.log("pta nhi bhaiwa kon sa language hai")
// }
//sum of first 10 natural  numbers
// let i=0
// let total=0
// while(i<=10){
//     total=total+i
//     i++
// }
// console.log(total)
// let num=10
// let sum=(10*(10+1))/2
// console.log(sum)
// let total=0
// for(let i=0;i<=10;i++){
// total=total+i

// }
// console.log(total)
// for(let i=0;i<=9;i++)
// {
//     if(i==4)
//     {
//         // break
//         continue//4 will not be printed
//     }
//     console.log(i)
// }
// let i=11
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)
// console.log(i)
// Arrays
// let fruits=["apple","mango","banana"]
// for(let i=0; i<fruits.length;i++)
// {
//     console.log(fruits[i])
// }
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))
// let obj={}
// console.log(Array.isArray(obj))
// fruits[0]="Pineapple"
// console.log(fruits)//Arrays are mutable
//pop and push
// fruits.push("litchi")
// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits)//pop removes as well as return the element
// fruits.unshift("litchi")
// console.log(fruits)//unshift adds the element in the beginning
// console.log(fruits.shift())
// console.log(fruits)
// let array2=fruits.slice(0)
// console.log(array2)
// console.log(fruits===array2)
// let array2=fruits.slice(0).concat("grapes","apple")
// console.log(array2)
// let array3=fruits.slice(0).concat(["grapes","apple"])
// console.log(array3)
// let array4=[].concat(fruits,"papaya","orange")
// console.log(array4)
// let array5=[].concat(fruits,["papaya","orange"])
// console.log(array5)
// let array6=[...fruits,"Guava","Ghutli wala aam"]
// console.log(array6)
// let array7=[...fruits,["Guava","pineapple"]]
// console.log(array7)
// let array8=[1,2,3]
// let array9=[...fruits,...array8]
// console.log(array9)
// Array destructuring
// let numArray=[1,2,3,4]
// let var1=numArray[0]
// let var2=numArray[1]
// let var3=numArray[2]
// console.log(`Array1 :: ${var1} , Array2:: ${var2} Array3::${var3}`)
// let[var1,var2]=numArray;
// console.log("var1",var1)
// console.log("var2",var2)
// let [var1,var2,var3,var4]=numArray
// console.log(var1,var2,var3,var4)
// let [var1,,var2,var3]=numArray
// console.log(var1,var2,var3)
// let newArray=numArray.slice(2)
// let[var1,var2,...newArray]=numArray
// console.log(newArray)

// Objects
// let person={
//     firstName:"Amish",
//     "lastName":"Umar",
//     // keys:1
// }
// console.log(person.firstName)
// console.log(person["lastName"])
// console.log(person["firstName"])
// person.gender="Male"
// console.log(person)
// person["Class"]=12
// console.log(person)
// //difference between . and bracket notation
// let cards={
//     "joker card":1,
//     spade:2
// }
// console.log(cards)
// // console.log(cards.joker card)  will throw error
// console.log(cards["joker card"])
// const key="email"//want to push this key email in person object
// // person.key="abc@gmail.com"
// person[key]="abc@gmail.com"
// console.log(person)

// Iterate through object
// for(let keys in person){
//     // console.log(keys)
//     // console.log(person.keys)//it is searching key with name keys in person object which is not right
//     // console.log(person[keys])
//     console.log(`${keys} : ${person[keys]}`)
// }
// let person={
//     firstName:"Amish",
//     "lastName":"Umar",
//     // keys:1
//     key1:"newValue"
// }
// let keysArray=Object.keys(person)
// // console.log(keysArray)
// // console.log(typeof keysArray)
// // console.log(Array.isArray(keysArray))
// // for(let keys of keysArray)
// // {
// //     console.log(person[keys])
// // }
// const key1="k1"
// const key2="k2"
// const key3="k3"
// const value1="v1"
// const value2="v2"
// const value3="v3"
// const newObj1={
//     [key1]:value1,//using computing power
//     [key2]:value2,
//     [key3]:value3
// }
// console.log(newObj1)
// const newObject2={}
// newObject2[key1]=value1
// newObject2[key2]=value2
// newObject2[key3]=value3
// console.log(newObject2)
// //spread operator
// const newObj3={...person,...newObj1,a1:"hello",a2:"world"}
// console.log(newObj3)
// const newObj4={
//     ..."abc"
// }
// console.log(newObj4)
// const newObj5={...["item1","item2"]    }   


// console.log(newObj5)
// const newArray=[..."12334455"]
// console.log(newArray)
//Object destructing
// const obj={
//     firstName:"Amish",
//     lastName:"Umar",
//     gender:"Male",
//     branch:"Mechanical"
// }
// const{firstName,lastName,...newobj}=obj
// console.log(firstName)
// console.log(lastName)
// // lastName="Kumar"
// // console.log(lastName)
// console.log(newobj)
// console.log(newobj.gender,newobj.branch)
// const{firstName:var1,branch:var2}=obj
// console.log(var1,var2)
// Array of objects

// const users=[
//     {userId:1,firstName:"Amish",lastName:"Umar",gender:"Male"},
//     {userId:2,firstName:"Gautam",lastName:"Roy",gender:"Male"},
//     {userId:3,firstName:"Deepanshi",lastName:"Rawat",gender:"Female"},
    
// ]
// // for (let user of users)
// // {
// //     // console.log(user)
// //     console.log(user.userId)
// //     console.log(user.firstName)
// //     console.log(user.lastName)
// // }
// // Nested Destructing
// const[user1,user2,user3]=users
// console.log(user1)
// console.log(user2)
// console.log(user3)
// const[{firstName:user1fname,gender:user1gender},,{firstName:user3fname,gender:user3gender}]=users
// console.log(user1fname)
// console.log(user1gender)
// console.log(user3fname)
// console.log(user3gender)
// write a function to find the sum of three numbers
// function sum(num1,num2,num3){
//     return num1+num2+num3;
// }
// const sumOfNumber=sum(1,2,3)
// const sumOfNumber2=sum(1,2)
// console.log(sumOfNumber)
// console.log(sumOfNumber2)//any number added with undefined ives undefined
// function even(num1){
//     return num1%2===0
// }
// const evenResult=even(4)
// console.log(evenResult)

// function indexTarget(array,target)
// {
//     for(let i=0;i<array.length;i++){
//          if(array[i]===target)
//          {
//             return i;
//          }
//         //  else {
//         //     return -1;
//         //  }
        
//     }
//     return -1
// }
// let arr=[1,2,3,4,5,6,7]
// const ans=indexTarget(arr,4)
// console.log(ans)
// const evenNum=function(num1){
// return num1%2===0
// }
// console.log(evenNum)//functi0n gets printed---need to use ()
// const sum=function(){
//     return 2+3
// }
// console.log(sum())
//Arrow function
// const increNum=num=>{return ++num}
// console.log(increNum(3))
// const increNum=num=>++num
// console.log(increNum(3))
// Lexical scope
// let myVar="hello"
// const myFunction=()=>
// {
//     // let myVar="hello"
//     function sum(a,b)
//     {
//         let myVar="hello"
//         console.log(`${myVar} World`)
//         return a+b
       
//     }
//     const evenNum=function(num1)
//     {
//         return num1%2===0
//     }
//     const firstChar=(a)=>
//     {
//         return a[0]
//     }
//     console.log("I am inside myFunction")
//    console.log(sum(1,2))  
//     console.log(evenNum(4)) 
//     console.log(firstChar("Amish")) 
// }
// myFunction();

// Block scope vs Fumction scope
// let num=50
// {
//     // let num=10
//     console.log(num)//due to lexical scope it is able to print
// }
// // console.log(num)
// {
//     // console.log(num)
//     let num=20
//     console.log(num)
// }
// // let num=30
// // console.log(num)//this we have written in function scope is acting as a block scope

// {let num=10//accessible in child block
//     {//block within a block
//         console.log(num)
//     }

// }
// {
//     var num=10
//     console.log(num)
// }
// console.log(num)//varis accessible everywhere in this file
// {
//     console.log(num)
// }
// if(true)
// {
//     let str="Hello World"
//     console.log(str)
//     hello()
// }
// function hello(){
//     console.log(str)
// }
// hello()
//default parameters
// function sum(a,b=1)
// {
//     return a+b
// }
// console.log(sum(10))
// Rest Parameters
// function sum(a,b,...c)
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// sum(2,4,8,9,10)
//using rest parameters find the sum of any numbers
// let total=0
// const sum=(...num)=>
// {
//     console.log(num)
//     console.log(Array.isArray(num))
//   for(let n of num) 
//   {
//     total=total+n
//   }
//   console.log(total)

// }
// sum(1,2,3,4,5,6,7,8,9,10)
// param destructing
// const objFunc=([{id:id1,fname:fname1,lname:lname1},{id:id2,fname:fname2,lname:lname2},{id:id3,fname:fname3,lname:lname3}])=>
// {
//     console.log(id1)
//     console.log(fname1)
//     console.log(id2)
//     console.log(fname2)
//     console.log(id3)
//     console.log(fname3)
// }
// let obj=[
//     {id:1,fname:"Amish",lname:"umar"},
//     {id:2,fname:"Mohit",lname:"Kumar"},
//     {id:3,fname:"Rohit",lname:"Kumar"}
// ]
// objFunc(obj)

// const func1=(callback)=>callback(2,3)
// const func2=(a,b)=>a+b
// console.log(func1(func2))
//Function returning a function
// function test()
// {
//     return function(){
//         console.log("Hello World")
//     }
// }
// let a=test()
// console.log(a)
// a()
//foreach- doesnt return a new array and doesnt change the xisting array
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// const num = numbers.forEach((number,index)=>{
//     console.log(`index is ${index} and number is ${number}`)
// }

// )
// console.log(num) doesnt return anything so need to store in a variable
// const users=[
//     {id:1,fname:"Amish",lname:"umar"},
//     {id:2,fname:"Mohit",lname:"Kumar"},
//     {id:3,fname:"Rohit",lname:"Shrivastav"}
// ]
// //print first name of users using foreach loop
// users.forEach((obj)=>{
//    console.log(obj.fname)
// })
// for(let user of users)
// {
//     console.log(user.lname)
// }
// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i].id)
// }
//Map Method- similar to foreach but it returns a new array
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// //Create a new array where each number is multiplied by2
// const newArray=numbers.map(num=>num*2)
// console.log(newArray)
//Realistic example
// const users=[
//         {id:1,fname:"Amish",lname:"umar"},
//         {id:2,fname:"Mohit",lname:"Kumar"},
//         {id:3,fname:"Rohit",lname:"Shrivastav"}
//     ]
// //create a new array storing only firstname
// const newArray=users.map((obj)=>
// {
//   return obj.fname
// })
// console.log(newArray)
// console.log(users)
//filter- provides a new array and the function used returns a boolean value
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// const newArray=numbers.filter((num)=>
// {
//   return num%2==0
// })
// console.log(newArray)
// Realistic Example
// const product=[
//     {id:1,name:"phone",price:18000},
//     {id:2,name:"tablet",price:15000},
//     {id:3,name:"tv",price:13000},
//     {id:4,name:"laptop",price:30000},
//     {id:5,name:"desktop",price:50000}
// ]
// const newAarray=product.filter((obj)=>{
// return obj.price>18000
// })
// console.log(newAarray)
// Reduce Method- reduces array to a single value and returns it
//Find the sum of all elements of array
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// const newArray=numbers.reduce((accumulator,currentValue)=>
// {
//   return accumulator+currentValue
// },100)
// console.log(newArray)
// Realistic Example
// const product=[
//         {id:1,name:"phone",price:18000},
//         {id:2,name:"tablet",price:15000},
//         {id:3,name:"tv",price:13000},
//         {id:4,name:"laptop",price:30000},
//         {id:5,name:"desktop",price:50000}
//     ]
//     const newArray=product.reduce((accumulator,currentValue)=>
//     {
//         return accumulator+currentValue.price
//     },0)
//     console.log(newArray)
//Sort Method = Changes the original array
// const num=[1200,1500,2500,5,9]
// const names=["amish","rohit","Gautam","ZEBRA","bawasir"]//capital letters ascii codes are smaller
// num.sort()
// names.sort()
// console.log(num)
// console.log(names)
// Sort the products on the basis of price in ascensing order
// const product=[
//             {id:1,name:"phone",price:18000},
//             {id:2,name:"tablet",price:15000},
//             {id:3,name:"tv",price:13000},
//             {id:4,name:"laptop",price:30000},
//             {id:5,name:"desktop",price:50000}
//         ]
//     //    const newArray= product.sort((a,b)=>
//     //     {
//     //             return a.price-b.price
//     //     })
//         console.log(product)
//         // console.log(newArray)
//         const newArray2=product.sort((a,b)=>
//         {
//             return b.price-a.price
//         })
//         // console.log(newArray2) Not required
//         console.log(product)
// Find - Finds a single element and returns that element for which function return true 
// const product=[
//                 {id:1,name:"phone",price:18000},
//                 {id:2,name:"tablet",price:15000},
//                 {id:3,name:"tv",price:13000},
//                 {id:4,name:"laptop",price:30000},
//                 {id:5,name:"desktop",price:50000}
//             ]
//         const findObj=product.find((obj)=>
//         {
//             return obj.price===30000
//         })  
//         console.log(findObj)  
// Every Method- return true if each element of the array satisfies the function
//  const product=[
//                     {id:1,name:"phone",price:18000},
//                     {id:2,name:"tablet",price:15000},
//                     {id:3,name:"tv",price:13000},
//                     {id:4,name:"laptop",price:30000},
//                     {id:5,name:"desktop",price:50000}
//                 ]
        //   const num=product.every((obj)=>
        //   {
        //     return obj.price<1000000
        //   })
        // //   console.log(product)
        // console.log(num)
        // const num2=product.some((obj)=>
        // {
        //    return obj.price>30000
        // })
        // console.log(num2)
        //Fill method - (value,start,end) used to change the value of an array.Makes changes in the existing array
    //    const newArray=[]
    //     const arr=new Array(10).fill(-1)
    //     console.log(arr)
    // product.fill({id:2,name:"Iphone",price:115000},1,2)
    // console.log(product)
    //splice method -(starting index,no of values to delete,value to insert)- it changes the original array.It returns the deleted item which we can store in a variable
    // const deletedItem=product.splice(3,2)
    // console.log(deletedItem)
    // // console.log(product)
    // product.splice(3,0,{id:4,name:"HPlaptop",price:30000},
    // {id:5,name:"I Mac",price:50000})
    // console.log(product)
    //insert as well as delete
    // product.splice(3,2,{id:4,name:"HP-laptop",price:30000},
    // {id:5,name:"I MAC",price:50000})
    // console.log(product)

//Dom Manipulation
// console.log(window.document)
// console.dir(window.document)
// Select element using getElementById
// console.log(document.getElementById("main-heading"))
// console.dir(document.getElementById("main-heading"))
// const mainHeading=document.getElementById("main-heading")//returns an object
// console.log(mainHeading)
//Select element using query selector
// console.log(document.querySelector(".nav-item"))//first li is returned
// console.log(document.querySelector("#main-heading"))//h2 tag returnrd
// console.log(document.querySelectorAll(".nav-item"))//all li is returned
// const mainHeading=document.querySelector("#main-heading")
// console.log(mainHeading)
// console.log(mainHeading.textContent)//hidden things inside h2 tags will also be printed
// mainHeading.textContent="I have changed the main heading"
// console.log(mainHeading.textContent)
// const mainHeading=document.querySelector("#main-heading")
// console.log(mainHeading.style)
// mainHeading.style.color="blue"
// mainHeading.style.backgroundColor="white"
// mainHeading.style.fontWeight=900
// mainHeading.style.border="5px solid red"
//get and set attribute - getAttribute is used to get attribute value and setAttribute is used to set value of an attribute
// const link=document.querySelector("a")//first a tag will be fetched
// console.log(link)
// console.log(typeof link.getAttribute("href"))
// console.log(link.getAttribute("href").slice(1))
// link.setAttribute("href","https://google.com")
// console.log(link.getAttribute("href"))

//Getmultiple elements once
// a) by getElementByClassName -will return a html collection which is array like object
// console.log(document.getElementsByClassName("nav-item"))//Returns html collection-Array like object
// const navItems=document.getElementsByClassName("nav-item")
// console.log(navItems.length)
// console.log(navItems[0])
// console.log(navItems[1])
// console.log(navItems[2])
// console.log(Array.isArray(navItems))
// console.log(typeof navItems)
// const navItems=document.querySelectorAll("a")

// console.log(typeof navItems)
// console.log(Array.isArray(navItems))
// console.log(navItems[0])
// console.log(navItems[1])
// console.log(navItems[2])
// We can use for loop and for of loop on both list  ode and html collection but we can apply foreach loop only on list node
// a) List Node
// 1) normal for loop-change the background color and text color of nav-item
// for(let i=0;i<navItems.length;i++)
// {
//     navItems[i].style.color="blue"
//     navItems[i].style.backgroundColor="white"
//     navItems[i].style.fontWeight="bold"

// }
// for(let navItem of navItems)
// {
//     navItem.style.color="blue"
//     navItem.style.backgroundColor="white"
//     navItem.style.fontWeight="bold"

// }
// navItems.forEach((navItem)=>
// {
//   navItem.style.color="blue"
//   navItem.style.backgroundColor="white"
// })

// b)Html Collection

// const navItems=document.getElementsByTagName("a")
// console.log(navItems)
// for(let i=0;i<navItems.length;i++)
// {
//     navItems[i].style.color="blue"
//     navItems[i].style.backgroundColor="white"
//     navItems[i].style.fontWeight="bold"

// }

// for(let navItem of navItems)
// {
//     navItem.style.color="blue"
//     navItem.style.backgroundColor="white"
//     navItem.style.fontWeight="bold"

// }
// navItems.forEach((navItem)=> //Uncaught TypeError: navItems.forEach is not a function
// {
//   navItem.style.color="blue"
//   navItem.style.backgroundColor="white"
// })
// Convert list node to array
// let navItems=document.querySelectorAll("a")
// console.log(navItems)
// navItems=Array.from(navItems)
// console.log(Array.isArray(navItems))
// convert html collection into array
// let navItems=document.getElementsByClassName("nav-item")
// console.log(navItems)
// navItems=Array.from(navItems)
// console.log(Array.isArray(navItems))

//Inner Html
// const inner=document.querySelector(".headline")
// console.log(inner)
// console.log(inner.innerHTML)
// inner.innerHTML="<h1>I am changing the headline with inner html</h1>"
// inner.innerHTML+="<button class=\"btn btn-headline\">Changed Button</button>"
// console.log(inner.innerHTML)

// To learn about root node goto index2.html and index2.js

//Completing Todo

// const todoForm=document.querySelector(".form-todo")
// const todoList=document.querySelector(".todo-list")
// const textInput=document.querySelector(".form-todo input[type='text']")

// todoForm.addEventListener("submit",(e)=>
// {
//     e.preventDefault()
//     const textInputValue=textInput.value
//     const innerHtml=` <span class="text">${textInputValue}</span>
//             <div class="todo-buttons">
//               <button class="todo-btn done">Done</button>
//               <button class="todo-btn remove">Remove</button>
//             </div>`
//     const newLi=document.createElement("li")
//     newLi.innerHTML=innerHtml
//     todoList.append(newLi)
//     textInputValue.value=""
// })
// todoList.addEventListener("click",(e)=>
// {
//     if(e.target.classList.contains("done"))
//     {
//       const liSpan=e.target.parentNode.previousElementSibling
//       liSpan.style.textDecoration="line-through"
//     }
//    if(e.target.classList.contains("remove"))
//    {
//      const removeLi=e.target.parentNode.parentNode
//      removeLi.remove()
//    }
// })

// More Practice
//To find the class assigned to elements 
// const sectionTodo=document.querySelector(".section-todo")
// const classList=sectionTodo.classList
// console.log(classList)
// classList.add("bg-dark")
// console.log(classList)
// classList.remove("bg-dark")
// console.log(classList)
// classList.toggle("bg-dark")
// console.log(classList)
// classList.toggle("bg-dark")
// console.log(classList)

//Add new element to html doc using javascript
// const todoList=document.querySelector(".todo-list")
// todoList.innerHTML+="<li>New Todolist</li>"
//document.createElement to add elements append,prepend,before,after,remove

// const todoList=document.querySelector(".todo-list")
// const newLi=document.createElement("li")
// const newLiText=document.createTextNode("Adding new li using create element")
// newLi.textContent="Adding new li using create element"
// newLi.append(newLiText)
// todoList.append(newLi)
// todoList.prepend(newLi)
// todoList.before(newLi)
// todoList.after(newLi)
// todoList.remove()
//Clone Nodes - We cannot append and prepend together
// const newLi=document.createElement("li")
// newLi.textContent="Learning Clone node"
// todoList.append(newLi)
// // todoList.prepend(newLi)//this will be preferred
// const cloneNewLi=newLi.cloneNode(true)//deep clone with its child content will also be cloned
// todoList.prepend(cloneNewLi)//this also we dont use because we can create new elements and append
// const newLi=document.createElement("li")
// newLi.textContent="Learning Clone node"
// todoList.appendChild(newLi)
// const referenceNode=document.querySelector(".todo-list li")
// console.log(referenceNode)
// todoList.insertBefore(newLi,referenceNode)
// todoList.replaceChild(newLi,referenceNode)
// todoList.removeChild(referenceNode)
// const allList=document.querySelectorAll(".todo-list li")
// const allList2=todoList.getElementsByTagName("li")
// console.log(allList2)
// console.log(allList)
// todoList.append(newLi)
// console.log(allList)
// console.log(allList2)
// const todoList=document.querySelector(".todo-list")
// const info=todoList.getBoundingClientRect()
// const info=todoList.getBoundingClientRect().width
// const info=todoList.getBoundingClientRect().height
// const info=todoList.getBoundingClientRect().top
// const info=todoList.getBoundingClientRect().bottom
// console.log(info)
const button=document.querySelector(".btn-headline")
// console.log(button)
// button.onclick=function(){
//     console.log("You Clicked Me")
// }
button.addEventListener("click",(e)=>{
    console.log("You Clicked Me")
    console.log(e)
    console.log(e.target.textContent)
    console.log(e.currentTarget)
    console.log(this)//window object because we used arrow function
})

    


        


