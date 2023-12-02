<template>
    <div class="admin-notices">
      <h2>Administración de Noticias</h2>
  
      <!-- Formulario para Agregar/Editar Noticia -->
      <div class="notice-form">
        <h3>{{ currentNotice?.id ? 'Editar' : 'Agregar' }} Noticia</h3>
        <form @submit.prevent="saveNotice">
          <input type="text" v-model="currentNotice.title" placeholder="Título">
          <textarea v-model="currentNotice.description" placeholder="Descripción"></textarea>
          <input type="text" v-model="currentNotice.photo" placeholder="URL de la Foto">
          <input type="text" v-model="currentNotice.category" placeholder="Categoría">
          <input type="text" v-model="currentNotice.link" placeholder="Enlace">
          <input type="text" v-model="currentNotice.author" placeholder="Autor">
          <button type="submit">{{ currentNotice?.id ? 'Actualizar' : 'Crear' }}</button>
          <button @click="resetForm">Cancelar</button>
        </form>
      </div>
  
      <!-- Lista de Noticias -->
      <div class="notice-list">
        <h3>Lista de Noticias</h3>
        <div v-for="notice in notices" :key="notice.id" class="notice-item">
          <div>
            <span>{{ notice.title }}</span>
            <!-- ... otros campos de la noticia ... -->
          </div>
          <div>
            <button @click="editNotice(notice)">Editar</button>
            <button @click="deleteNotice(notice.id)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  export default {
    name: 'NoticesAdmin',
    data() {
      return {
        notices: [],
        currentNotice: {
          title: '',
          description: '',
          photo: '',
          category: '',
          link: '',
          author: ''
        }
      };
    },
    methods: {
      async fetchNotices() {
        // Llamada a la API para obtener las noticias
        try {
            const response = await this.$api.get('/index-notice');
            if (response.status === 200) {
                this.notices = response.data.notices;
            }
        } catch (error) {
            console.error('Error al obtener las noticias:', error);
        }
      },
      async saveNotice() {
        // Lógica para agregar o actualizar una noticia
        try {
            let response;
            let noticeData = { ...this.currentNotice };

            delete noticeData.id;
            delete noticeData.uniqUrlTitle;
            delete noticeData.createdAt;
            delete noticeData.updatedAt;
            delete noticeData.deletedAt;

            console.log('noticeData', noticeData);

            if (this.currentNotice.id) {
                response = await this.$api.put(`/update-notice/${this.currentNotice.id}`, noticeData);
            } else {
                response = await this.$api.post('/store-notice', noticeData);
            }

            if (response && response.status === 200) {
                console.log('Noticia guardada/editada correctamente');
                location.reload();
            }
        } catch (error) {
            console.error('Error al guardar/editar la noticia:', error);
        }
      },
      editNotice(notice) {
        this.currentNotice = { ...notice };
      },
      async deleteNotice(noticeId) {
        try {
            const response = await this.$api.delete(`/delete-notice/${noticeId}`);
            if (response && response.status === 200) {
                console.log('Noticia eliminada correctamente');
                location.reload();
                this.notices = this.notices.filter(notice => notice.id !== noticeId);
            }
        } catch (error) {
            console.error('Error al eliminar la noticia:', error);
        }
      },
      resetForm() {
        this.currentNotice = {
          title: '',
          description: '',
          photo: '',
          category: '',
          link: '',
          author: ''
        };
      }
    },
    created() {
      this.fetchNotices();
    }
  };
  </script>
  
  <style scoped>
.admin-notices {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admin-notices h2, .admin-notices h3 {
  color: #333;
  text-align: center;
}

.notice-form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.notice-form form {
  display: grid;
  grid-gap: 10px;
}

.notice-form input, .notice-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.notice-form button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
}

.notice-form button:hover {
  background-color: #4cae4c;
}

.notice-form button[type="submit"] {
  background-color: #0275d8;
}

.notice-form button[type="submit"]:hover {
  background-color: #025aa5;
}

.notice-list {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.notice-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notice-item div {
  display: flex; /* Asegura que los botones estén uno al lado del otro */
  align-items: center;
}

.notice-item span {
  margin-right: 15px;
}

.notice-item button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin-left: 10px; /* Espaciado entre botones */
  cursor: pointer;
  background-color: #0275d8;
  color: white;
}

.notice-item button:hover {
  background-color: #025aa5;
}

.notice-item button.delete {
  background-color: #d9534f;
}

.notice-item button.delete:hover {
  background-color: #c9302c;
}
</style>
