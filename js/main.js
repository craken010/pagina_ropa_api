//  Referencias al DOM (elementos HTML)
const contenedorProductos = document.getElementById("productos");
const cargandoTexto = document.getElementById("cargando");
const filtroCategoria = document.getElementById("filtroCategoria");

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
    `;

    contenedorProductos.appendChild(article);
  });
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






