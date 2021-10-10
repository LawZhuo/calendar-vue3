<template>
  <div class="header">
      <h1>
          <slot></slot>
      </h1>
  </div>
</template>

<script>
export default {    
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 0.44rem;
    background-color: #ed4040;
    text-align: center;
    line-height: 0.44rem;
    h1 {
        font-size: .18rem;
        color: white;
    }
}
</style>
