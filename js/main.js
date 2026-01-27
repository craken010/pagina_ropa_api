const contenedorProductos = document.getElementById("productos");
const cargandoTexto = document.getElementById("cargando")
fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(productos => {
      cargandoTexto.style.display = "none";
    productos.forEach(producto => {
      const article = document.createElement("article");
      article.classList.add("producto");
      article.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}">
        <h2 class="titulo">${producto.title}</h2>
        <p class="precio">$${producto.price}</p>`;
        
      contenedorProductos.appendChild(article);
    });
  });


