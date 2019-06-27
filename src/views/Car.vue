<template lang="html">

    <div class="car">
      <v-header>
        <h1 slot="title">{{title}}</h1>
      </v-header>
      <v-footer/>
    </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'
export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  },

  computed: {
    count() {
      return this.$store.state.detail.count
    }
  },
  computed: {
    title() {
      return this.$store.state.sw.allMsg || "购物车";
    }
  }

}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
