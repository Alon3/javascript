function iniciar() {
  document.write("<h2>Programa Iniciado</h2>");

  encargadoID = parseInt(prompt("Ingrese encargado 1 - Ale o 2 - Nico):"));
  contraseñaencargado1 = "01234";
  contraseñaencargado2 = "56789";

  switch (encargadoID) {
    case 1:
      document.write("<p>Ha elegido el encargado " + encargadoID + "</p>");
      var encargado = "Alejandro";
      contraseña = prompt("Ingrese contraseña:");
      if (contraseña == contraseñaencargado1) {
        document.write(
          "<p>Bienvenido Alejandro, puede realizar el arqueo de su caja.</p>"
        );
        document.write("<hr>");
        var horaInicio = new Date();
        arqueo(encargado, horaInicio);
      } else {
        alert("Contraseña incorrecta!");
        iniciar();
      }
      break;
    case 2:
      document.write("<p>Ha elegido el encargado " + encargadoID + "</p>");
      contraseña = prompt("Ingrese contraseña:");
      if (contraseña == contraseñaencargado2) {
        document.write(
          "<p>Bienvenido Nicolas, puede realizar el arqueo de su caja.</p>"
        );
        document.write("<hr>");
        var encargado = "Nicolas";
        var horaInicio = new Date();
        arqueo(encargado, horaInicio);
      } else {
        alert("Contraseña incorrecta!");
        iniciar();
      }
      break;
    default:
      document.write("<p>No ha elegido ningún encargado</p>");
  }
}

function arqueo(encargado, horaInicio) {
  do {
    var saldoInicial = parseInt(prompt("Saldo inicial:"));
  } while (isNaN(saldoInicial));
  document.write("<p>Saldo inicial: " + saldoInicial + "</p>");

  do {
    var deTesoreria = parseInt(prompt("De Tesoreria:"));
  } while (isNaN(deTesoreria));
  document.write("<p>De Tesoreria: " + deTesoreria + "</p>");

  do {
    var deBanco = parseInt(prompt("De Banco:"));
  } while (isNaN(deBanco));
  document.write("<p>De Banco: " + deBanco + "</p>");

  totalVentas = ventas();
  controlEfectivo = billetes();

  var horaFinal = new Date();

  var arqueo =
    controlEfectivo - saldoInicial - deTesoreria - deBanco - totalVentas;

  if (arqueo === 0) {
    document.write("<p>El resultado de su arqueo es 0 :" + arqueo + "</p>");
  } else if (arqueo >= 0) {
    document.write(
      "<p>El resultado de su arqueo es mayor a 0 :" + arqueo + "</p>"
    );
  } else {
    document.write(
      "<p>El resultado de su arqueo es menor a 0 :" + arqueo + "</p>"
    );

    reiniciar = parseInt(
      prompt("Su saldo fue negativo, ¿desea rehacer su arqueo? 1 - SI , 2 - NO")
    );

    if (reiniciar === 1) {
      iniciar();
    } else {
      document.write("<p>Caja finalizada</p>");
    }

    document.write(
      "<p>El encargado " +
        encargado +
        " ha iniciado su arqueo a las " +
        horaInicio +
        " y finalizo a las: " +
        horaFinal +
        "</p>"
    );
  }
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

  document.write("<p>Total efectivo: " + controlEfectivo + "</p>");

  var rehacer = prompt("¿Desea modificar algún valor? Escriba SI");
  while (rehacer.toUpperCase() === "SI") {
    var valor = prompt("Ingrese el valor del billete a modificar");
    console.log(valor);

    var indiceBillete = valoresBilletes.indexOf(parseInt(valor));
    console.log(indiceBillete);

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
        document.write("<p>Valor del billete modificado exitosamente</p>");
      } else {
        document.write("<p>La cantidad ingresada no es válida</p>");
      }
    } else {
      document.write("<p>El valor del billete no se encontró en la lista</p>");
    }

    document.write("<p>Arqueo de billetes:</p>");
    for (var billete in billetes) {
      document.write(
        "<p>Billete de " + billete + ": " + billetes[billete] + "</p>"
      );
    }

    rehacer = prompt("¿Desea modificar algún otro valor? Escriba SI");
  }

  return controlEfectivo;
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

  document.write("<p>Total Ventas: " + totalVentas + "</p>");
  return totalVentas;
}
