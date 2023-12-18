document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    alert("Formulario enviado. ¡Gracias por registrarte!");
  });

document
  .getElementById("return2MainPage")
  .addEventListener("click", function () {
    // Redirigir a index.html
    window.location.href = "index.html";
  });

document.addEventListener("DOMContentLoaded", function () {
  const carrito = document.getElementById("carrito");
  const toggleCarritoButton = document.getElementById("toggleCarrito");

  // Oculta el carrito al inicio
  carrito.classList.add("oculto");

  // Muestra u oculta el carrito al hacer clic en el botón de carrito
  toggleCarritoButton.addEventListener("click", function () {
    carrito.classList.toggle("visible");
  });

  // Oculta el carrito al hacer clic en la imagen del carrito dentro del carrito
  document
    .querySelector("#carrito img.icono-carrito")
    .addEventListener("click", function () {
      carrito.classList.remove("visible");
    });
});

function toggleCarrito() {
  const carrito = document.getElementById("carrito");
  carrito.classList.toggle("visible");
}

// Al abrir el carrito
function mostrarCarrito() {
  // ... lógica para mostrar el carrito ...

  // Guardar el estado del carrito en el Local Storage
  const carritoItems = obtenerCarritoItems(); // Implementa esta función según tu estructura de datos
  localStorage.setItem("carrito", JSON.stringify(carritoItems));
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const carrito = document.getElementById("carrito");

  // Obtener elementos del carrito desde el Local Storage
  const storedCarrito = localStorage.getItem("carrito");
  if (storedCarrito) {
    const carritoItems = JSON.parse(storedCarrito);
    // ... lógica para cargar los elementos del carrito en la interfaz ...
  }

  // Resto del código para ocultar el carrito al inicio y gestionar el clic en el botón de carrito
});


const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})