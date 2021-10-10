<template>
  <div class="search">
      <!-- 动态渲染数据 -->
      <input type="text" :placeholder="placeholder" :maxLength="maxLength">
  </div>
</template>

<script>
export default {
    //接收父组件传过来的数据
    props: {
        placeholder: String,
        maxLength: String
  },
}
</script>

<style lang="less" scoped>
.search {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 99;
    width: 100%;
    height: .38rem;
    padding: .03rem .1rem;
    box-sizing: border-box;
    background-color: #fff;
    input {
        width: 100%;
        height: 100%;
        font-size: .14rem;
        border: 1px solid #ddd;
        text-indent: .1rem;
        border-radius: .03rem;
        &:focus {
            border-color: #ed4040;
            box-shadow: 0 0 .02rem #ed4040;
            transition: all .3s;
        }
    }
}
</style>