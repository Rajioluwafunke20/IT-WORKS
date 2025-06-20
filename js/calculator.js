const display = document.querySelector("#display");
const inputs = document.querySelectorAll(".box1");

let result = "";

inputs.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText.trim();

    // Handle icons (like ÷, ×, +, etc.)
    if (value.includes("÷") || button.innerHTML.includes("fa-divide")) {
      result += "/";
    }
    else if (value.includes("×") || button.innerHTML.includes("fa-times")) {
      result += "*";
    }
    else if (value.includes("+") || button.innerHTML.includes("fa-plus")) {
      result += "+";
    }
    else if (value.includes("-") || button.innerHTML.includes("fa-minus")) {
      result += "-";
    }
    else if (value === "=") {
      result = eval(result);
    }
    else if (value === "C" || value === "CE") {
      result = "";
    }
    else if (button.innerHTML.includes("fa-backspace")) {
      result = result.slice(0, -1);
    }
    else if (value.includes("1/x")) {
      result = 1 / parseFloat(result);
    }
    else if (value === "x²") {
      expression = Math.pow(parseFloat(expression));
    }
    else if (button.innerHTML.includes("fa-square-root-alt")) {
      result = Math.sqrt(parseFloat(result));
    }
    else if (value.includes("+/-") || value.includes("+/−")) {
      result = parseFloat(result) * -1;
    }
    else if (value === "%") {
      result = parseFloat(result) / 100;
    }
    else {
      result += value;
    }

    //display values from the result
    display.textContent = result;
  });
});
