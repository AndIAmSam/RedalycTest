function calcularEdad() {
    const birthDay = parseInt(document.getElementById("birthDay").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value);
    const birthYear = parseInt(document.getElementById("birthYear").value);
  
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const currentDay = today.getDate();
  
    if (birthYear > currentYear || (birthYear == currentYear && birthMonth > currentMonth) || (birthYear == currentYear && birthMonth == currentMonth && birthDay > currentDay)) {
      alert("La fecha de nacimiento no puede ser en el futuro.");
      return;
    }
  
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;
  
    if (days < 0) {
      // Ajuste para días negativos
      const lastMonthDays = new Date(currentYear, currentMonth, 0).getDate();
      days += lastMonthDays;
      months--;
    }
  
    if (months < 0) {
      // Ajuste para meses negativos
      months += 12;
      years--;
    }
  
    const result = document.getElementById("result");
    result.innerHTML = `Has vivido ${years} años, ${months} meses y ${days} días.`;
  }
  