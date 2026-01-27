const contenedorProductos = document.getElementById("productos");

fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(productos => {
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


