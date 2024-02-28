function convertirCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var resultadoFahrenheit = document.getElementById("resultadoFahrenheit");
  
    if (celsiusInput.value === "") {
      resultadoFahrenheit.innerHTML = "Ingrese una temperatura en Celsius.";
    } else {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;
      resultadoFahrenheit.innerHTML = celsius + " °C equivale a " + fahrenheit.toFixed(2) + " °F.";
      asignarEstiloFahrenheit(fahrenheit);
    }
  }
  
  function mostrarMensajes() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultadoCelsius = document.getElementById("resultadoCelsius");
  
    if (fahrenheitInput.value === "") {
      resultadoCelsius.innerHTML = "Ingrese una temperatura en Fahrenheit.";
    } else {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      
      resultadoCelsius.innerHTML = "En Celsius, " + fahrenheit + " °F equivale a " + celsius.toFixed(2) + " °C.";
      asignarEstiloFahrenheit(fahrenheit);
    }
  }
  
  function asignarEstiloFahrenheit(fahrenheit) {
    var body = document.body;
  
    if (fahrenheit >= 14 && fahrenheit < 32) {
      body.className = "temperatura-baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      body.className = "temperatura-adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
      body.className = "temperatura-alta";
    } else {
      body.className = "";
    }
  }
  