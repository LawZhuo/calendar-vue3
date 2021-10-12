<template>
  <ul>
      <card-item v-for="(item, index) in data" :key="index" :item="item"></card-item>
  </ul>
</template>

<script>
import CardItem from './Item.vue'
export default {
    components: {
        CardItem
    },
    props: {
        data: Array
    }
}
</script>

<style lang="less" scoped>

</style>