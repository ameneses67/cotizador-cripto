export function limpiarHTML(element: HTMLElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
