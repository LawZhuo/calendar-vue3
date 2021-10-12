<template>
    <div class="container">
        <!-- 状态码不为0，errorCode为true，则显示错误提示页面 -->
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <!-- 状态码为0，则显示数据页面 -->
        <div v-else>
            <card-list :data="yearData"></card-list>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { getNowDate } from '@/libs/utils'
import getData from '@/services'
import CardList from '@/components/YearPage/List'

export default {
    setup() {
        const store = useStore();
        onMounted(() => {
            const field = store.state.field;
            getData(store, field, getNowDate(field))
        })

        return {
            yearData: computed(() => store.state.yearData),
            errorCode: computed(() => store.state.errorCode)
        }
    },
    components: {
        CardList,
    }
}
</script>

<style lang="less" scoped>

</style>