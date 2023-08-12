function guardarEnLocalStorage(encargado, horaInicio) {
  var inicioSesion = {
    encargado: encargado,
    horaInicio: horaInicio.getTime(),
  };

  localStorage.setItem("inicioSesion", JSON.stringify(inicioSesion));
}

function mostrarMensaje(mensaje) {
  var mensajes = "";
  mensajes += mensaje + "<br>";

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = mensajes;
}

function login() {
  var contraseñaEncargado1 = "01234";
  var contraseñaEncargado2 = "56789";
  var encargadoID = document.getElementById("encargadoInput").value;
  var contraseña = document.getElementById("contraseñaInput").value;

  if (contraseña === "") {
    contraseñaError.textContent = "La contraseña no puede estar vacia";
  } else {
    if (encargadoID === "Alejandro") {
      var encargado = "Alejandro";

      if (contraseña === contraseñaEncargado1) {
        contraseñaError.textContent = "";
        Swal.fire({
          icon: "success",
          title: "Inicio de sesion exitoso",
          text:
            "Bienvenido " +
            encargado +
            ", puede realizar el arqueo de su caja.",
        });
        horaInicio = new Date();
        guardarEnLocalStorage(encargado, horaInicio);

        var arqueoSectionDiv = document.getElementById("arqueoSection");
        arqueoSectionDiv.classList.remove("hidden");

        loginSection.style.display = "none";
      } else {
        contraseñaError.textContent = "La contraseña es incorrecta";
      }
    } else if (encargadoID === "Nicolas") {
      encargado = "Nicolas";

      if (contraseña === contraseñaEncargado2) {
        contraseñaError.textContent = "";
        Swal.fire({
          icon: "success",
          title: "Inicio de sesion exitoso",
          text:
            "Bienvenido " +
            encargado +
            ", puede realizar el arqueo de su caja.",
        });

        horaInicio = new Date();
        guardarEnLocalStorage(encargado, horaInicio);
        var arqueoSectionDiv = document.getElementById("arqueoSection");
        arqueoSectionDiv.classList.remove("hidden");

        loginSection.style.display = "none";
      } else {
        contraseñaError.textContent = "La contraseña es incorrecta";
      }
    }
  }
}

function arqueo() {
  var storedData = localStorage.getItem("inicioSesion");

  if (storedData) {
    var inicioSesion = JSON.parse(storedData);
    encargado = inicioSesion.encargado;
  }

  var horaFinal = new Date();

  var saldoInicial = parseInt(
    document.getElementById("saldoInicialInput").value
  );
  var deTesoreria = parseInt(document.getElementById("deTesoreriaInput").value);
  var deBanco = parseInt(document.getElementById("deBancoInput").value);

  var ventaSalon = parseInt(document.getElementById("ventaSalon").value);
  var ventaVereda = parseInt(document.getElementById("ventaVereda").value);
  var ventaDelivery = parseInt(document.getElementById("ventaDelivery").value);
  var ventaMostrador = parseInt(
    document.getElementById("ventaMostrador").value
  );
  var ventaPedidosYa = parseInt(
    document.getElementById("ventaPedidosYa").value
  );
  var descuentosVenta = parseInt(
    document.getElementById("descuentosVenta").value
  );

  var totalVentas =
    ventaSalon +
    ventaVereda +
    ventaDelivery +
    ventaMostrador +
    ventaPedidosYa -
    descuentosVenta;

  var billetes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000];

  var controlEfectivo = billetes.reduce(function (total, valor) {
    return total + parseInt(document.getElementById("billete" + valor).value);
  }, 0);

  var storedData = localStorage.getItem("inicioSesion");

  if (storedData) {
    var inicioSesion = JSON.parse(storedData);
    var encargado = inicioSesion.encargado;

    var arqueo = controlEfectivo - saldoInicial - totalVentas;

    if (arqueo === 0) {
      Swal.fire({
        icon: "info",
        title: "Resultado de arqueo",
        text: "El resultado de su arqueo es 0: " + arqueo,
      });
    } else if (arqueo >= 0) {
      Swal.fire({
        icon: "success",
        title: "Resultado de arqueo",
        text: "El resultado de su arqueo es mayor a 0: " + arqueo,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Resultado de arqueo",
        text: "El resultado de su arqueo es menor a 0: " + arqueo,
      });
    }

    var arqueoPopup = createArqueoPopup(
      encargado,
      arqueo,
      saldoInicial,
      totalVentas,
      controlEfectivo
    );
    Swal.fire(arqueoPopup).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });

    var historialArqueos =
      JSON.parse(localStorage.getItem("historialArqueos")) || [];

    var nuevoArqueo = {
      fecha: new Date().toLocaleString(),
      encargado: encargado,
      saldoInicial: saldoInicial,
      deTesoreria: deTesoreria,
      deBanco: deBanco,
      ventas: {
        salon: ventaSalon,
        vereda: ventaVereda,
        delivery: ventaDelivery,
        mostrador: ventaMostrador,
        pedidosYa: ventaPedidosYa,
        descuentos: descuentosVenta,
      },
      conteoBilletes: controlEfectivo,
      arqueo: arqueo,
    };

    historialArqueos.push(nuevoArqueo);

    localStorage.setItem("historialArqueos", JSON.stringify(historialArqueos));
  }
}

