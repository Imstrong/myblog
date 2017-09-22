import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router/router'
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
//  或写为
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
