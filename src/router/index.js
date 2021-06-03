import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: {
            title: '首页'
        }
    }
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    // if (to.meta.content) {
    //     let head = document.getElementsByTagName('head');
    //     let meta = document.createElement('meta');
    //     meta.content = to.meta.content;
    //     head[0].appendChild(meta)
    // }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});

export default router
