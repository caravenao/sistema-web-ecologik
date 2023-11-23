<template>
    <div class="my-5 home-info-bg mb-0">
      <!-- Primer elemento -->
      <div class="container">
        <div class="row mb-0"> <!-- Cambio en el margen inferior -->
            <!-- Texto -->
            <div class="col-md-4 d-flex align-items-center justify-content-center">
            <div class="info-description">
                <span>Para que tus residuos no terminen en el vertedero.</span>
                <strong>Compostamos por ti</strong>
                <hr class="elegant-line"> <!-- Línea horizontal -->
            </div>
            </div>
            <!-- Foto -->
            <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img src="../assets/img/ecologik_home_2.jpg" alt="Info Image 1" class="info-image">
            </div>
            <!-- Texto -->
            <div class="col-md-4 d-flex align-items-center justify-content-center">
            <div class="info-description">
                <span>Retiramos tus residuos orgánicos.</span>
                <strong>Aportamos a la economía circular</strong>
                <hr class="elegant-line"> <!-- Línea horizontal -->
            </div>
            </div>
        </div>
        
        <!-- Segundo elemento -->
        <div class="row">
            <!-- Foto -->
            <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img src="../assets/img/ecologik_home_1.jpg" alt="Info Image 2" class="info-image">
            </div>
            <!-- Texto -->
            <div class="col-md-4 d-flex align-items-center justify-content-center">
            <div class="info-description">
                <span>Amamos la tierra y queremos devolverle la mano.</span>
                <strong>Creamos empleo digno</strong>
                <hr class="elegant-line"> <!-- Línea horizontal -->
            </div>
            </div>
            <!-- Foto -->
            <div class="col-md-4 d-flex justify-content-center align-items-center">
            <img src="../assets/img/ecologik_home_2.jpg" alt="Info Image 3" class="info-image">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomeInfo'
}
</script>


<style scoped>
/* Color de fondo para todo el componente */
.home-info-bg {
  background-color: #86BB8C;
  padding: 50px 0;  /* Añadimos un padding superior e inferior para separar el contenido de los márgenes */
}

/* Hacemos que las imágenes sean circulares y definimos un tamaño estándar */
.info-image {
  border-radius: 50%;
  width: 275px;
  height: 275px;
  object-fit: cover;
}

/* Estilos para la descripción */
.info-description {
  font-size: 18px;
  color: white;
  text-align: center;
  font-size: 28px;
}

/* Para separar las dos partes del texto y dar espacio entre ellas */
.info-description span, .info-description strong {
  display: block;
  margin-bottom: 10px; /* Añadido para dar un poco de espacio antes de la línea */
}

/* Estilo para la línea horizontal */
.elegant-line {
  width: 120px;  /* Tamaño corto */
  height: 1px;  /* Define el grosor de la línea */
  background-color: white; /* Color de fondo blanco */
  margin-top: 10px; /* Añadido para dar un poco de espacio después del texto */
  margin-bottom: 10px; /* Añadido para dar un poco de espacio antes del siguiente contenido */
  margin-left: auto;  /* Centra la línea horizontal con respecto al texto */
  margin-right: auto;  /* Centra la línea horizontal con respecto al texto */
  opacity: 1;  /* Asegura que la línea sea completamente opaca */
  border: none; /* Elimina cualquier borde que pueda tener por defecto */
}

.info-description span {
  display: block;
  margin-bottom: 5px; /* Espacio antes de la línea */
  font-size: 32px; /* Aumento del tamaño de fuente */
}

.info-description strong {
  display: block;
  margin-bottom: 5px; /* Espacio antes de la línea */
}

</style>