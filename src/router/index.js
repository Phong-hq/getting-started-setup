import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/login/Login.vue')
    // },{}
    {
      path: "/",
      redirect: "home",
      // redirect: "/dashboard",
      component: () => import('../views/login/Login.vue'),
      children: [
         {
          path: '/home',
          name: 'home',
          component: () => import('../views/login/Login.vue')
        },
        // {
        //   path: '/config',
        //   name: 'config',
        //   component: () => import('../views/config/Config.vue'),
        // },
        // {
        //   path: '/choose-keyboard',
        //   name: 'choose-keyboard',
        //   component: () => import('../views/config/ChooseKeyboard.vue')
        // },
        // {
        //   path: '/choose-category',
        //   name: 'choose-category',
        //   component: () => import('../views/category-and-service/ChooseCategory.vue')
        // },
        // {
        //   path: '/category/setup',
        //   name: 'setup-catelogy-and-service',
        //   component: () => import('../views/category-and-service/Setup.vue')
        // },
        // {
        //   path: '/staff/setup',
        //   name: 'setup-staff',
        //   component: () => import('../views/staff/Setup.vue')
        // },
        // {
        //   path: '/done',
        //   name: 'done',
        //   component: () => import('../views/done/Done.vue')
        // },
      ]
    },
    {
      path: "/config",
      redirect: "config",
      // redirect: "/dashboard",
      component: () => import('../views/Layout.vue'),
      children: [
        //  {
        //   path: '/home',
        //   name: 'home',
        //   component: () => import('../views/login/Login.vue')
        // },
        {
          path: '/config',
          name: 'config',
          component: () => import('../views/config/Config.vue'),
        },
        {
          path: '/choose-keyboard',
          name: 'choose-keyboard',
          component: () => import('../views/config/ChooseKeyboard.vue')
        },
        {
          path: '/choose-category',
          name: 'choose-category',
          component: () => import('../views/category-and-service/ChooseCategory.vue')
        },
        {
          path: '/category/setup',
          name: 'setup-catelogy-and-service',
          component: () => import('../views/category-and-service/Setup.vue')
        },
        {
          path: '/staff/setup',
          name: 'setup-staff',
          component: () => import('../views/staff/Setup.vue')
        },
        {
          path: '/done',
          name: 'done',
          component: () => import('../views/done/Done.vue')
        },
      ]
    },
    // {
    //   path: '/config',
    //   name: 'config',
    //   component: () => import('../views/config/Config.vue'),
    // },
    // {
    //   path: '/choose-keyboard',
    //   name: 'choose-keyboard',
    //   component: () => import('../views/config/ChooseKeyboard.vue')
    // },
    // {
    //   path: '/choose-category',
    //   name: 'choose-category',
    //   component: () => import('../views/category-and-service/ChooseCategory.vue')
    // },
    // {
    //   path: '/category/setup',
    //   name: 'setup-catelogy-and-service',
    //   component: () => import('../views/category-and-service/Setup.vue')
    // },
    // {
    //   path: '/staff/setup',
    //   name: 'setup-staff',
    //   component: () => import('../views/staff/Setup.vue')
    // },
    // {
    //   path: '/done',
    //   name: 'done',
    //   component: () => import('../views/done/Done.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
