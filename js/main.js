const contenedorProductos = document.getElementById("productos");

fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(productos => {
    productos.forEach(producto => {
      const article = document.createElement("article");
      article.innerHTML =
        `<h2>${producto.title}</h2>
        <p>Precio: $${producto.price}</p>
      `;
     contenedorProductos.appendChild(article);
    });
  });


