function iniciar() {
  console.log("Programa Iniciado");

  do {
    var saldoInicial = parseInt(prompt("Saldo inicial:"));
  } while (isNaN(saldoInicial));
  console.log(saldoInicial);

  do {
    var deTesoreria = parseInt(prompt("De Tesoreria:"));
  } while (isNaN(deTesoreria));
  console.log(deTesoreria);

  do {
    var deBanco = parseInt(prompt("De Banco:"));
  } while (isNaN(deBanco));
  console.log(deBanco);

  totalVentas = ventas();
  controlEfectivo = billetes();

  var arqueo =
    saldoInicial + deTesoreria + deBanco + totalVentas - controlEfectivo;

  console.log(arqueo);
}

function ventas() {
  do {
    var ventaSalon = parseInt(prompt("Ventas SALON:"));
  } while (isNaN(ventaSalon));

  do {
    var ventaVereda = parseInt(prompt("Ventas Vereda:"));
  } while (isNaN(ventaVereda));

  do {
    var ventaMostrador = parseInt(prompt("Ventas Mostrador"));
  } while (isNaN(ventaMostrador));

  do {
    var ventaDelivery = parseInt(prompt("Venta Delivery"));
  } while (isNaN(ventaDelivery));

  do {
    var ventaPedidoYa = parseInt(prompt("Venta PedidosYa"));
  } while (isNaN(ventaPedidoYa));

  do {
    var descSalonVereda = 0;
  } while (isNaN(descSalonVereda));

  do {
    var descDeliveryMostrador = 0;
  } while (isNaN(descDeliveryMostrador));

  do {
    var descPedidoYa = 0;
  } while (isNaN(descPedidoYa));

  var totalVentas =
    ventaSalon +
    ventaVereda +
    ventaMostrador +
    ventaDelivery +
    ventaPedidoYa +
    descSalonVereda +
    descDeliveryMostrador +
    descPedidoYa;

  console.log(totalVentas);
  return totalVentas;
}

function billetes() {
  do {
    var unPeso = parseInt(prompt("Ingrese cantidad de 1$"));
  } while (isNaN(unPeso));
  var totalUnPeso = unPeso * 1;

  do {
    var dosPesos = parseInt(prompt("Ingrese cantidad de 2$"));
  } while (isNaN(dosPesos));
  var totalDosPesos = dosPesos * 2;

  do {
    var cincoPesos = parseInt(prompt("Ingrese cantidad de 5$"));
  } while (isNaN(cincoPesos));
  var totalCincoPesos = cincoPesos * 5;

  do {
    var diezPesos = parseInt(prompt("Ingrese cantidad de 10$"));
  } while (isNaN(diezPesos));
  var totalDiezPesos = diezPesos * 10;

  do {
    var veintePesos = parseInt(prompt("Ingrese cantidad de 20$"));
  } while (isNaN(veintePesos));
  var totalVeintePesos = veintePesos * 20;

  do {
    var cincuentaPesos = parseInt(prompt("Ingrese cantidad de 50$"));
  } while (isNaN(cincuentaPesos));
  var totalCincuentaPesos = cincuentaPesos * 50;

  do {
    var cienPesos = parseInt(prompt("Ingrese cantidad de 100$"));
  } while (isNaN(cienPesos));
  var totalCienPesos = cienPesos * 100;

  do {
    var doscientosPesos = parseInt(prompt("Ingrese cantidad de 200$"));
  } while (isNaN(parseInt(doscientosPesos)));
  var totalDoscientosPesos = doscientosPesos * 200;

  do {
    var quinientosPesos = parseInt(prompt("Ingrese cantidad de 500$"));
  } while (isNaN(quinientosPesos));
  var totalQuinientosPesos = quinientosPesos * 500;

  do {
    var milPesos = parseInt(prompt("Ingrese cantidad de 1000$"));
  } while (isNaN(milPesos));
  var totalMilPesos = milPesos * 1000;

  do {
    var dosMilPesos = parseInt(prompt("Ingrese cantidad de 2000$"));
  } while (isNaN(dosMilPesos));
  var totalDosMilPesos = dosMilPesos * 2000;

  console.log(totalUnPeso);
  console.log(totalDosPesos);
  console.log(totalCincoPesos);
  console.log(totalDiezPesos);
  console.log(totalVeintePesos);
  console.log(totalCincuentaPesos);
  console.log(totalCienPesos);
  console.log(totalDoscientosPesos);
  console.log(totalQuinientosPesos);
  console.log(totalMilPesos);
  console.log(totalDosMilPesos);

  var controlEfectivo =
    totalUnPeso +
    totalDosPesos +
    totalCincoPesos +
    totalDiezPesos +
    totalVeintePesos +
    totalCincuentaPesos +
    totalCienPesos +
    totalDoscientosPesos +
    totalQuinientosPesos +
    totalMilPesos +
    totalDosMilPesos;

  console.log("total efectivo " + controlEfectivo);
  return controlEfectivo;
}
