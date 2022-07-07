import Vue from 'vue'
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

//创建并暴露一个路由器
export default new VueRouter({
    mode:'history',
	routes:[
		{
            name:'Main',
			path:'/',
			component:() => import('@/views/Main.vue'),
            children:[
				{
					path:'home',
                    name:'home',
					component:() => import('@/views/Home.vue'),
                    props:true,
				},
				{
					path:'user',
                    name:'user',
					component:() => import('@/views/User.vue'),
					//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                    props:true,
				}
			]
		},
		{   
            name:'User',
			path:'/User',
			component:Home
		}
	]
})
