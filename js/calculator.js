const display = document.querySelector("#display");
const inputs = document.querySelectorAll(".box1");

inputs.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  });
});
