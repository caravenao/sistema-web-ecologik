<template>
    <div class="product-detail py-5" v-if="productDetail">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img :src="productDetail.photo" class="img-fluid rounded" :alt="productDetail.name">
          </div>
          <div class="col-lg-6">
            <h2 class="text-green">{{ productDetail.name }}</h2>
            <h4>{{ productDetail.subName }}</h4>
            <p class="text-muted">{{ productDetail.category }}</p>
            <p>{{ productDetail.description }}</p>
            <p class="price text-green">Precio: ${{ productDetail.price }}</p>
            <p v-if="productDetail.discount">Descuento: {{ productDetail.discount }}%</p>
            <p v-if="productDetail.status === 'Hay existencias'">Estado: Hay existencias</p>
            <p v-else>Estado: No disponible</p>
            <div class="quantity mb-3">
              <label for="quantity">Cantidad:</label>
              <input v-model="counter" type="number" id="quantity" min="1" class="quantity-input" :disabled="!isAvailable">
            </div>
            <button class="btn btn-primary" @click="addToCart" :disabled="!isAvailable">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { useProductStore } from '../stores/product';

  export default {
    name: 'ProductDetail',
    data() {
      return {
        productDetail: null,
        counter: 1,
      };
    },
    created() {
      this.fetchProductDetail();
    },
    setup() {
      const productStore = useProductStore();
      return {
        productStore
      }
    },
    computed: {
      uniqUrlName() {
        return this.$route.params.uniqUrlName;
      },
      isAvailable() {
        return this.productDetail && this.productDetail.status === 'Hay existencias';
      },
    },
    methods: {
      async fetchProductDetail() {
        try {
          const uniqUrlName = this.uniqUrlName;
          const response = await this.$api.get(`/search-product/${uniqUrlName}`);
          if (response.status === 200) {
            this.productDetail = response.data.product;
          }
        } catch (error) {
          console.error('Error al obtener los detalles del producto:', error);
        }
      },
      addToCart() {
        this.productStore.addProductToCart(this.productDetail, this.counter);
      },
    }
  };
  </script>
  
  <style scoped>
    .product-detail {
      background-color: #f8f9fa;
    }
    
    .text-green {
      color: #2D721C;
    }
    
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2D721C;
    }
    
    .quantity input {
      width: 60px;
      margin-left: 10px;
    }
    
    .btn-primary {
      background-color: #86BB8C;
      border-color: #86BB8C;
    }
    
    .btn-primary:hover {
      background-color: #65996f;
      border-color: #65996f;
    }
    
    .quantity-input:disabled,
    .btn-primary:disabled {
      background-color: #e9ecef;
      color: #6c757d;
      cursor: not-allowed;
    }
  </style>
  