function mostrarHistorial() {
  var historialArqueos =
    JSON.parse(localStorage.getItem("historialArqueos")) || [];

  if (historialArqueos.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Historial de Arqueos",
      text: "No hay arqueos registrados en el historial.",
    });
    return;
  }

  Swal.fire({
    title: "Seleccione un arqueo para ver detalles:",
    input: "select",
    inputOptions: createArqueoOptions(historialArqueos),
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Ver Detalles",
  }).then((result) => {
    if (result.isConfirmed) {
      const selectedArqueo = historialArqueos[result.value];
      showArqueoDetails(selectedArqueo);
    }
  });
}

function createArqueoOptions(historialArqueos) {
  const options = {};
  historialArqueos.forEach((arqueo, index) => {
    options[index] = `${arqueo.fecha} - ${arqueo.encargado}`;
  });
  return options;
}

function showArqueoDetails(arqueo) {
  const detalles = `
    Fecha: ${arqueo.fecha}
    Encargado: ${arqueo.encargado}
    Saldo Inicial: ${arqueo.saldoInicial}
    De Tesorería: ${arqueo.deTesoreria}
    De Banco: ${arqueo.deBanco}
    Ventas:
      - Salón: ${arqueo.ventas.salon}
      - Vereda: ${arqueo.ventas.vereda}
      - Delivery: ${arqueo.ventas.delivery}
      - Mostrador: ${arqueo.ventas.mostrador}
      - PedidosYa: ${arqueo.ventas.pedidosYa}
      - Descuentos: ${arqueo.ventas.descuentos}
    Total Ventas: ${getTotalVentas(arqueo.ventas)}
    Efectivo Total: ${arqueo.conteoBilletes}
    Resultado de Arqueo: ${arqueo.arqueo}
  `;

  Swal.fire({
    title: "Detalles del Arqueo",
    text: detalles,
    confirmButtonText: "Cerrar",
  });
}

function getTotalVentas(ventas) {
  return (
    ventas.salon +
    ventas.vereda +
    ventas.delivery +
    ventas.mostrador +
    ventas.pedidosYa -
    ventas.descuentos
  );
}

function eliminarHistorialPrompt() {
  Swal.fire({
    title: "Ingrese la contraseña de administrador",
    input: "password",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    showLoaderOnConfirm: true,
    preConfirm: (password) => {
      if (password === "1234") {
        eliminarHistorial();
      } else {
        Swal.fire(
          "Contraseña incorrecta",
          "La contraseña de administrador es incorrecta.",
          "error"
        );
      }
    },
  });
}

function eliminarHistorial() {
  localStorage.removeItem("historialArqueos");
  Swal.fire(
    "Historial eliminado",
    "El historial de arqueos ha sido eliminado.",
    "success"
  );
}

function obtenerHistorial() {
  var historialArqueos =
    JSON.parse(localStorage.getItem("historialArqueos")) || [];

  return historialArqueos;
}

function createArqueoPopup(
  encargado,
  arqueo,
  saldoInicial,
  totalVentas,
  controlEfectivo
) {
  return {
    title: "Resultado de Arqueo",
    html: `
      <p>Encargado: ${encargado}</p>
      <p>Saldo Inicial: ${saldoInicial}</p>
      <p>Total Ventas: ${totalVentas}</p>
      <p>Control de Efectivo: ${controlEfectivo}</p>
      <p>Resultado de Arqueo: ${arqueo}</p>
    `,
    icon: arqueo === 0 ? "info" : arqueo > 0 ? "success" : "error",
    confirmButtonText: "Cerrar",
  };
}
