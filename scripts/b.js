function mostrar() {
  var primero = parseInt(document.getElementById("primero").value);
  var segundo = parseInt(document.getElementById("segundo").value);
  var tercero = parseInt(document.getElementById("tercero").value);
  var cuarto = parseInt(document.getElementById("cuarto").value);

  var suma = primero + segundo;

  var producto = tercero * cuarto;

  document.getElementById("resultado").textContent = "La suma  es: " + suma + " y El producto es: " + producto + ".";
}