import { createRouter, createWebHistory } from './myVueRouter'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    children: [
      {
        path: 'yi',
        name: 'yi',
        component: {
          name: 'yi',
          render() {
            return <div>yi
               <my-router-view/>
            </div>
          }
        },

    children: [
      {
        path: 'san',
        name: 'san',
        component: {
          name: 'san',
          render() {
            return <div>san</div>
          }
        },
      },
    ]
      },
      {
        path: 'er',
        name: 'er',
        component: {
          render() {
            return <div>er</div>
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
