<template lang="html">
  <div class="car">
    <v-header class="header">
      <h1 slot="title">{{title}}</h1>
    </v-header>
    <v-footer></v-footer>     
  </div>  
</template>

<script>
import Footer from '@/common/_footer.vue'
import Header from '@/common/_header.vue'
export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  computed: {
    title() {
      return this.$store.state.sw.allMsg || "登录/注册";
    }
  }
}
</script>

<style lang="less" scoped>
</style>
