// Este es un módulo de JavaScript que se carga bajo demanda. Puede exportar cualquier número de
// funciones y puede importar otros módulos de JavaScript si es necesario.

export function cambiarAtributoHtml(atributo, nuevoValor) {
   document.documentElement.setAttribute(atributo, nuevoValor);
}

export function getElementClassById(id) {
   const element = document.getElementById(id);
   return element ? element.className : null;
}
