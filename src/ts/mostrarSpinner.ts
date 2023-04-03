import { resultado } from "../main";
import { limpiarHTML } from "./limpiarHTML";

export function mostrarSpinner() {
  limpiarHTML(resultado);

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  `;

  resultado.appendChild(spinner);
}
