function login() {
  console.log("Programa Iniciado");
  mostrarMensaje("Programa Iniciado");

  var encargadoID = parseInt(document.getElementById("encargadoInput").value);
  console.log(encargadoID);
  var contraseñaencargado1 = "01234";
  var contraseñaencargado2 = "56789";

  switch (encargadoID) {
    case 1:
      console.log("Ha elegido el encargado " + encargadoID);
      mostrarMensaje("Ha elegido el encargado " + encargadoID);
      var encargado = "Alejandro";
      var contraseña = document.getElementById("contraseñaInput").value;
      if (contraseña === contraseñaencargado1) {
        mostrarMensaje(
          "Bienvenido Alejandro, puede realizar el arqueo de su caja."
        );
        var horaInicio = new Date();
        arqueo(encargado, horaInicio);
      } else {
        mostrarMensaje("Contraseña incorrecta!");
      }
      break;
    case 2:
      console.log("Ha elegido el encargado " + encargadoID);
      mostrarMensaje("Ha elegido el encargado " + encargadoID);
      var contraseña = document.getElementById("contraseñaInput").value;
      if (contraseña === contraseñaencargado2) {
        mostrarMensaje(
          "Bienvenido Nicolas, puede realizar el arqueo de su caja."
        );
        var encargado = "Nicolas";
        var horaInicio = new Date();
        arqueo(encargado, horaInicio);
      } else {
        mostrarMensaje("Contraseña incorrecta!");
      }
      break;
    default:
      console.log("No ha elegido ningún encargado");
      mostrarMensaje("No ha elegido ningún encargado");
  }
}
