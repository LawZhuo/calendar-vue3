import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/border.css'
import '@/assets/css/resets.css'
import '@/assets/js/common.js'
import '@/assets/js/fastclick.js'

import ErrorTip from '@/components/ErrorTip'

//获取应用程序实例
const app = createApp(App);

//全局注册组件
app.component('ErrorTip', ErrorTip);

//挂载
app.use(store).use(router).mount('#app')
