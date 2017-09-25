import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../About.vue'
import File from '../File.vue'
import TimeLine from '../Timeline.vue'
Vue.use(VueRouter)
<<<<<<< HEAD

//TODO 临时数据
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

=======
>>>>>>> 0007d4b5ceaac43019724a9ace654e6e42d4774b
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
const router=new VueRouter({
    routes
})
export {
    router
}
