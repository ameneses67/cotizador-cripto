import { resultado } from "../main";

export function mostrarAlerta(mensaje: string) {
  const existeError = document.querySelector(".alerta");

  if (!existeError) {
    const alerta = document.createElement("p");
    alerta.classList.add("text-red-400", "text-center", "alerta");
    alerta.textContent = mensaje;

    resultado.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
