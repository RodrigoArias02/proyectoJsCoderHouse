"use strict";
let producto = "";
let precio = 0;
let ciclo = true;
let list = [];
let categoria = "";

const verificarNum = () => {
  precio = prompt("Seleccione el precio");
  if (!Number.isNaN(precio) && precio >= 0 && precio.trim() !== "") {
  } else {
    alert("el valor no es numerico");
    precio = -1;
  }
  return precio;
};
const guardarProductos = (product, price, categoria) => {
  let objetProduct = {};
  objetProduct.productos = product;
  objetProduct.precio = price;
  objetProduct = categoria;
  let list = [];
  list.push(objetProduct);
  return list;
};

const mostrarLista = (list) => {
  for (const productos of list) {
    alert(producto.indexOf + productos.productos + productos.precio);
  }
};

while (ciclo === true) {
  producto = prompt("Seleccione el producto");
  precio = verificarNum();
  while (precio === -1) {
    precio = verificarNum();
  }
  categoria = prompt("Seleccione categoria");
  const productos = guardarProductos(producto, precio, categoria);
  list = list.concat(productos);

  ciclo = confirm("Quieres volver a ingresar un producto?");
}
ver = confirm("¿Quieres realizar otra accion? 1-eliminar un elemento");
if (ver === true) {
}
mostrarLista(list);
console.log(list);
