<template>
    <div class="notices-section py-5">
      <h2 class="text-center mb-4">Noticias</h2>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="notice in noticesOfSection" :key="notice.id">
            <div class="card mb-4">
              <img :src="notice.photo" class="card-img-top" :alt="notice.title">
              <div class="card-body">
                <span class="badge bg-light text-dark">{{ notice.category }}</span>
                <h5 class="card-title mt-2">{{ notice.title }}</h5>
                <small class="text-muted d-block">{{ localDate(notice.createdAt) }}</small>
                <router-link :to="{ path: `/notices/${notice.uniqUrlTitle}`, params: { uniqUrlTitle: notice.uniqUrlTitle } }" class="btn btn-primary mt-2">Ver más</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NoticeSection',
    data() {
      return {
        noticesOfSection: [] 
      };
    },
    mounted() {
      this.getNotices(); 
    },
    methods: {
      async getNotices() {
        try {
          const response = await this.$api.get('/index-notice');
          if (response.status === 200) {
            this.noticesOfSection = response.data.notices;
          }
        } catch (error) {
          console.error('Error al obtener las noticias:', error);
        }
      },
      localDate(dateTime) {
        const jsDate = new Date(dateTime)
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
        return jsDate.toLocaleDateString('es-ES', options)
      }
    },
  };
  </script>
  
  <style scoped>
  .notices-section {
    background-color: #f8f9fa; /* Color de fondo para la sección de noticias */
  }
  
  .card {
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px); /* Efecto de levantar la tarjeta al pasar el mouse */
  }
  
  .card-img-top {
    height: 180px; /* Altura fija para las imágenes */
    object-fit: cover; /* Asegura que la imagen cubra todo el espacio disponible */
  }
  
  .card-title {
    font-size: 1.1rem; /* Tamaño del título de la noticia */
  }
  
  .card-text {
  font-size: 0.9rem; /* Tamaño del texto de la noticia */
  margin-bottom: 1rem; /* Espacio antes del botón */
}
  
  .btn-primary {
    background-color: #86BB8C; /* Color del botón para que coincida con el esquema de color del sitio */
    border: none; /* Remueve el borde del botón */
  }
  
  .btn-primary:hover {
    background-color: #65996f; /* Color del botón al pasar el mouse */
  }
  
  .badge {
    font-size: 0.8em; /* Tamaño de fuente para el tag de la categoría */
    background-color: #15a52d; /* Color más claro para el fondo del tag */
  }
  
  @media (max-width: 767.98px) { 
    .card-img-top {
      height: auto; /* Altura auto para que la imagen se ajuste proporcionalmente */
    }
  }
  </style>
  