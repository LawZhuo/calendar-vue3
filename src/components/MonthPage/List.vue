<template>
  <ul>
    <!-- 渲染子组件 遍历父组件传过来的数据，并将数据传给item子组件 -->
    <card-item
      v-for="(item, index) in data"
      :key="index"
      :item="item"
    ></card-item>
  </ul>
</template>

<script>
import CardItem from "./Item";
export default {
  components: {
    CardItem,
  },
  props: {
    // 接收父组件传过来的数据
    data: Array,
  },
};
</script>

<style>
</style>