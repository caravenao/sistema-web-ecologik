<template>
    <nav class="admin-navbar">
      <ul class="admin-nav-list">
        <li>
          <router-link to="/admin/products">Productos</router-link>
        </li>
        <li>
          <router-link to="/admin/usuarios">Usuarios</router-link>
        </li>
        <li>
          <router-link to="/admin/noticias">Noticias</router-link>
        </li>
        <li>
          <router-link to="/admin/planes">Planes</router-link>
        </li>
        <li>
          <router-link to="/admin/compostaje">Compostaje</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBarAdmin'
  };
  </script>
  
  <style scoped>
  .admin-navbar {
    background-color: #333;
    color: white;
    padding: 10px 20px;
  }
  
  .admin-nav-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  
  .admin-nav-list li {
    margin: 0 10px;
  }
  
  .admin-nav-list li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .admin-nav-list li a:hover {
    text-decoration: underline;
  }
  </style>
  