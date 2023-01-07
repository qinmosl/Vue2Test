import Vue from 'vue'
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import { getCookies } from '@/utils/cookie'
import { LOGIN_TOKEN_KEY }  from '@/utils/constants'

Vue.use(VueRouter)

//创建并暴露一个路由器
export const router = new VueRouter({
  mode:'history',
	routes:[
		{
      name:'Main',
			path:'/',
			component:() => import('@/views/MainPage.vue'),
      children:[
				
			]
		},
		{
			path:'/home',
			name:'Home',
			component:() => import('@/views/HomePage.vue'),
		},
		{   
      name:'Login',
			path:'/login',
			component: () => import('@/views/LoginPage.vue')
		},
		{
			// 会匹配所有路径
			path: '*',
			name:'404',
			component: () => import('@/views/404.vue')
		}
	]
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
	// from: Route: 当前导航正要离开的路由
	// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址
	console.log('---to', to, '--from', from)
	// 当跳转除了登录页，若cookie中没有token，则跳回登录页
	if (to.path !== '/login'&& !getCookies(LOGIN_TOKEN_KEY)) next({ name: 'Login' })
  else next()
})
