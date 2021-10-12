<template>
    <div class="container">
        <!-- 状态码不为0 errorCode为true，则显示错误提示页面 -->
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <!-- 状态码为0，则显示数据页面 -->
        <div v-else>
            <day-card :data="dayData"></day-card>
            <day-list :data="dayData"></day-list>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import getData from '@/services'
import { getNowDate } from '@/libs/utils'
import { useStore } from 'vuex'
import DayCard from '@/components/DayPage/Card'
import DayList from '@/components/DayPage/List'
export default {
    setup() {
        const store = useStore();

        onMounted(() => {
            const field = store.state.field;
            getData(store, field, getNowDate(field));
        })

        // 返回数据对象，使用computed将数据变为计算属性，返回一个ref响应式对象
        return {
            dayData: computed(() => store.state.dayData),
            errorCode: computed(() => store.state.errorCode)
        }
    },
    components: {
        DayCard,
        DayList,
    }
}
</script>

<style>

</style>