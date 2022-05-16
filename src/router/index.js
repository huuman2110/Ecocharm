import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login
  // },
  // {
  //   path: '/admin/login',
  //   name: 'login',
  //   component: login
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: test
  // },
  // {
  //   path: '/:id',
  //   name: 'TestParam',
  //   component: TestParam
  // },
  // {
  //   path: '/pages/404',
  //   name: 'page404',
  //   component: page404
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// router.beforeEach((to, from, next) => {
//   //get role component
//   let authComponent = to.matched[0].components.default.auth
//   const roleTempComponent = authComponent ? role.find(item => item.role === authComponent) : null
//   const roleComponent = roleTempComponent ? roleTempComponent.priority : null
//   const token = localStorage.getItem('token')
//   const auth = localStorage.getItem('auth')
//   const roleTempAuth = role.find(item => item.role === auth)
//   const roleAuth = roleTempAuth ? roleTempAuth.priority : null
//   if(!roleComponent && to.path === '/login' && token && auth === 'user') {
//     next('/')
//   } else if(!roleComponent && to.path === '/admin/login' && token && auth === 'admin') {
//     next('/admin/dashboad')
//   } else if(!roleComponent) {
//     next()
//   } else if(!roleAuth && authComponent === 'user') {
//     localStorage.removeItem('token')
//     localStorage.removeItem('auth')
//     next('/login')
//   } else if(!roleAuth && authComponent === 'admin') {
//     localStorage.removeItem('token')
//     localStorage.removeItem('auth')
//     next('admin/login')
//   } else if(roleAuth && token && roleAuth >= roleComponent) {
//     next()
//   } else {
//     next('/pages/404')
//   }
// })
// //set head
// router.afterEach((to, from) => {
//   let component = to.matched[0].components.default
//   Vue.nextTick(() => {
//     let head = ''
//     if(component.head) {
//       head = component.head()
//     }
//     document.title = head.title || "Chasqui";
//     document.meta = head.meta;
//   });
// });

export default router
