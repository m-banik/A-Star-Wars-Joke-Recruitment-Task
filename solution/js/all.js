const audio = new Audio("../zadanie/imperial_march.mp3");
const btnHandler = e => {
  const inputs = document.querySelectorAll("input:checked");
  if (inputs[0].id !== "checkbox_yoda") {
    e.preventDefault();
    audio.load();
    audio.play();
  }
};

const mainFunction = () => {
  const btn = document.querySelector("button");
  const labels = document.querySelectorAll("label");
  const lis = document.querySelectorAll("li");
  btn.addEventListener("click", btnHandler);
  labels.forEach((label, index) => {
    const paragraph = document.createElement("p");
    paragraph.innerText = label.getAttribute("data-sentence");
    lis[index].appendChild(paragraph);
  });
};
window.onload = mainFunction;
