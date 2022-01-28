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
            <span v-if="tempStock.stock.name && tempStock.date">
              <a :href="tempStock.pdf_url" target="_blank">
                {{ tempStock.broker }} 證券報告-
                {{ tempStock.stock.name + tempStock.date}}
              </a>
            </span>
          </h5>
          <button type="button"
          class="btn-close bg-success"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body" style="height:100vh" >
          <iframe name="pdf" :src="tempStock.pdf_url" width="100%" height="100%"></iframe>
          <!-- <embed :src="tempStock.pdf_url" width="100%" height="100%" /> -->
          <!-- <div class="pdf">
              <canvas :id="pdf-canvas" />
          </div> -->
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
// import * as PDFJs from 'pdfjs-dist';
// import Pdf from '@/assets/123.pdf';

// const PDF = require('pdfjs-dist');
// PDFJs = window['pdfjs-dist/build/pdf'];
// PDF.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.entry';
// PDFJs.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.entry.js';

export default {
  created() {
    // this.loadFile('https://f000.backblazeb2.com/file/pipistorage/TW/8446/8446華研_群益_2021-12-16.pdf');
    // this.loadFile('/cdn.mozilla.net/pdfjs/helloworld.pdf');
  },
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
      tempStock: {
        stock: {
          name: '',
        },
        date: '',
      },
      pdfDoc: '',
      pdfPages: 0,
      pdfScale: 1.0,
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
    loadFile(url) {
      console.log(url);
      const loadingTask = this.PDFJs.getDocument(url);
      console.log('1');
      loadingTask.promise.then((pdf) => {
        console.log('2');
        this.pdfDoc = pdf;
        this.pdfPages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this.renderPage(1); // 表示渲染第 1 页
        });
      });
    },
    renderPage(num) {
      console.log('3');
      this.pdfDoc.getPage(num).then((page) => {
        const canvas = document.getElementById('pdf-canvas');
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const bsr = 1;
        const ratio = dpr / bsr;
        const viewport = page.getViewport({ scale: this.pdfScale });
        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;
        canvas.style.width = `${viewport.width} + 'px'`;
        canvas.style.height = `${viewport.height} + 'px'`;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        const renderContext = {
          canvasContext: ctx,
          viewport: this.viewport,
        };
        page.render(renderContext);
      });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    // this.loadFile('https://f000.backblazeb2.com/file/pipistorage/TW/8446/8446華研_群益_2021-12-16.pdf');
  },
};
</script>
