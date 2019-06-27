<template>
  <header>
    <slot name="title"></slot>
  </header>
</template>
<style lang="less" scoped>
header {
  background-color: #f8fcff;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  h1 {
    letter-spacing: 0.2vw;
    font-weight: 600;
    width: 100%;
  }
}
</style>


<script>
export default {

}
</script>
