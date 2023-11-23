<template>
  <div class="mission-container">
    <h1>Nuestra misión</h1>
    <p>“La misión de Ecologik es sencilla: proporcionar servicios de alta calidad en tiempo y forma. Nuestro equipo va más allá de sus límites para cubrir las necesidades de cada proyecto. Por medio de una comunicación clara y un servicio inigualable, esperamos poder superar sus expectativas en Servicio de recolección de residuos orgánicos y Educación para el desarrollo sustentable. Para obtener más información, contáctenos hoy mismo.”</p>
  </div>
</template>

<script>
export default {
  name: 'MissionAbout'
}
</script>

<style scoped>
.mission-container {
  width: 80%; 
  margin: 20px auto; 
  text-align: center; 
  background-color: rgba(255, 255, 255, 0.5); 
  padding: 20px; 
  border-radius: 10px;
}

h1 {
  font-size: 2.5em;
  color: #2D721C; 
  margin-bottom: 20px;
  font-weight: bold;
}

p {
  font-size: 1.1em;
  color: #555;
  line-height: 1.5;
  font-style: italic;
  margin: 0 auto;
  max-width: 90%; 
}
</style>
