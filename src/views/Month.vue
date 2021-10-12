<template>
  <div class="container">
    <!-- 状态码不为0 errorCode为true，则显示错误提示页面 -->
    <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
    <!-- 状态码为0，则显示数据页面 -->
    <div v-else>
      <!-- 调用子组件，并向子组件传数据 -->
      <card-list :data="monthData"></card-list>
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { useStore } from "vuex";
import { onMounted, computed } from "@vue/runtime-core";
import { getNowDate } from "@/libs/utils";
import CardList from "@/components/MonthPage/List";
export default {
  setup() {
    // 调用store
    const store = useStore();

    onMounted(() => {
      // 获取field数据
      const field = store.state.field;
      // 获取格式处理好后的数据
      getData(store, field, getNowDate(field));
    });

    return {
      // 暴露数据 供子组件调用
      monthData: computed(() => store.state.monthData),
      errorCode: computed(() => store.state.errorCode),
    };
  },
  components: {
    CardList,
  },
};
</script>

<style>
</style>