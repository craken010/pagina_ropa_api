fetch("https://fakestoreapi.com/products")
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos);
  });


