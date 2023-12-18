document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  alert("Formulario enviado. ¡Gracias por registrarte!");
});

document.getElementById("miBoton").addEventListener("click", function() {
  // Redirigir a otra página
window.location.href = "otra-pagina.html";
});

document.getElementById("Back2Main").addEventListener("click", function() {
  // Redirigir a la página principal
  window.location.href = "index.html";
});
