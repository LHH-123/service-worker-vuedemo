<template lang="html">
  <div class="index">
    <v-section1 :list="datas.section1.list" :banner='datas.section1.banner'/>
    <v-footer/>
  </div>
</template>

<script>
import Section1 from '@/components/index/section1.vue'
import Footer from '@/common/_footer.vue'
export default {
  components: {
    'v-section1': Section1,
    'v-footer': Footer
  },
  data() {
    return {
      datas: {
        section1: {}
      },
      loading: true
    }
  },

  beforeCreate() {

  }
}
</script>



<style lang="less" scoped>
.index {
  width: 100%;
  padding-bottom: 14vw;
  background-color: #f8fcff;
}
</style>
