import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../About.vue'
import File from '../File.vue'
import TimeLine from '../Timeline.vue'
Vue.use(VueRouter)
var routes=[
    {path:'/about',component:About},
    {path:'/file',component:File},
    {path:'/timeline',component:TimeLine}
]
const router=new VueRouter({
    routes
})
export {
    router
}
