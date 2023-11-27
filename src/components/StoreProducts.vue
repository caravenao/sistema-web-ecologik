<template>
    <div class="products-section py-5">
        <div class="container">
        <h2 class="text-center mb-4">Productos</h2>
            <div class="row">
                <div class="col-6 col-sm-6 col-lg-3" v-for="product in products" :key="product.id">
                    <div class="card">
                        <img :src="product.photo" class="card-img-top" :alt="product.name">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-text">${{ product.price }}</p>
                            <router-link :to="{ path: `/store/${product.uniqUrlName}`, params: { uniqUrlName: product.uniqUrlName } }" class="btn btn-custom mt-2">Ver detalles</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StoreProducts',
    data() {
      return {
        products: []  // Array para almacenar los productos
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await this.$api.get('/product');
          if (response.status === 200) {
            this.products = response.data.allProducts;
          }
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>

  .products-section {
    background-color: #f8f9fa; /* Color de fondo para la sección de noticias */
  }
  .card {
    margin-bottom: 20px;
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
    font-size: 1.1rem; /* Tamaño del título del producto */
  }
  
  .card-text {
    font-size: 1rem; /* Tamaño del precio del producto */
  }
  
  .btn-custom {
    background-color: #179850; /* Color personalizado para el botón */
    color: white;
    border: none;
  }
  
  .btn-custom:hover, .btn-custom:focus, .btn-custom:active {
    background-color: #11580c; /* Color más oscuro para el efecto hover */
  }
  </style>
  