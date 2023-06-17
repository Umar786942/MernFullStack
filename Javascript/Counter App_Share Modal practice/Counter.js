const plus = document.querySelector(".plus");
const value = document.querySelector(".value");
const minus = document.querySelector(".minus");
// console.log(typeof +value.textContent)

plus.addEventListener("click", (event) => {
  let valueToBeWorked = +value.textContent;
  console.log(typeof valueToBeWorked);
  valueToBeWorked+=1
  value.textContent=valueToBeWorked
});
minus.addEventListener("click", (event) => {
    let valueToBeWorked = +value.textContent;
    console.log(typeof valueToBeWorked);
    valueToBeWorked-=1
    value.textContent=valueToBeWorked
  });
