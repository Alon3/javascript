function mostrarMensaje(mensaje) {
  var mensajes = "";
  mensajes += mensaje + "<br>";

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = mensajes;
}
