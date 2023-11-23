<template>
  <div class="profile-container">
    <div class="profile-card">
      <h1 class="profile-title">Información del perfil</h1>

      <!-- Grupo de entrada para Tipo de Cuenta -->
      <div class="form-group">
        <label class="form-label" for="tipoCuenta">Tipo de Cuenta</label>
        <select id="tipoCuenta" class="form-input" v-model="sessionStore.userData.accountType">
          <option value="company">Empresa</option>
          <option value="default">Persona</option>
        </select>
      </div>

      <!-- Grupo de entrada para Nombre de la Empresa -->
      <div class="form-group" v-if="sessionStore.userData.accountType === 'company'">
        <label class="form-label" for="nombreEmpresa">Nombre de la Empresa</label>
        <input type="text" id="nombreEmpresa" class="form-input" v-model="sessionStore.userData.companyName">
      </div>

      <!-- Grupo de entrada para Nombre -->
      <div class="form-group">
        <label class="form-label" for="nombre">Nombre</label>
        <input type="text" id="nombre" class="form-input" v-model= "sessionStore.userData.names">
      </div>

      <!-- Grupo de entrada para Apellidos -->
      <div class="form-group">
        <label class="form-label" for="apellido">Apellidos</label>
        <input type="text" id="apellido" class="form-input" v-model="sessionStore.userData.surnames">
      </div>

      <!-- Grupo de entrada para Fecha de Nacimiento -->
      <div class="form-group">
        <label class="form-label" for="fechaNacimiento">Fecha de Nacimiento</label>
        <input type="date" id="fechaNacimiento" class="form-input" v-model="sessionStore.userData.birthDate">
      </div>

      <!-- Grupo de entrada para Teléfono -->
      <div class="form-group">
        <label class="form-label" for="telefono">Número de Teléfono</label>
        <input type="tel" id="telefono" class="form-input" v-model="sessionStore.userData.phoneNumber">
      </div>

      <!-- Grupo de entrada para Dirección -->
      <div class="form-group">
        <label class="form-label" for="direccion">Dirección</label>
        <input type="text" id="direccion" class="form-input" v-model="sessionStore.userData.address">
      </div>

      <div class="button-container">
        <button @click="update" class="save-btn">Guardar cambios</button>
        <button class="close-session-btn" @click="confirmCloseSession">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import { useSessionStore } from '../stores/session';

  export default {
    name: 'ProfileInfo',
    data() {
      return {
        accountType: null,
      };
    },
    setup() {
      const sessionStore = useSessionStore();
      return {
        sessionStore
      };
    },
    methods: {
      confirmCloseSession() {
        if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
          this.sessionStore.destroy();
          this.$router.push('/login');
          console.log("Cerrando sesión...");
        }
      },
      async update(){
        const reqData = {
          names: this.sessionStore.userData.names,
          surnames: this.sessionStore.userData.surnames,
          birthDate: this.sessionStore.userData.birthDate,
          phoneNumber: this.sessionStore.userData.phoneNumber,
          address: this.sessionStore.userData.address,
          companyName: this.sessionStore.userData.companyName,
          accountType: this.sessionStore.userData.accountType,
        }

        await this.$api.put('/update-profile', reqData)
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            //this.sessionStore.setTokens(response.data.tokens);
            console.log("Datos actualizados correctamente");
          }
        })
        .catch((error) => {
          console.log(error + ' Algo salió mal');
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: #86BB8C;
  }
  
  .profile-card {
    background-color: #ffffff;
    padding: 30px;
    width: 600px; /* Ajusta el ancho según necesites */
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  .profile-title {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-group {
    display: flex;
    margin-bottom: 15px;
  }
  
  .form-label {
    width: 20%; /* Ajusta esto según la longitud de tus etiquetas */
    margin-right: 5%; /* Aumenta o disminuye según el espacio deseado entre etiqueta y campo de entrada */
    text-align: left; /* Alinea el texto de las etiquetas a la izquierda */
  }
  
  .form-input {
    flex: 1; /* Los campos de entrada ocupan el espacio restante */
    padding: 10px;
    border: none;
    border-bottom: 2px solid #DFF4D8;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #2D721C;
  }

  .save-button-container {
  text-align: center; /* Centra el botón en el contenedor */
  margin-top: 20px; /* Espacio por encima del botón */
}

.save-btn {
  display: block; /* Hace que el botón sea un bloque para aplicar el margen automático */
  margin: auto; /* Centra el botón horizontalmente */
  padding: 10px 15px; /* Tamaño del relleno dentro del botón */
  border: none; /* No border */
  border-radius: 8px; /* Bordes redondeados */
  background-color: #86BB8C; /* Color de fondo igual al del botón de inicio de sesión */
  color: white; /* Texto en color blanco */
  font-weight: bold; /* Texto en negrita */
  cursor: pointer; /* Cursor tipo pointer al pasar el ratón por encima */
  transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
  width: 50%; /* O un ancho específico si lo prefieres */
}

.save-btn:hover {
  background-color: #65996f; /* Un tono más oscuro para el hover */
}

.button-container {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  }

  .close-session-btn {
    background-color: #ff6b6b; /* Color rojo pastel */
    color: white;
    /* Los demás estilos son iguales a .save-btn */
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .close-session-btn:hover {
    background-color: #ff8787; /* Un tono más claro para el hover */
  }
</style>
  