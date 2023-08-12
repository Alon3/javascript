function arqueo(encargado, horaInicio) {
  do {
    var saldoInicial = parseInt(prompt("Saldo inicial:"));
  } while (isNaN(saldoInicial));
  console.log(saldoInicial);
  mostrarMensaje(saldoInicial);

  do {
    var deTesoreria = parseInt(prompt("De Tesoreria:"));
  } while (isNaN(deTesoreria));
  console.log(deTesoreria);
  mostrarMensaje(deTesoreria);

  do {
    var deBanco = parseInt(prompt("De Banco:"));
  } while (isNaN(deBanco));
  console.log(deBanco);
  mostrarMensaje(deBanco);

  totalVentas = ventas();
  controlEfectivo = billetes();

  var horaFinal = new Date();

  var arqueo =
    controlEfectivo - saldoInicial - deTesoreria - deBanco - totalVentas;

  if (arqueo === 0) {
    console.log("El resultado de su arqueo es 0 :" + arqueo);
    mostrarMensaje("El resultado de su arqueo es 0 :" + arqueo);
  } else if (arqueo >= 0) {
    console.log("El resultado de su arqueo es mayor a 0 :" + arqueo);
    mostrarMensaje("El resultado de su arqueo es mayor a 0 :" + arqueo);
  } else {
    console.log("El resultado de su arqueo es menor a 0 :" + arqueo);
    mostrarMensaje("El resultado de su arqueo es menor a 0 :" + arqueo);

    reiniciar = parseInt(
      prompt("Su saldo fue negativo, deseea rehacer su arqueo? 1 - SI , 2 - NO")
    );

    if (reiniciar === 1) {
      iniciar();
    } else {
      console.log("Caja finalizada");
      mostrarMensaje("Caja finalizada");
    }

    console.log(
      "El encargado " +
        encargado +
        " ha iniciado su arqueo a las " +
        horaInicio +
        " y finalizo a las: " +
        horaFinal
    );
  }

  mostrarMensaje(
    "El encargado " +
      encargado +
      " ha iniciado su arqueo a las " +
      horaInicio +
      " y finalizo a las: " +
      horaFinal
  );
}
