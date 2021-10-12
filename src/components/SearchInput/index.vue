<template>
  <div class="search">
    <!-- 动态渲染数据 -->
    <input type="text" :placeholder="placeholder" :maxLength="maxLength" v-model="keyword" @input="search()"/>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex';
import { formatUserDate } from '@/libs/utils'
export default {
  //接收父组件传过来的数据
  props: {
    placeholder: String,
    maxLength: Number,
  },
  setup(props) {
      const keyword = ref('');
      const store = useStore();

      const search = () => {
          const field = store.state.field;
          if (keyword.value.length === props.maxLength) {
              getData(store, field, formatUserDate(keyword.value))
          }
      }
      watch(
          () => store.state.field,
          () => {
              keyword.value = '';
          }
      )

      return {
          keyword,
          search
      }
    }
};
</script>

<style lang="less" scoped>
.search {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 0.38rem;
  padding: 0.03rem 0.1rem;
  box-sizing: border-box;
  background-color: #fff;
  input {
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    border: 1px solid #ddd;
    text-indent: 0.1rem;
    border-radius: 0.03rem;
    &:focus {
      border-color: #ed4040;
      box-shadow: 0 0 0.02rem #ed4040;
      transition: all 0.3s;
    }
  }
}
</style>