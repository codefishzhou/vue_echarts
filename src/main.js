import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/normalize.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import Mock from 'mockjs'
import  * as echarts from 'echarts';
import jQuery from 'jquery'

// import dataV from '@jiaminghi/data-view'

// Vue.use(dataV)
const app = createApp(App)

app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$https = axios;  
app.config.globalProperties.$mock = Mock;

window.$ = jQuery
window.jQuery = jQuery

app.use(router)

app.use(Antd)

app.mount('#app')
