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
