"use strict";
let producto = "";
let precio = 0;
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
const eliminarElemento = (list, eliminar) => {
  list.splice(eliminar, 1);
  return list;
};
const guardarProductos = (product, price, category) => {
  let objetProduct = {};
  objetProduct.producto = product;
  objetProduct.precio = price;
  objetProduct.categoria = category;
  let list = [];
  list.push(objetProduct);
  return list;
};

const ingresarElementos = () => {
  let ciclo = true;
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
  return list;
};

const mostrarLista = (list) => {
  let mensaje = "";
  let i = 0;
  list.forEach((num) => {
    mensaje +=
      i + ": " + num.producto + " " + num.precio + " " + num.categoria + "\n";
    i++;
  });
  return mensaje;
};
let ciclo = true,
  mensaje,
  filtrado,
  ver,
  acciones = true,
  eliminar,
  numeroEntero,
  listaNueva,
  cate;

while (ciclo === true) {
  acciones = true;
  list = ingresarElementos();
  mensaje = mostrarLista(list);
  while (acciones === true) {
    ver = prompt(
      `Quieres realizar otra accion? 
        1-Mostrar elementos 
        2-Eliminar un elemento 
        3-Ver total 
        4-Buscar por categoria`
    );

    if (ver === "1") {
      alert(mensaje);
    } else if (ver === "2") {
      eliminar = prompt(`Seleccione el numero de elemento que desea eliminar: 
      ${mensaje}`);
      numeroEntero = parseInt(eliminar);
      listaNueva = eliminarElemento(list, numeroEntero);
      mensaje = mostrarLista(listaNueva);
      alert(mensaje);
    } else if (ver === "3") {
      const sumaPrecios = list.reduce((acumulador, objetoActual) => {
        return acumulador + parseInt(objetoActual.precio);
      }, 0);
      alert(`El total a pagar es: ${sumaPrecios}`);
      console.log(sumaPrecios);
    } else if (ver === "4") {
      cate = "";
      cate = prompt(`Elija categoria: 
      ${mensaje}`);
      const buscador = list.filter((producto) => producto.categoria === cate);
      filtrado = mostrarLista(buscador);
      alert(filtrado);
    }
    acciones = confirm("¿Desea realizar otra accion?");
  }
  ciclo = confirm("¿Quieres volver a ingresar un producto?");
}
