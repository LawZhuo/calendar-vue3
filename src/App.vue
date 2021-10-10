<template>
  <!-- nav区域 -->
  <div id="nav">
    <!-- nav 标题区域 -->
    <top-header>{{ headerTitle }}</top-header>
    <!-- nav 搜索框区域 -->
    <search-input :placeholder="placeholder" :maxLength="maxLength"></search-input>
  </div>

  <!-- 页尾导航区域 -->
  <tab-bar></tab-bar>

  <!-- 路由占位符 -->
  <router-view />
</template>

<script>
// 导入标题模块
import TopHeader from '@/components/TopHeader'
// 导入页尾导航模块
import TabBar from '@/components/TabBar'
// 导入搜索框模块
import SearchInput from '@/components/SearchInput'

import { isReactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default({
  // 导入组件
  components: {
    TopHeader,
    TabBar,
    SearchInput
  },
  setup() {
    const store = useStore();
    // console.log(isReactive(store.state)) 代理对象Proxy

    const router = useRouter();
    // console.log(router.currentRoute.value); 获取当前路由数据

    watch(
      () => router.currentRoute.value.name,
      (value) => {
        //调用mutation的setHeaderTitle方法
        store.commit('setHeaderTitle', value);
        store.commit('setPlaceholder', value);
        store.commit('setMaxLength', value);
        store.commit('setField', value)
      }
    )
    // 暴露state中的数据
    return store.state;
  }
})
</script>


<style lang="less">
.container {
  padding: .82rem 0;
  box-sizing: border-box;
}
</style>
