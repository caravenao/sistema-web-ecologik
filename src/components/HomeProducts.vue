<template>
    <div class="container mt-4">
      <!-- Crea una fila para los productos -->
      <h2 class="text-center mb-3">Productos destacados</h2>
      <div class="row">
        <!-- Repite el siguiente bloque para cada producto. En este ejemplo, estamos creando 4 productos estáticos. -->
        <div class="col-6 col-sm-6 col-lg-3" v-for="n in 4" :key="n"> <!-- 'col-lg-3' significa que usaremos 3 de las 12 columnas en pantallas grandes, lo que nos permite tener 4 productos en una fila. 'col-md-6' es para pantallas medianas, donde cada producto tomará 6 de 12 columnas, o sea, dos productos por fila. -->
          <div class="card">
            <img src="../assets/img/ecologik_home_2.jpg" class="card-img-top" alt="Product image">
            <div class="card-body">
              <h5 class="card-title">Humus X Kilos {{ n }}</h5> <!-- Puedes reemplazar esto con cualquier propiedad de tu producto -->
              <p class="card-text">$ 10.000</p> <!-- Puedes reemplazar esto con cualquier propiedad de tu producto -->
              <a href="#" class="btn btn-custom">Ver detalles</a>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3"> <!-- Envuelto el botón en un div con clases para centrar y darle margen superior -->
          <a href="#" class="btn btn-custom btn-shop">Ver tienda</a>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeProducts',
    // podrías añadir tus productos como data, computed properties o fetch them in a method or in lifecycle hooks
    data() {
      return {
        // Tus datos van aquí
      };
    },
    methods: {
      // Tus métodos van aquí
    }
  }
  </script>
  
  <style scoped>
    .btn-custom {
  background-color: #179850; /* Tu color personalizado */
  color: white; /* Esto es para asegurar que el texto sea legible, elige el color que desees para el texto */
  border: none; /* Elimina el borde, si lo prefieres */
}

/* Si deseas que el botón mantenga un color específico al pasar el ratón por encima o al hacer clic en él, deberás especificar esos estilos también. */
.btn-custom:hover, .btn-custom:focus, .btn-custom:active {
  background-color: #11580c; /* Un tono más oscuro de tu color para el efecto hover, por ejemplo */
  color: white;
}

.btn-shop {
  max-width: 300px;  /* Aquí puedes definir el ancho máximo que desees para el botón */
}
  </style>
  