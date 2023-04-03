import "./style.css";
import { consultarCriptomonedas } from "./ts/consultarCriptomonedas";
import { leerValor, submitFormulario } from "./ts/submitFormulario";

// selectores
export const criptoSelect = document.querySelector(
  "#criptomonedas"
) as HTMLSelectElement;
export const monedaSelect = document.querySelector(
  "#moneda"
) as HTMLSelectElement;
export const formulario = document.querySelector(
  "#formulario"
) as HTMLFormElement;
export const resultado = document.querySelector("#resultado") as HTMLDivElement;

// llenar select de criptomonedas cuando se acabe de cargar la página
document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();

  formulario.addEventListener("submit", submitFormulario);

  criptoSelect.addEventListener("change", leerValor);
  monedaSelect.addEventListener("change", leerValor);
});
