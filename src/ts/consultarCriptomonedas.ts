import { criptoSelect } from "../main";

interface ICoinInfo {
  Name: string;
  FullName: string;
}

export function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then(
      (respuesta): Promise<{ Data: { CoinInfo: ICoinInfo }[] }> =>
        respuesta.json()
    )
    .then(
      (resultado): Promise<{ CoinInfo: ICoinInfo }[]> =>
        obtenerCriptomonedas(resultado.Data)
    )
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

// crear un promise que solamente va a resolver cuando haya descargado correctamente las criptomonedas
const obtenerCriptomonedas = (
  criptocurrency: { CoinInfo: ICoinInfo }[]
): Promise<{ CoinInfo: ICoinInfo }[]> =>
  new Promise((resolve) => {
    resolve(criptocurrency);
  });

function selectCriptomonedas(criptos: { CoinInfo: ICoinInfo }[]) {
  console.log(criptos);
  criptos.forEach((cripto) => {
    console.log(cripto);
    const { Name, FullName } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;

    criptoSelect.appendChild(option);
  });
}
