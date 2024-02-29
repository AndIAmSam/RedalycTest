// Función para manejar el envío del formulario
function enviarFormulario() {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  // Validar los campos del formulario
  var nombreValido = validarCampo(nombre, "nombreAlert", 50);
  var direccionValida = validarCampo(direccion, "direccionAlert", 50);
  var telefonoValido = validarCampo(telefono, "telefonoAlert", 10);
  var emailValido = validarEmail(email, "emailAlert");
  var mensajeValido = validarCampo(mensaje, "mensajeAlert", 150);

  // Si todos los campos son válidos, imprimir en consola y mostrar notificación
  if (
    nombreValido &&
    direccionValida &&
    telefonoValido &&
    emailValido &&
    mensajeValido
  ) {
    var datos = {
      Nombre: nombre,
      Dirección: direccion,
      Teléfono: telefono,
      "Correo Electrónico": email,
      Mensaje: mensaje,
    };

    // Imprimir los datos del formulario en la consola
    console.log(datos);
    // Mostrar una alerta al usuario
    alert("¡Formulario enviado correctamente!");
  }
}

// Función para validar un campo del formulario
function validarCampo(valor, alertId, maxLength) {
  // Obtener el elemento de alerta correspondiente al campo
  var alertElement = document.getElementById(alertId);

  // Si el campo está vacío o su longitud supera el máximo permitido, mostrar una alerta y devolver false
  if (valor.trim() === "" || valor.length > maxLength) {
    alertElement.innerHTML = "Campo inválido";
    return false;
  } else {
    // Si el campo es válido, limpiar la alerta y devolver true
    alertElement.innerHTML = "";
    return true;
  }
}

// Función para validar un correo electrónico
function validarEmail(email, alertId) {
  // Obtener el elemento de alerta correspondiente al campo de correo electrónico
  var alertElement = document.getElementById(alertId);
  // Expresión regular para validar el formato de un correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Si el correo electrónico no cumple con el formato, mostrar una alerta y devolver false
  if (!emailRegex.test(email)) {
    alertElement.innerHTML = "Correo electrónico inválido";
    return false;
  } else {
    // Si el correo electrónico es válido, limpiar la alerta y devolver true
    alertElement.innerHTML = "";
    return true;
  }
}

// Obtener el campo de entrada del nombre
let nombreInput = document.getElementById("nombre");

// Añadir un controlador de eventos al campo de entrada del nombre
nombreInput.addEventListener("input", function (e) {
  let valorInput = e.target.value;

  // Expresión regular que coincide con cualquier carácter que no sea una letra (mayúscula o minúscula)
  let regex = /[^a-zA-Z]/g;

  // Si el valor del input contiene caracteres que no son letras, los reemplaza con una cadena vacía
  if (valorInput.match(regex)) {
    e.target.value = valorInput.replace(regex, "");
  }
});

// Obtener el campo de entrada del teléfono
let telefonoInput = document.getElementById("telefono");

// Añadir un controlador de eventos al campo de entrada del teléfono
telefonoInput.addEventListener("input", function (e) {
  let valorInput = e.target.value;

  // Expresión regular que coincide con cualquier carácter que no sea un número
  let regex = /[^0-9]/g;

  // Si el valor del input contiene caracteres que no son números, los reemplaza con una cadena vacía
  if (valorInput.match(regex)) {
    e.target.value = valorInput.replace(regex, "");
  }
});
