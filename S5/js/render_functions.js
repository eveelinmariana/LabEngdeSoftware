import * as myStyles from "./styles.js";

export function renderContent() {
  const body = document.getElementsByTagName("body")[0];
  applyStyles(body, myStyles.bodyStyle);

  const content = document.getElementById("content");
  applyStyles(content, myStyles.contentStyle);
  body.appendChild(content);

  content.appendChild(createTopBar());
  content.appendChild(createTotalCount());
  content.appendChild(createAvatars());
  content.appendChild(createActionButtons());
  content.appendChild(createSpecificCounts());

  return content;
}

function createElementWithStyles(elementType, styles) {
  const element = document.createElement(elementType);

  applyStyles(element, styles);

  return element;
}

function createTopBar() {
  const div = createElementWithStyles("div", myStyles.topBar);

  const paragraph = createElementWithStyles("p", myStyles.topBarText);
  paragraph.textContent = "Total";

  const image = createElementWithStyles("img", myStyles.resetImage);
  image.src = "./imgs/resetar.png";
  image.id = "resetAll";

  div.appendChild(paragraph);
  div.appendChild(image);

  return div;
}

function createTotalCount() {
  const input = createElementWithStyles("input", myStyles.inputStyle);
  input.id = "sumTotal";

  return input;
}

function createAvatars() {
  const div = createElementWithStyles("div", myStyles.avatars);

  const homemImg = createElementWithStyles("img", myStyles.avatarImg);
  homemImg.src = "./imgs/homem.png";

  const mulherImg = createElementWithStyles("img", myStyles.avatarImg);
  mulherImg.src = "./imgs/mulher.png";

  div.appendChild(homemImg);
  div.appendChild(mulherImg);

  return div;
}

function createActionButtons() {
  const div = createElementWithStyles("div", myStyles.actionButtonArea);

  div.appendChild(createButtons("homem"));
  div.appendChild(createButtons("mulher"));

  return div;
}

function createButtons(type) {
  const div = createElementWithStyles("div", myStyles.buttonsContainer);

  const imgMais = createElementWithStyles("img", myStyles.actionImageMais);
  imgMais.src = "./imgs/mais.png";
  imgMais.id = type + "Mais";

  const imgMenos = createElementWithStyles("img", myStyles.actionImageMenos);
  imgMenos.src = "./imgs/menos.png";
  imgMenos.id = type + "Menos";

  div.appendChild(imgMais);
  div.appendChild(imgMenos);

  return div;
}

function createSpecificCounts() {
  const div = createElementWithStyles("div", myStyles.especificCountsContainer);

  const totalHomem = createCount("homem");
  const totalMulher = createCount("mulher");

  div.appendChild(totalHomem);
  div.appendChild(totalMulher);

  return div;
}

function createCount(type) {
  const div = createElementWithStyles("div", myStyles.especificCount);

  const label = createElementWithStyles("label", {});
  label.textContent =
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const input = createElementWithStyles("input", myStyles.inputStyle);
  input.id = type + "Total";

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function applyStyles(element, styles) {
  Object.assign(element.style, styles);
}
