<template>
    <!-- 动态渲染数据 -->
    <router-link :to="path" class="wrapper">
      <i class="icon">{{iconText}}</i>
      <p class="text">
          <slot></slot>
      </p>
    </router-link>
</template>

<script>

export default {
    // 接收数据
    props: {
        iconText: String,
        path: String
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    font-size: .12rem;
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: .25rem;
        height: .25rem;
        background-color: #ddd;
        color: #999;
        border-radius: 50%;
        transition: all 0.5s;
    }
    .text {
        text-align: center;
        margin-top: 0.02rem;
        color: #999;
        transition: all 0.9s;
    }
    // 给当前路由选项设置样式
    &.router-link-active {
        .icon {
            background-color: #ed4040;
            color: #fff;
        }
        .text {
            color: #ed4040;
        }
    }

}
</style>