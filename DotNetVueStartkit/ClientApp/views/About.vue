<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vs-button color="primary" type="border" @click="tryError">Try Error</vs-button>
    <vs-button color="warning" type="filled" @click="try401Error">Try Axios Error(code:401)</vs-button>
    <vs-button color="danger" type="gradient" @click="try500Error">Try Axios Error(code:500)</vs-button>
  </div>
</template>

<script>
  export default {
    created() {
      this.loaded();
    },
    methods: {
      loaded() {
      },
      tryError() {
        this.test();
      },
      try401Error() {
        this.$http.get('http://localhost:3000/unauthorized')
      },
      try500Error() {
        this.$http.get('http://localhost:3000/systemerror')
      }
    },
  };
</script>
