// Cantidades

const precio = 400000;
let cantidad = 0;
let total = 0;

// Elementos HTML

const botonMas = document.querySelector("#btn-mas");
const botonMenos = document.querySelector("#btn-menos");
const spanCantidad = document.querySelector("#cantidad");
const spanTotal = document.querySelector("#valor-total");
const spanPrecio = document.querySelector("#precio-inicial");

// Mostrar valores iniciales

spanPrecio.innerHTML = precio;
spanTotal.innerHTML = total;

botonMas.addEventListener("click", () => {
  // Aumenta cantidad en 1 y recalcula total
  cantidad++;
  total = precio * cantidad;
  // Actualiza elementos en la página
  spanCantidad.innerHTML = cantidad;
  spanTotal.innerHTML = total;
});

botonMenos.addEventListener("click", () => {
  // Reduce cantidad en 1 y recalcula total
  if (cantidad > 0) {
    cantidad--;
  }
  total = precio * cantidad;
  // Actualiza elementos en la página
  spanCantidad.innerHTML = cantidad;
  spanTotal.innerHTML = total;
});
