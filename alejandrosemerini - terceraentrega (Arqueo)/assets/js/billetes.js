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
