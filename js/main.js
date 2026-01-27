const contenedorProductos = document.getElementById("productos");
const cargandoTexto = document.getElementById("cargando")

fetch("https://fakestoreapi.com/products")
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error("Error al conectar con la API");
    }
    return respuesta.json();
  })
  .then(productos => {
    cargandoTexto.style.display = "none";

    productos.forEach(producto => {
      const article = document.createElement("article");
      article.classList.add("producto");

      article.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}">
        <h2 class="titulo">${producto.title}</h2>
        <p class="precio">$${producto.price}</p>
        <p class="categoria"${producto.category}</p}`;

      contenedorProductos.appendChild(article);

    });
  })
  .catch(error => {
    cargandoTexto.textContent = "Error al cargar los productos";
    console.error(error);
  });






