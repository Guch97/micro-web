import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/energy',
    component: () => import('../view/energy'),
    name: 'energyPage',
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes, // 实例化vue的时候只挂载constantRouter，其余的按照用户权限动态挂载
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
