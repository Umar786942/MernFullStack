const btns = document.querySelectorAll(".btn");
const body = document.body
// console.log(body)

console.log(btns);
for (let button of btns) {
  button.addEventListener("click", (e) => {
    const btncontent=e.target.textContent
    console.log("You Clicked Me!!!"," - ",btncontent);
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
   
    const randomColor = `rgb(${red},${green},${blue})`;
    console.log(randomColor)
    body.style.backgroundColor = randomColor;
  });
}
