import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'

import Info from '@/components/info'	//公共页面
import BookList from '@/components/book/list'  //图书
import images from '@/components/imagesList/list'  //图集展示



// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
Vue.use(Router)

let router = new Router({
  routes: [{
		      path: '/',
		      name: '登录',
		      component: Login
		    },{
		      path: '/Info',
		      name: 'Info',
		      component: Info,
		      children: [{
		      		path: 'booklist', 
			        component: BookList, 
			        name: '图书列表', 
			    },{
		      		path: 'images', 
			        component: images, 
			        name: '图集展示', 
			    }]
		    }
	  ]
})


// ？？？？？
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/')) {
	    window.sessionStorage.removeItem('access-user')
	    next()
  } else {
	    let user = JSON.parse(window.sessionStorage.getItem('access-user'))
		    if (!user) {
		      	next({path: '/'})
		    } else {
		      	next()
		    }
	  }
})

export default router
