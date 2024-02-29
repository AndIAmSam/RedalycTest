let displayValue = "0";
let currentOperation = null;
let currentValue = null;

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number.toString();
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function setOperation(operation) {
  if (currentValue !== null) {
    calculate();
  }
  currentOperation = operation;
  currentValue = parseFloat(displayValue);
  displayValue = " ";
  function setOperation(operation) {
    if (currentValue !== null) {
      calculate();
    }
    currentOperation = operation;
    currentValue = parseFloat(displayValue);
    // No limpiar displayValue aquí
  }

  function calculate() {
    if (currentValue === null || currentOperation === null) {
      return;
    }
    const newValue = parseFloat(displayValue);
    switch (currentOperation) {
      case '+':
        currentValue += newValue;
        break;
      case '-':
        // Continúa con el resto de tus operaciones
    }
    // Actualiza displayValue con el resultado
    displayValue = currentValue.toString();
    // Limpia currentValue y currentOperation
    currentValue = null;
    currentOperation = null;
    updateDisplay();
  }updateDisplay();
}

function calculate() {
  if (currentValue === null || currentOperation === null) {
    return;
  }
  const newValue = parseFloat(displayValue);
  switch (currentOperation) {
    case '+':
      currentValue += newValue;
      break;
    case '-':
      currentValue -= newValue;
      break;
    case '*':
      currentValue *= newValue;
      break;
    case '/':
      if (newValue !== 0) {
        currentValue /= newValue;
      } else {
        alert("No se puede dividir por cero.");
        clearAll();
        return;
      }
      break;
    default:
      return;
  }
  displayValue = currentValue.toString();
  currentOperation = null;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  currentOperation = null;
  currentValue = null;
  updateDisplay();
}

function clearAll() {
  clearDisplay();
}

function updateDisplay() {
  document.getElementById("resultado").value = displayValue;
}
