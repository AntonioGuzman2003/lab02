function calcular() {
    var primero = parseFloat(document.getElementById("primero").value);
    var segundo = parseFloat(document.getElementById("segundo").value);
    var resultadoElemento = document.getElementById("resultado"); 

    if (primero > segundo) {
      var suma = primero + segundo;
      var diferencia = primero - segundo;

      resultadoElemento.innerHTML = "La suma es: " + suma + " y la diferencia es: " + diferencia.toFixed(2);
    } else {
      var producto = primero * segundo;
      var division = primero / segundo;

      resultadoElemento.innerHTML = "El producto es: " + producto + " y la division es: " + division.toFixed(2); 
    }
  }