import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#op-form");
const div1 = document.querySelector("#resultado1-div");
const div2 = document.querySelector("#resultado2-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div1.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
