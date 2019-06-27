<template lang="html">
  <footer class="footer" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
        首页
    </mt-tab-item>
    <mt-tab-item id="分类页">
      分类
    </mt-tab-item>
    <mt-tab-item id="购物车页">
      购物车
    </mt-tab-item>
    <mt-tab-item id="用户页">
      我的
    </mt-tab-item>
  </mt-tabbar>
  </footer>
</template>

<script>
export default {
  methods: {
    gotoRouter() {
      this.$router.push({
        name: this.selected
      })
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  mounted() {
    let Rname = this.$route.name;
    switch (Rname) {
      case '首页':
        this.selected = '首页';
        break;
      case '分类页':
        this.selected = '分类页';

        break;
      case '购物车页':
        this.selected = '购物车页';

        break;
      case '用户页':
        this.selected = '用户页';
        break;
    }
  }

}
</script>

<style lang="less" scoped>
.mint-tab-item-label:hover {
  color: #333;
}
.mint-tab-item {
  padding: 24px 0px;
}
.mint-tab-item-icon {
  display: none;
}
.mint-tab-item-label {
  font-size: 14px !important;
}
.footer {
  .mint-tabbar {
    background-color: #fff;
    background-image: none;
    box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, 0.13);
    -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, 0.13);
  }
}
</style>
