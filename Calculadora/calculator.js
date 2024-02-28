function sumar() {
  realizarOperacion("+");
}

function restar() {
  realizarOperacion("-");
}

function multiplicar() {
  realizarOperacion("*");
}

function dividir() {
  realizarOperacion("/");
}

function realizarOperacion(operador) {
  var num1 = parseFloat(document.getElementById("input1").value);
  var num2 = parseFloat(document.getElementById("input2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }

  var resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        alert("No se puede dividir por cero.");
        return;
      }
      break;
    default:
      alert("Operación no válida");
      return;
  }

  document.getElementById("resultado").value = resultado;
  document.getElementById("operation").innerText = operador;
}
