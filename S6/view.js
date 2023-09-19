import styles from './style.js';

window.onload = function pagina() {
  const calculadoraDiv = document.getElementById("calculadora");
  createCalculator(calculadoraDiv);
};

function createCalculator(container) {
  const buttons = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const calculator = document.createElement("div");
  calculator.classList.add("calculator");
  Object.assign(calculator.style, styles.calculator);

  const output = document.createElement("div");
  output.classList.add("output");
  Object.assign(output.style, styles.output);
  calculator.appendChild(output);

  let currentInput = "";

  buttons.forEach((buttonText) => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.add("button");
  
    // Verifica o texto do botão para aplicar estilos especiais
    if (buttonText === "AC" || buttonText === "%" || buttonText === "+" || buttonText === "-" || buttonText === "+/-" || buttonText ==="/" || buttonText ==='*' || buttonText === "=") {
      Object.assign(button.style, styles.specialButton);
    } else if (buttonText === "=") {
      Object.assign(button.style, styles.anotherSpecialButton);
    } else {
      Object.assign(button.style, styles.calculatorButton);
    }
  
    button.addEventListener("click", () => onButtonClick(buttonText));
    calculator.appendChild(button);
  });

  container.appendChild(calculator);

  function onButtonClick(value) {
    if (value === "AC") {
      currentInput = "";
      output.textContent = "";
    } else if (value === "+/-") {
      currentInput = eval(`(${currentInput}) * -1`);
      output.textContent = currentInput;
    } else if (value === "%") {
      currentInput = eval(`(${currentInput}) / 100`);
      output.textContent = currentInput;
    } else if (value === "=") {
      try {
        const result = eval(currentInput);
        output.textContent = result;
        currentInput = result.toString();
      } catch (error) {
        output.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      output.textContent = currentInput;
    }
  }
}
