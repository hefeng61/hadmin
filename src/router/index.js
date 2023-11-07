import {useStore} from "vuex";
import {createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/index.vue'
import {tree} from "../util/filterRoute.js";


const routes = [
    {
        path: '/login',
        component: () => import('../view/login/index1.vue'),
        meta:{
            name:'登录'
        }
    }, {
        path: '/',
        component: Layout,
        meta: {
            name: '首页'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) {
        if (to.path === '/login') {
            next('/')
        } else {
            const store = useStore();
            if (store.getters.menuList.length === 0) {
                store.dispatch('generateRoutes').then(res => {
                    const routers = tree(res, [])
                    routers.forEach(item => router.addRoute(item))
                    // localStorage.setItem('routes',routers)
                    next({...to, replace: true})
                })
            } else {

                next()

            }
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }

})


export default router
