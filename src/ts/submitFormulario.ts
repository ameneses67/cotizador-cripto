import { consultarCotizacion } from "./consultarCotizacion";
import { mostrarAlerta } from "./mostrarAlerta";

export type ObjBusqueda = {
  moneda: string;
  criptomoneda: string;
};

export const objBusqueda: ObjBusqueda = {
  moneda: "",
  criptomoneda: "",
};

export function submitFormulario(e: Event) {
  e.preventDefault();

  // validar formulario
  const { moneda, criptomoneda } = objBusqueda;
  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  // consultar la api con los resultados de búsqueda
  consultarCotizacion();
}

export function leerValor(e: Event) {
  objBusqueda[(e.target as HTMLSelectElement).name as keyof ObjBusqueda] = (
    e.target as HTMLSelectElement
  ).value;
}
