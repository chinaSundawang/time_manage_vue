import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式

import './assets/main.css'

const app = createApp(App)
Vue.use(ElementUI); // 3.安装

app.use(router)

app.mount('#app')
// el
new Vue({
    el:'#app',
    render: h=>(App)
});
