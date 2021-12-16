<template>
  <div class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>{{ tempStock.stock.name + tempStock.date }}</span>
        </h5>
        <button type="button"
        class="btn-close bg-success"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
        </div>
        <div class="modal-body" style="height:800px">
          <iframe name="pdf" :src="tempStock.pdf_url" width="100%" height="100%"></iframe>
        </div>
        <div class="modal-footer">
          <h6 class="bg-danger" style="margin: 0 auto;">
            本服務內容僅供參考，並不提供為買賣股票之投資依據
            投資人應審慎考量自身投資風險，並為投資結果自行負責
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: { // 外層事件
    stock: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: {},
      tempStock: {},
    };
  },
  watch: { // 監聽
    stock() {
      console.log('watch');
      console.log(this.tempStock);
      this.tempStock = this.stock;
    },
  },
  methods: {
    showModal() {
      console.log('showModal');
      this.modal.show();
    },
    hideModal() {
      console.log('hideModal');
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
