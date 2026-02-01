//  Referencias al DOM (elementos HTML)
const contenedorProductos = document.getElementById("productos");
const cargandoTexto = document.getElementById("cargando");
const filtroCategoria = document.getElementById("filtroCategoria");

const modal = document.getElementById("modal");
const modalContenido = document.getElementById("modalContenido");
const cerrarModalBtn = document.getElementById("cerrarModal");

//  Variable global para guardar los productos
// Esto permite reutilizarlos sin volver a hacer fetch
let productos = [];

//  Función que muestra productos en pantalla
function mostrarProductos(lista) {
  // Limpiamos el contenedor antes de volver a pintar
  contenedorProductos.innerHTML = "";

  lista.forEach(producto => {
    const article = document.createElement("article");
    article.classList.add("producto");

    article.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}">
      <h2 class="titulo">${producto.title}</h2>
      <p class="precio">$${producto.price}</p>
      <p class="categoria">${producto.category}</p>
      <button class="btn-detalle">Ver detalle</button>
`;

    article.querySelector(".btn-detalle").addEventListener("click", () => {
      abrirModal(producto);
    });

    contenedorProductos.appendChild(article);
  });
}

//funsion abrir modal
function abrirModal(producto) {
  document.getElementById("modalImagen").src = producto.image;
  document.getElementById("modalImagen").alt = producto.title;

  document.getElementById("modalTitulo").textContent = producto.title;
  document.getElementById("modalPrecio").textContent = "Precio: $" + producto.price;
  document.getElementById("modalCategoria").textContent = "Categoría: " + producto.category;

  modal.classList.remove("oculto");
}



//  Fetch: traer los datos de la API
fetch("https://fakestoreapi.com/products")
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error("Error al conectar con la API");
    }
    return respuesta.json();
  })
  .then(resultado => {
    // Guardamos los productos en la variable global
    productos = resultado;

    // Quitamos el texto de carga
    cargandoTexto.style.display = "none";

    // Mostramos todos los productos
    mostrarProductos(productos);
  })
  .catch(error => {
    cargandoTexto.textContent = "Error al cargar los productos";
    console.error(error);
  });

// evento cerrar modal 
cerrarModalBtn.addEventListener("click", () => {
  modal.classList.add("oculto");
});

//  Evento del filtro
filtroCategoria.addEventListener("change", () => {
  const categoriaSeleccionada = filtroCategoria.value;

  if (categoriaSeleccionada === "all") {
    mostrarProductos(productos);
  } else {
    const productosFiltrados = productos.filter(producto =>
      producto.category === categoriaSeleccionada
    );
    mostrarProductos(productosFiltrados);

  }

});






