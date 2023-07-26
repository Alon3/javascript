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
function billetes() {
  const valoresBilletes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000];
  const billetes = {};
  var controlEfectivo = 0;

  valoresBilletes.forEach((billete) => {
    do {
      var cantidad = parseInt(
        prompt("Ingrese la cantidad de billetes de " + billete)
      );
    } while (isNaN(cantidad) || cantidad < 0);

    billetes[billete] = cantidad;
    controlEfectivo += billete * cantidad;
  });

  console.log("Total efectivo: " + controlEfectivo);
  mostrarMensaje("Total efectivo: " + controlEfectivo);

  var rehacer = prompt("¿Desea modificar algún valor? Escriba SI");
  while (rehacer.toUpperCase() === "SI") {
    var valor = prompt("Ingrese el valor del billete a modificar");
    console.log(valor);
    mostrarMensaje(valor);

    var indiceBillete = valoresBilletes.indexOf(parseInt(valor));
    console.log(indiceBillete);
    mostrarMensaje(indiceBillete);

    if (indiceBillete !== -1) {
      var cantidad = parseInt(
        prompt(
          "Ingrese la cantidad de billetes de " + valoresBilletes[indiceBillete]
        )
      );

      if (!isNaN(cantidad) && cantidad > 0) {
        billetes[valoresBilletes[indiceBillete]] = cantidad;
        controlEfectivo +=
          (valoresBilletes[indiceBillete] -
            billetes[valoresBilletes[indiceBillete]]) *
          cantidad;
        console.log("Valor del billete modificado exitosamente");
        mostrarMensaje("Valor del billete modificado exitosamente");
      } else {
        console.log("La cantidad ingresada no es válida");
        mostrarMensaje("La cantidad ingresada no es válida");
      }
    } else {
      console.log("El valor del billete no se encontró en la lista");
      mostrarMensaje("El valor del billete no se encontró en la lista");
    }

    console.log("Arqueo de billetes:");
    mostrarMensaje("Arqueo de billetes:");
    for (var billete in billetes) {
      console.log("Billete de " + billete + ": " + billetes[billete]);
      mostrarMensaje("Billete de " + billete + ": " + billetes[billete]);
    }

    rehacer = prompt("¿Desea modificar algún otro valor? Escriba SI");
  }

  return controlEfectivo;
}

function iniciar() {
  console.log("Programa Iniciado");
  mostrarMensaje("Programa Iniciado");

  var encargadoID = parseInt(document.getElementById("encargadoInput").value);
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

function mostrarMensaje(mensaje) {
  var mensajes = "";
  mensajes += mensaje + "<br>";

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = mensajes;
}
function ventas() {
  const ventasItems = [
    "SALON",
    "VEREDA",
    "MOSTRADOR",
    "DELIVERY",
    "PEDIDOSYA",
    "DESCUENTOS",
  ];

  const ventasTotales = {};

  ventasItems.forEach((item) => {
    do {
      var venta = parseInt(prompt("Ventas " + item + ":"));
    } while (isNaN(venta));

    ventasTotales[item] = venta;
  });

  const totalVentas =
    ventasTotales.SALON +
    ventasTotales.VEREDA +
    ventasTotales.MOSTRADOR +
    ventasTotales.DELIVERY +
    ventasTotales.PEDIDOSYA -
    ventasTotales.DESCUENTOS;

  console.log(totalVentas);
  mostrarMensaje(totalVentas);
  return totalVentas;
}
