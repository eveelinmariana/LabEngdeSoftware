import { renderContent } from "./render_functions.js";
import { setDefaultValues } from "./utils.js";

let total = 0;
let totalHomem = 0;
let totalMulher = 0;

window.onload = function start() {
  renderContent();
  setDefaultValues();
  addEventListeners();
};

function addEventListeners() {
  document.getElementById("resetAll").addEventListener("click", handleReset);

  document
    .getElementById("homemMais")
    .addEventListener("click", () => handleMaisOuMenos("homem", "mais"));
  document
    .getElementById("mulherMais")
    .addEventListener("click", () => handleMaisOuMenos("mulher", "mais"));
  document
    .getElementById("homemMenos")
    .addEventListener("click", () => handleMaisOuMenos("homem", "menos"));
  document
    .getElementById("mulherMenos")
    .addEventListener("click", () => handleMaisOuMenos("mulher", "menos"));
}

function handleReset() {
  setDefaultValues();

  total = 0;
  totalHomem = 0;
  totalMulher = 0;

  attValues();
}

function handleMaisOuMenos(gender, operation) {
  if (operation === "mais" || (total > 0 && operation === "menos")) {
    total += operation === "mais" ? 1 : -1;

    if (gender === "homem") {
      totalHomem += operation === "mais" ? 1 : -1;
    } else if (gender === "mulher") {
      totalMulher += operation === "mais" ? 1 : -1;
    }

    attValues();
  }
}

function attValues() {
  const inputTotal = document.getElementById("sumTotal");
  const homemTotal = document.getElementById("homemTotal");
  const mulherTotal = document.getElementById("mulherTotal");

  inputTotal.value = total;
  homemTotal.value = totalHomem;
  mulherTotal.value = totalMulher;
}
