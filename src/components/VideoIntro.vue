<template>
  <div class="intro-container d-flex">

    <!-- Sección del Video -->
    <div class="video-section col-6 p-0">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/e-8nPEaryWo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <!-- Sección de Descripción -->
    <div class="description-section col-6 d-flex align-items-center justify-content-center text-white">
      <div class="text-content">
        <h2>Súmate y participa compostando tus residuos.</h2>
        <p>El compostaje que nació desde una huerta comunitaria, se ha convertido en un servicio que llega hoy a los mejores restaurantes y familias del Cajón del Maipo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoIntro'
}
</script>

<style scoped>
h2 {
  font-size: 2em;
  margin-bottom: 25px;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

p {
  font-size: 0.9em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.description-section {
  background: #86BB8C;
}

.text-content {
  width: 80%;
}

/* Estilos responsivos para móvil */
@media (max-width: 767px) {
    .intro-container.d-flex {
        flex-direction: column;
    }
      
    .video-section, .description-section {
        width: 100%; /* Ajustar ambas secciones al 100% del ancho de la pantalla */
    }
      
    .description-section {
        padding: 30px 0; /* Agregado para evitar que el texto quede muy cerca del borde superior */
    }
      
    h2 {
        font-size: 1.5em; /* Reduciendo el tamaño del título para móvil */
    }
      
    p {
        font-size: 0.8em; /* Reduciendo el tamaño del párrafo para móvil */
    }
}
</style>
