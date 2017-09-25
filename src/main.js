import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
<<<<<<< HEAD
import App from './App.vue'
import VueRouter from 'vue-router'

import About from './About.vue'
import File from './File.vue'
import TimeLine from './Timeline.vue'
Vue.use(VueRouter)
var routes=[
    {path:'/about',component:About},
    {path:'/file',component:File},
    {path:'/timeline',component:TimeLine}
]
var router=new VueRouter({
    routes
})
//  或写为
=======
import router from './router/router'
import App from './App.vue'
>>>>>>> 0007d4b5ceaac43019724a9ace654e6e42d4774b
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
