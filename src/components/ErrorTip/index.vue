<template>
  <div class="error-tip">
      <img :src="require('../../assets/img/error.png')" alt="">
        <p>{{ errData[errorCode] }}</p>
  </div>
</template>

<script>
import errData from '@/data/error'
export default {
    props: {
        errorCode: Number
    },
    setup() {
        return {
            errData
        }
    }
}
</script>

<style lang="less" scoped>
.error-tip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    img {
        width: .5rem;
    }
    p {
        font-size: .14rem;
        color: #999;
        margin-top: .15rem;
    }
}
</style>