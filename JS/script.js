document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  alert("Formulario enviado. ¡Gracias por registrarte!");
});


document.getElementById("return2MainPage").addEventListener("click", function() {
  // Redirigir a index.html
  window.location.href = "index.html";
});



document.addEventListener("DOMContentLoaded", function() {
  const carrito = document.getElementById("carrito");
  const toggleCarritoButton = document.getElementById("toggleCarrito");

  // Oculta el carrito al inicio
  carrito.classList.add("oculto");

  // Muestra u oculta el carrito al hacer clic en el botón de carrito
  toggleCarritoButton.addEventListener("click", function() {
    carrito.classList.toggle("visible");
  });

  // Oculta el carrito al hacer clic en la imagen del carrito dentro del carrito
  document.querySelector("#carrito img.icono-carrito").addEventListener("click", function() {
    carrito.classList.remove("visible");
  });
});
