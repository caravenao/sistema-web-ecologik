<template>
    <div>
      <NavBarAdmin />
      <div class="admin-instruction">
        <p>Aquí podrás administrar tus datos dentro de la app. Esta sección te permite gestionar productos, usuarios, noticias, planes y aspectos del compostaje. Utiliza la barra de navegación superior para moverte entre las diferentes secciones y realiza las operaciones de administración según sea necesario.</p>
      </div>
    </div>
  </template>
  
  <script>
  import NavBarAdmin from '../components/NavBarAdmin.vue';
  
  export default {
    name: 'AdminPage',
    components: {
      NavBarAdmin
    },
    data() {
      return {
        // Tus propiedades de datos van aquí
      }
    },
    methods: {
      // Tus métodos van aquí
    }
  }
  </script>
  
  <style scoped>
  .admin-instruction {
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    background-color: #f2f2f2;
    color: #333;
    font-size: 1rem;
    text-align: center;
  }
  
  /* Puedes agregar más estilos según sea necesario */
  </style>
  