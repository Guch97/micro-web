/*
 * @Author: xs
 * @Date: 2023-04-26 11:01:27
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 定义路由
    {
      path: '/home',
      component: () => import('../view/home'),
      name: 'homePage',
    },
  ],
});

export default router;
