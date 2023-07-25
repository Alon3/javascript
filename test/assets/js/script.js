function arqueo() {
  var encargadoID = parseInt(document.getElementById("encargadoID").value);
  var contrasena = document.getElementById("contrasena").value;

  var contrasenaencargado1 = "01234";
  var contrasenaencargado2 = "56789";

  var encargado, horaInicio;
  var saldoInicial, deTesoreria, deBanco;
  var totalVentas, controlEfectivo;
  var horaFinal, arqueo;

  switch (encargadoID) {
    case 1:
      encargado = "Alejandro";
      if (contrasena === contrasenaencargado1) {
        horaInicio = new Date();
        mostrarMensaje(
          "Bienvenido Alejandro, puede realizar el arqueo de su caja."
        );
        mostrarMensaje("-------------------------");
        ingresarValores();
      } else {
        mostrarAlerta("Contraseña incorrecta!");
        reiniciar();
      }
      break;
    case 2:
      encargado = "Nicolas";
      if (contrasena === contrasenaencargado2) {
        horaInicio = new Date();
        mostrarMensaje(
          "Bienvenido Nicolas, puede realizar el arqueo de su caja."
        );
        mostrarMensaje("-------------------------");
        ingresarValores();
      } else {
        mostrarAlerta("Contraseña incorrecta!");
        reiniciar();
      }
      break;
    default:
      mostrarMensaje("No ha elegido ningún encargado");
  }

  function ingresarValores() {
    mostrarInput("saldoInicial", "Saldo inicial:");
    mostrarInput("deTesoreria", "De Tesoreria:");
    mostrarInput("deBanco", "De Banco:");
    mostrarBoton("Continuar", calcularArqueo);
  }

  function calcularArqueo() {
    saldoInicial = parseInt(document.getElementById("saldoInicial").value);
    deTesoreria = parseInt(document.getElementById("deTesoreria").value);
    deBanco = parseInt(document.getElementById("deBanco").value);

    totalVentas = ventas();
    controlEfectivo = billetes();

    horaFinal = new Date();

    arqueo =
      controlEfectivo - saldoInicial - deTesoreria - deBanco - totalVentas;

    mostrarResultado(
      "El resultado de su arqueo es: " + arqueo,
      "Encargado: " +
        encargado +
        "<br>Hora de inicio: " +
        horaInicio +
        "<br>Hora de finalización: " +
        horaFinal
    );

    if (arqueo < 0) {
      mostrarAlerta("El saldo fue negativo");
      reiniciar();
    }
  }
}

function ventas() {
  var ventaSalon = parseInt(document.getElementById("ventaSalon").value);
  var ventaVereda = parseInt(document.getElementById("ventaVereda").value);
  var ventaMostrador = parseInt(
    document.getElementById("ventaMostrador").value
  );
  var ventaDelivery = parseInt(document.getElementById("ventaDelivery").value);
  var ventaPedidoYa = parseInt(document.getElementById("ventaPedidoYa").value);

  var descSalonVereda = 0;
  var descDeliveryMostrador = 0;
  var descPedidoYa = 0;

  var totalVentas =
    ventaSalon +
    ventaVereda +
    ventaMostrador +
    ventaDelivery +
    ventaPedidoYa +
    descSalonVereda +
    descDeliveryMostrador +
    descPedidoYa;

  return totalVentas;
}

function billetes() {
  var valoresBilletes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000];
  var billetes = {};
  var controlEfectivo = 0;

  valoresBilletes.forEach(function (billete) {
    var cantidad = parseInt(document.getElementById("billete" + billete).value);
    billetes[billete] = cantidad;
    controlEfectivo += billete * cantidad;
  });

  return controlEfectivo;
}

function mostrarMensaje(mensaje) {
  var resultadoDiv = document.getElementById("resultado");
  var p = document.createElement("p");
  p.innerText = mensaje;
  resultadoDiv.appendChild(p);
}

function mostrarAlerta(mensaje) {
  var resultadoDiv = document.getElementById("resultado");
  var p = document.createElement("p");
  p.innerText = mensaje;
  p.style.color = "red";
  resultadoDiv.appendChild(p);
}

function mostrarInput(id, label) {
  var resultadoDiv = document.getElementById("resultado");
  var inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", id);
  inputLabel.innerText = label;
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", id);
  resultadoDiv.appendChild(inputLabel);
  resultadoDiv.appendChild(input);
}

function mostrarBoton(label, onclick) {
  var resultadoDiv = document.getElementById("resultado");
  var boton = document.createElement("input");
  boton.setAttribute("type", "submit");
  boton.setAttribute("value", label);
  boton.onclick = onclick;
  resultadoDiv.appendChild(boton);
}

function mostrarResultado(mensaje, detalles) {
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";
  var p = document.createElement("p");
  p.innerHTML = mensaje;
  resultadoDiv.appendChild(p);
  if (detalles) {
    var detallesP = document.createElement("p");
    detallesP.innerHTML = detalles;
    resultadoDiv.appendChild(detallesP);
  }
}

function reiniciar() {
  var arqueoForm = document.getElementById("arqueoForm");
  arqueoForm.reset();
}
