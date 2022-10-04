const random = Math.floor(Math.random() * 20 + 1);

let value = document.querySelector(".message");
let score = document.querySelector(".up");
let guess = document.querySelector(".guess");
let btn = document.querySelector(".btn");
const output = document.querySelector(".output");
score = 15;
console.log(random);
btn.addEventListener("click", function () {
  const num = Number(guess.value);
  if (!num) {
    value.textContent = "false";
  } else if (num == random) {
    value.textContent = "congratulation";
  } else if (num > random) {
    score--;
    score.textContent = score;
  } else {
    value.textContent = "are you hagol ni kono";
  }
});
