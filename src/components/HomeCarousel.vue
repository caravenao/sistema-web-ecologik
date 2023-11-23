<template>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/ecologik_home_1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/ecologik_home_2.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeCarousel',
    setup() {
      // Tu código de configuración aquí
    }
  }
  </script>
  
  <style scoped>
  .carousel-item {
    max-height: 500px; /* Establece la altura máxima que desees para el carrusel */
    overflow: hidden; /* Oculta la parte de la imagen que sobrepasa el contenedor */
  }
  
  .carousel-item img {
    display: block;  /* Elimina cualquier espacio adicional debajo de la imagen */
    width: 100%;     /* Hace que la imagen llene el ancho del contenedor */
    height: 100%;    /* Hace que la imagen llene la altura del contenedor */
    object-fit: cover; /* La imagen cubrirá el área del contenedor sin distorsionarse */
    object-position: center;
  }
  </style>
  
