"use strict";
let producto = "";
let precio = 0;
let ciclo = true;
const verificarNum = () => {
  precio = prompt("Seleccione el precio");
  if (!Number.isNaN(precio) && precio >= 0 && precio.trim() !== "") {
  } else {
    alert("el valor no es numerico");
    precio = -1;
  }
  return precio;
};
const guardarProductos = (product, price) => {
  //Guardar productos en una lista proximamente.
  alert("El producto es: " + product);
  alert("El precio es: " + price);
};
while (ciclo === true) {
  producto = prompt("Seleccione el producto");
  precio = verificarNum();
  while (precio === -1) {
    precio = verificarNum();
  }
  guardarProductos(producto, precio);
  ciclo = confirm("Quieres volver a ingresar un producto?");
}
