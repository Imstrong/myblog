import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../About.vue'
import File from '../File.vue'
import TimeLine from '../Timeline.vue'
Vue.use(VueRouter)

//TODO 临时数据
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

var routes=[
    {path:'/',component:File},
    {path:'/about',component:About},
    {path:'/file',component:File,children:[
        {path:'userhome',UserHome},
        {path:'profile',UserProfile},
        {path:'posts',UserPosts}
    ]},
    {path:'/timeline',component:TimeLine}
]

export default (router)=>{
    new VueRouter({
        routes
    })
}
