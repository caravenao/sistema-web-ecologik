<template>
    <div class="admin-products">
      <h2>Administración de Productos</h2>
  
      <!-- Formulario para Agregar/Editar Producto -->
      <div class="product-form">
        <h3>{{ currentProduct?.id ? 'Editar' : 'Agregar' }} Producto</h3>
        <form @submit.prevent="saveProduct">
          <input type="text" v-model="currentProduct.name" placeholder="Nombre">
          <input type="text" v-model="currentProduct.subName" placeholder="Subnombre">
          <textarea v-model="currentProduct.description" placeholder="Descripción"></textarea>
          <input type="number" v-model="currentProduct.price" placeholder="Precio">
          <input type="number" v-model="currentProduct.discount" placeholder="Descuento">
          <input type="text" v-model="currentProduct.photo" placeholder="URL de la Foto">
          <input type="text" v-model="currentProduct.status" placeholder="Estado">
          <input type="text" v-model="currentProduct.category" placeholder="Categoría">
          <button type="submit">{{ currentProduct?.id ? 'Actualizar' : 'Crear' }}</button>
          <button @click="resetForm">Cancelar</button>
        </form>
      </div>
  
      <!-- Lista de Productos -->
      <div class="product-list">
        <h3>Lista de Productos</h3>
        <div v-for="product in products" :key="product.id" class="product-item">
          <span>{{ product.name }}</span>
          <!-- ... otros campos del producto ... -->
          <button @click="editProduct(product)">Editar</button>
          <button @click="deleteProduct(product.id)">Eliminar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { useProductStore } from '../stores/product';

export default {
  name: 'AdminProductsPage',
  data() {
    return {
      allProducts: [],
      currentProduct: {
        name: '',
        subName: '',
        description: '',
        price: null,
        discount: null,
        photo: '',
        status: '',
        category: '',
      },
    };
  },
  computed: {
    products() {
      const productStore = useProductStore();
      return productStore.products;
    }
  },
  methods: {
    fetchProducts() {
      const productStore = useProductStore();
      productStore.fetchProductsFromDB();
    },
    async saveProduct() {
        try {
            let response;
            let productData = { ...this.currentProduct };

            // Eliminar id y uniq_url_name si existen
            delete productData.id;
            delete productData.uniqUrlName;

            console.log('Datos del producto:', productData);

            if (this.currentProduct.id) {
            // Actualización del producto
            response = await this.$api.put(`/update-product/${this.currentProduct.id}`, productData);
            } else {
            // Creación de un nuevo producto
            response = await this.$api.post('/store-product', productData);
            }

            if (response && response.status === 200) {
            console.log('Producto guardado/actualizado con éxito');
            // Recargar la página o actualizar la lista de productos aquí
            location.reload();
            } else {
            console.log('Respuesta no exitosa:', response);
            }
        } catch (error) {
            console.error('Error al guardar el producto:', error);
        }
    },
    editProduct(product) {
      this.currentProduct = { ...product };
    },
    resetForm() {
      this.currentProduct = {
        id: null,
        name: '',
        subname: '',
        description: '',
        price: null,
        discount: null,
        photo: '',
        status: '',
        category: '',
      };
    },
    async deleteProduct(productId) {
        try {
            const response = await this.$api.delete(`/delete-product/${productId}`);
            if (response.status === 200) {
            console.log('Producto eliminado con éxito');
            location.reload(); // Recargar la página
            // Actualiza el estado local para reflejar la eliminación
            this.products = this.products.filter(product => product.id !== productId);
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }

  },
  created() {
    this.fetchProducts();
  }
};
</script>

  
<style scoped>
.admin-products {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admin-products h2, .admin-products h3 {
  color: #333;
  text-align: center;
}

.product-form {
  margin-bottom: 40px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.product-form form {
  display: grid;
  grid-gap: 10px;
}

.product-form input, .product-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.product-form button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
}

.product-form button:hover {
  background-color: #4cae4c;
}

.product-list {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.product-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.product-item:last-child {
  border-bottom: none;
}

.product-item span {
  margin-right: 15px;
}

.product-item button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.product-item button.edit {
  background-color: #0275d8;
  color: white;
}

.product-item button.delete {
  background-color: #d9534f;
  color: white;
}

.product-item button.edit:hover {
  background-color: #025aa5;
}

.product-item button.delete:hover {
  background-color: #c9302c;
}
</style>

  