<template>
    <div class="admin-users">
      <h2>Administración de Usuarios</h2>
  
      <!-- Lista de Usuarios -->
      <div class="user-list">
        <h3>Lista de Usuarios</h3>
        <div v-for="user in users" :key="user.id" class="user-item">
          <span>{{ user.names }}</span>
          <span>{{ user.surnames }}</span>
          <span>{{ user.email }}</span>
          <!-- ... otros campos del usuario ... -->
          <button @click="editUser(user)">Editar</button>
        </div>
      </div>
  
      <!-- Formulario para Editar Usuario -->
      <div class="user-form" v-if="currentUser">
            <h3>Editar Usuario</h3>
            <form @submit.prevent="saveUser">
            <label for="accountType">Tipo de Cuenta</label>
            <select id="accountType" v-model="currentUser.accountType">
                <option value="default">Default</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
            </select>

            <label for="totalOrganicWaste">Residuos Orgánicos Totales</label>
            <input type="number" id="totalOrganicWaste" v-model="currentUser.totalOrganicWaste" placeholder="Residuos Orgánicos Totales">

            <label for="humusGenerated">Humus Generado</label>
            <input type="number" id="humusGenerated" v-model="currentUser.humusGenerated" placeholder="Humus Generado">

            <label for="carbonNotEmitted">Carbono no Emitido</label>
            <input type="number" id="carbonNotEmitted" v-model="currentUser.carbonNotEmitted" placeholder="Carbono no Emitido">

            <button type="submit">Actualizar</button>
            <button @click="resetForm">Cancelar</button>
            </form>
        </div>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'UserAdmin',
    data() {
      return {
        users: [],
        currentUser: null,
      };
    },
    methods: {
      async fetchUsers() {
        // Llamada a la API o store para obtener los usuarios
        try {
            const response = await this.$api.get('/user');
            if (response.status === 200) {
                this.users = response.data.users;
                console.log("Usuarios", this.users)
            }
        } catch (error) {
            console.log("Error al obtener usuarios", error);
        }
      },
      async saveUser() {
        try {
            // Construir un objeto con solo los campos que necesitas actualizar
            const updatedUserData = {
            accountType: this.currentUser.accountType,
            totalOrganicWaste: this.currentUser.totalOrganicWaste,
            humusGenerated: this.currentUser.humusGenerated,
            carbonNotEmitted: this.currentUser.carbonNotEmitted
            };

            const response = await this.$api.put(`/update-user-admin/${this.currentUser.id}`, updatedUserData);
            if (response.status === 200) {
            console.log("Usuario actualizado", response.data);
            this.fetchUsers(); // Recargar la lista de usuarios
            }
        } catch (error) {
            console.log("Error al actualizar usuario", error);
        }
        this.resetForm();
        },
      editUser(user) {
        this.currentUser = { ...user };
      },
      resetForm() {
        this.currentUser = null;
      }
    },
    created() {
      this.fetchUsers();
    }
  };
  </script>
  
  <style scoped>
.admin-users {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admin-users h2, .admin-users h3 {
  color: #333;
  text-align: center;
}

.user-list {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.user-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-item:last-child {
  border-bottom: none;
}

.user-item span {
  margin-right: 15px;
}

.user-item button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #0275d8;
  color: white;
}

.user-item button:hover {
  background-color: #025aa5;
}

.user-form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.user-form form {
  display: grid;
  grid-gap: 10px;
}

.user-form input, .user-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.user-form button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
}

.user-form button:hover {
  background-color: #4cae4c;
}

.user-form button[type="submit"] {
  background-color: #0275d8;
}

.user-form button[type="submit"]:hover {
  background-color: #025aa5;
}
</style>

  