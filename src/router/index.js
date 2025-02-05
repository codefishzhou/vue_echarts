import { tabPaneProps } from "element-plus";
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routerHistory = createWebHistory();
const routerHash = createWebHashHistory();

const router = createRouter({
  history: routerHash,
  routes: [
    // {
    //   path: "/:pathMatch(.*)",
    //   redirect: "/404",
    // },
    // {
    //   path: "/404",
    //   component: () => import("@/components/Four.vue"),
    // },
    // {
    //   path: "/echarts",
    //   name: "echarts",
    //   component: () => import("@/components/echarts/index.vue"),
    // },
    {
      path: "/echarts1",
      name: "echarts1",
      component: () => import("@/components/echarts/usual.vue"),
    },
    {
      path: "/echarts2",
      name: "echarts2",
      component: () => import("@/components/echarts/echarts2.vue"),
    },
    {
      path: "/echarts3",
      name: "echarts3",
      component: () => import("@/components/echarts/echarts3.vue"),
    },
    {
      path: "/one",
      name: "one",
      component: () => import("@/components/echarts/one.vue"),
    },
    {
      path: "/student",
      name: "student",

      component: () => import("@/components/Home.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/components/home/Home.vue"),
        },
        {
          path: "infolist",
          name: "infolist",
          component: () => import("@/components/student/InfoList.vue"),
        },
        {
          path: "studentlist",
          name: "studentlist",
          component: () => import("@/components/student/StudentList.vue"),
        },
        {
          path: "worklist",
          name: "worklist",
          component: () => import("@/components/student/WorkList.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/start/Login.vue"),
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("@/components/start/Sign.vue"),
    },
  ],
});

//全局路由守卫
// let flag = true
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  let userName = null;
  
  try {
    userName = token ? JSON.parse(token) : null;
  } catch (e) {
    localStorage.removeItem("token"); // 清除无效的 token
  }

  // 访问登录页面
  if (to.path === "/login") {
    if (userName) {
      next({ path: "/student/home" }); // 重定向到首页
    } else {
      next();
    }
    return;
  }
  
  // 访问其他页面
  if (!userName) {
    if (to.path === "/404" || to.path === "/sign") {
      next();
    } else {
      next({ path: "/login" });
    }
    return;
  }
  
  next();
});
export default router;
