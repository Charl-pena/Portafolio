window.cambiarAtributoHtml = function(nombreAtributo, nuevoValor) {
   document.documentElement.setAttribute(nombreAtributo, nuevoValor);
};

window.getElementClassById = function(id) {
   var element = document.getElementById(id);
   return element ? element.className : null;
};

window.getMaxHeight = function() {
   return document.documentElement.scrollHeight;
 };