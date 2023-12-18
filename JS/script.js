document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  alert("Formulario enviado. ¡Gracias por registrarte!");
});


document.getElementById("return2MainPage").addEventListener("click", function() {
  // Redirigir a index.html
  window.location.href = "index.html";
});
