// 1st way-the hard way
const generatePasswordButton=document.querySelector("[generatePassword]")

const rangeSlider=document.querySelector("#myRange")
const passwordvalueDisplay=document.querySelector(".passswordLength p")
const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")
const numbers=document.querySelector("#numbers")
const symbols=document.querySelector("#symbols")
const inputPasswordDisplay=document.querySelector("#passworddisplay")
const copyButton=document.querySelector("#copybtn")
const strengthsymbol=document.querySelector(".strengthsymbol")
// const allSymbols='`~!@#$%^&*{}[]'

// const allCheckBoxes=document.querySelectorAll(".inputs input[type='checkbox']")
// for(let checkbox of allCheckBoxes){
    
//     checkbox.addEventListener("change",sliderValueUpdate)

// }

// //function to update range slider value on basis of checkbox ticked
// function sliderValueUpdate(){
  
//         let counterOfCheck=0
//         for(let checkbox of allCheckBoxes){
//             if(checkbox.checked){
//              counterOfCheck++
//         }
//         }
        
        
       
        
//         if(rangeSlider.value < counterOfCheck){
//              rangeSlider.value=counterOfCheck
           
//             passwordvalueDisplay.innerText=counterOfCheck
//         }

// }





// function generateRandomNumber(max,min){
//     return Math.floor(Math.random()*(max-min))+min
// }
// function randomUpperCase(){
//     const uppercaseLetter=String.fromCharCode(generateRandomNumber(65,91))
//     return uppercaseLetter
// }
// function randomLowerCase(){
//     const lowercaseLetter=String.fromCharCode(generateRandomNumber(97,123))
//     return lowercaseLetter
// }
// function randomSymbol(){
//     const randomSymb=allSymbols[generateRandomNumber(0,allSymbols.length)]
//     return randomSymb
// }
// function randomNumber(){
//     return generateRandomNumber(0,10)
// }
// rangeSlider.addEventListener("input",(e)=>{
// passwordvalueDisplay.innerText=e.target.value
// })

// //Shuffle the password
// function shufflePassword(array){
//   for(let i=array.length-1;i>0;i--){
//       const randomj=Math.floor(Math.random(i+1))
//       const temp=array[i]
//       array[i]=array[randomj]
//       array[randomj]=temp
//   }
//   let string=""
//   array.forEach(element => {
//     string+=element
    
//   });
//   return string
// }

// function strengthUpdate(){
//   if(inputPasswordDisplay.value.length>=8 && uppercase.checked && lowercase.checked && numbers.checked && symbols.checked ){
//       strengthsymbol.style.backgroundColor="green"
//   }
//   else if(inputPasswordDisplay.value.length>=6 && (uppercase.checked || lowercase.checked) && (numbers.checked || symbols.checked) ){
//       strengthsymbol.style.backgroundColor="yellow"
//   }
//   else{
//     strengthsymbol.style.backgroundColor="red"
//   }
// }

// generatePasswordButton.addEventListener("click",()=>{    
//     let password="";
//     console.log("clicked generated password button")
//     let passwordArray=[]
//     if(uppercase.checked){
//       passwordArray.push(randomUpperCase)
//     }
//     if(lowercase.checked){
//       passwordArray.push(randomLowerCase)
//     }
//     if(numbers.checked){
//       passwordArray.push(randomNumber)
//     }
//     if(symbols.checked){
//       passwordArray.push(randomSymbol)
//     }
//     if(passwordArray.length==0)return
    
//     // Compulsory addition
//     for(let item of passwordArray){
//         password+=item()
//     }
//     // Remaining place addition
//     for(let i=1;i<=Number(passwordvalueDisplay.innerText-passwordArray.length);i++){
//       const randomInteger=generateRandomNumber(0,passwordArray.length)
//       password+=passwordArray[randomInteger]()
      
      
//     }
//     inputPasswordDisplay.value=shufflePassword(Array.from(password))
//     sliderValueUpdate()
//     strengthUpdate()

// })
// copyButton.addEventListener("click",copyToClipBoard)

// async function copyToClipBoard(){
//   if(inputPasswordDisplay.value!=="" || inputPasswordDisplay.length>0){
//        try{
      
//     await navigator.clipboard.writeText(inputPasswordDisplay.value)//will goto next only when promise is resolved
//     copyButton.title="Copied"
//     copyButton.innerText="check"
//     setTimeout(()=>{
//        copyButton.title=""
//        copyButton.innerText="content_copy" 
//     },2000)
//    } catch(e){
//       copyButton.title="Not Copied"
//    }

//   }else{
//        return
//   }

// }


// 2nd way the easy way--wrong, not working in all cases
let allNumbers="123456789"
let allUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allLowerCase="abcdefghijklmnopqrstuvwxyz"
let allSymbols="`~!@#$%^&*()[]|"
function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min))
}

generatePasswordButton.addEventListener("click",()=>{
  let password=""
  let stringOfAllValues=""
  stringOfAllValues+=uppercase.checked?allUpperCase:""
  stringOfAllValues+=lowercase.checked?allLowerCase:""
  stringOfAllValues+=numbers.checked?allNumbers:""
  stringOfAllValues+=symbols.checked?allSymbols:""
  if(stringOfAllValues=="" || stringOfAllValues.length==0){
     return
  }
   for(i=1;i<=rangeSlider.value;i++){
    const randomIndex=generateRandomNumber(0,stringOfAllValues.length)
    password+=stringOfAllValues[randomIndex]
   }
   inputPasswordDisplay.value=password
})

