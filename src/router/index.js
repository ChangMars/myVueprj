import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        children: [
          {
            path: 'home',
            name: 'Home',
            component: Home,
          },
          {
            path: 'about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
          },
          {
            path: '/stock',
            name: 'Stock',
            component: () => import('../views/StockPage.vue'),
          },
          {
            path: 'login',
            name: 'Login',
            component: () => import('../views/Login.vue'),
          },
          {
            path: 'products',
            name: 'Products',
            component: () => import('../views/Products.vue'),
          },
        ],
      },
      {
        path: 'newpage',
        name: '路由練習',
        component: () => import('../views/NewPage.vue'),
        children: [
          // 槽狀路由
          {
            path: 'a',
            component: () => import('../components/ComponentA.vue'),
          },
          {
            path: 'b',
            component: () => import('../components/ComponentB.vue'),
          },
          {
            path: 'dynamicRouter/:id', // 加上 : 為動態路由 id可隨意取名
            component: () => import('../views/DynamicRouter.vue'),
          },
          {
            path: 'dynamicRouterByProps/:id', // 透過 props 方式結合動態路由
            component: () => import('../views/DynamicRouterByProps.vue'),
            props: (route) => {
              console.log('route', route);
              return {
                id: route.params.id,
              };
            },
          },
          {
            path: 'RouterNavigation/',
            component: () => import('../views/RouterNavigation.vue'),
          },
          {
            path: 'namedView',
            component: () => import('../views/NamedView.vue'),
            children: [
              {
                path: 'c2a',
                components: {
                  left: () => import('../components/ComponentC.vue'),
                  right: () => import('../components/ComponentA.vue'),
                },
              },
              {
                path: 'c2b',
                components: {
                  left: () => import('../components/ComponentC.vue'),
                  right: () => import('../components/ComponentB.vue'),
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    // 不明白為什麼要控一格
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
