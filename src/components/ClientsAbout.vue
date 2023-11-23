<template>
  <div class="client-section container">
    <h2 class="text-center mb-5">Algunos de nuestros clientes</h2>
    <div class="d-flex justify-content-around flex-wrap">
      <img src="/img/la_vegana.webp" alt="La Vegana con Ganas" class="client-logo mb-4">
      <img src="/img/dulce.webp" alt="Dulce Espiga" class="client-logo mb-4">
      <img src="/img/arrebol.webp" alt="Arrebola" class="client-logo mb-4">
      <img src="/img/ayurdiets.webp" alt="Ayurdiets" class="client-logo mb-4">
      <img src="/img/cajon_del_plato.webp" alt="Cajon del Plato" class="client-logo mb-4">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsAbout'
}
</script>

<style scoped>
.client-section {
  padding: 20px 0;
  background-color: white; /* Este color es solo un ejemplo, puedes cambiarlo según tus preferencias */
}

.client-logo {
  width: 150px; /* Puedes ajustar este valor según el tamaño que desees para los logotipos */
  height: 150px;
  transition: transform 0.3s;
  margin: 0 10px;
}

.client-logo:hover {
  transform: scale(1.1);
}

h2 {
  color: #86BB8C;
}
</style>
