let screen = document.querySelector(".screen");
let expression = "";

function buttonClick(value) {
  if (value === "C") {
    expression = "";
    screen.value = "";
  } else if (value === "CE") {
    expression = expression.slice(0, -1);
    screen.value = expression;
  } else if (value === "=") {
    try {
      screen.value = eval(expression);
      expression = screen.value;
    } catch {
      screen.value = "Error";
      expression = "";
    }
  } else {
    expression += value;
    screen.value = expression;
  }
}
