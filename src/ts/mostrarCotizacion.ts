import { resultado } from "../main";
import { Moneda } from "./consultarCotizacion";
import { limpiarHTML } from "./limpiarHTML";

export function mostrarCotizacion(cotizar: Moneda) {
  limpiarHTML(resultado);

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizar;

  const precio = document.createElement("p");
  precio.classList.add("text-2xl", "mb-2");
  precio.innerHTML = `Precio: <span class="font-bold">${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `Precio más alto: <span class="font-bold">${HIGHDAY}</span>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `Precio más bajo: <span class="font-bold">${LOWDAY}</span>`;

  const variacion = document.createElement("p");
  variacion.innerHTML = `Variación últimas 24 hrs: <span class="font-bold">${CHANGEPCT24HOUR}%</span>`;

  const ultimaActualizacion = document.createElement("p");
  ultimaActualizacion.innerHTML = `Ultima actualización: <span class="font-bold">${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(variacion);
  resultado.appendChild(ultimaActualizacion);
}
