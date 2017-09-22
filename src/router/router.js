import VueRouter from 'vue-router'
import About from '../About.vue'
import File from '../File.vue'
import TimeLine from '../Timeline.vue'
var routes=[
    {path:'/about',component:About},
    {path:'/file',component:File},
    {path:'/timeline',component:TimeLine}
]

export default (router)=>{
    new VueRouter({
        routes
    })
}
