<template>
    <div class="notice-detail py-5" v-if="noticeDetail">
      <div class="container">
        <h1 class="text-center mb-4">{{ noticeDetail.title }}</h1>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <img :src="noticeDetail.photo" class="img-fluid rounded mb-4" :alt="noticeDetail.title">
            <p class="text-muted">{{ formatDate(noticeDetail.createdAt) }} por {{ noticeDetail.author }}</p>
            <div class="badge bg-light text-dark mb-4">{{ noticeDetail.category }}</div>
            <div class="notice-content mb-4">
              <p>{{ noticeDetail.description }}</p>
              <a :href="noticeDetail.link" target="_blank" class="btn btn-primary">Más información</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NoticeDetail',
    data() {
      return {
        noticeDetail: null,
      };
    },
    created() {
      this.fetchNoticeDetail();
    },
    computed: {
        uniqUrlTitle() {
            return this.$route.params.uniqUrlTitle;
        }
    },
    methods: {
      async fetchNoticeDetail() {
        try {
          const uniqUrlTitle = this.uniqUrlTitle;
          const response = await this.$api.get(`/search-notice/${uniqUrlTitle}`);
          if (response.status === 200) {
            this.noticeDetail = response.data.notice;
          }
        } catch (error) {
          console.error('Error al obtener los detalles de la noticia:', error);
        }
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString('es-ES', {
          day: 'numeric', month: 'long', year: 'numeric'
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .notice-detail {
    background-color: #f8f9fa;
  }
  
  h1 {
    color: #2D721C;
  }
  
  .notice-content p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .btn-primary {
    background-color: #86BB8C;
    border-color: #86BB8C;
  }
  
  .btn-primary:hover {
    background-color: #65996f;
    border-color: #65996f;
  }
  
  .badge {
    font-size: 0.9rem;
    background-color: #c5e1a5;
  }
  
  .img-fluid {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
  </style>
  