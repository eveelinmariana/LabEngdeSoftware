export function setDefaultValues() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "0";
  });
}
