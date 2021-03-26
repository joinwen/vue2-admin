import BasicLayout from "@/layouts/basic-layout/BasicLayout";
import RouteView from "@/layouts/router-view/RouteView";

const constantRoutes = [
  {
    path: "/",
    name: "Root",
    redirect: "/sys",
    component: BasicLayout,
    meta: {
      title: "主页",
    },
    children: [
      {
        path: "/sys",
        name: "Sys",
        component: RouteView,
        redirect: "/sys/user",
        meta: {
          title: "系统管理",
        },
        children: [
          {
            path: "/sys/user",
            name: "SysUser",
            component: () => import("@/views/sys/user/SysUser"),
            meta: {
              title: "用户管理",
            },
          },
          {
            path: "/sys/role",
            name: "SysRole",
            component: () => import("@/views/sys/role/SysRole"),
            meta: {
              title: "角色管理",
            },
          },
          {
            path: "/sys/permission",
            name: "SysPermission",
            component: () => import("@/views/sys/permission/SysPermission"),
            meta: {
              title: "权限管理",
            },
          },
        ],
      },
    ],
  },
];
const asyncRoutes = [];
export { constantRoutes, asyncRoutes };
