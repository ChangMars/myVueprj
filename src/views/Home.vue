<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{ errors }} {{ values }}

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
    <button @click="toastnotify">測試按鈕</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      user: {},
    };
  },
  inject: ['emitter'],
  methods: {
    onSubmit() {
      console.log(this.user);
    },
    toastnotify() {
      console.log(this.user);
      this.emitter.emit('push-message', {
        style: 'success',
        title: '刪除成功',
      });
    },
  },
  created() {
    // console.log(this);
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },

  components: {
    HelloWorld,
  },
};
</script>
