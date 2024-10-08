<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="120">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item) in products" :key="item.id">
        <td>{{ item.category}}</td>
        <td>{{ item.title}}</td>
        <td class="text-right">{{ currency(item.origin_price) }}</td>
        <td class="text-right">{{ currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal"
  :item="tempProduct"
  @del-item="delProduct"></DelModal>
  <Pagination
  :pages="pagination"
  @emit-pages="getProducts"></Pagination>
</template>
<script>
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';
import Pagination from '../components/Pagination.vue';
import { currency } from '../methods/filters';

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    currency,
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      // const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.isLoading = true;
      console.log(page, api);
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            console.log(res);
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        });
    },
    openModal(isNew, item) {
      console.log(isNew, item);
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    updateProduct(item) {
      console.log('updateProduct');
      console.log(item);
      this.tempProduct = item;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      this.$http.post(api, { data: this.tempProduct }).then(
        (response) => {
          console.log(response);
          const productComponent = this.$refs.productModal;
          if (response.data.success) {
            this.getProducts();
            productComponent.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: response.data.message.join('、'),
            });
          }
        },
      );
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        if (response.data.success) {
          this.getProducts();
          delComponent.hideModal();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除失敗',
            content: response.data.message.join('、'),
          });
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
