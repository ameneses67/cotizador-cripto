import { objBusqueda } from "./submitFormulario";
import { mostrarCotizacion } from "./mostrarCotizacion";
import { mostrarSpinner } from "./mostrarSpinner";

interface Display {
  DISPLAY: {
    criptomoneda: {
      moneda: Moneda;
    };
    [key: string]: any;
  };
}

export interface Moneda {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  LASTUPDATE: string;
}

export async function consultarCotizacion() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  // fetch(url)
  //   .then((respuesta): Promise<Display> => respuesta.json())
  //   .then((cotizacion) => {
  //     mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
  //   });

  // async/await
  try {
    const respuesta = await fetch(url);
    const cotizacion = await respuesta.json();
    mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
  } catch (error) {
    console.log(error);
  }
}
