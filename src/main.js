import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
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
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
