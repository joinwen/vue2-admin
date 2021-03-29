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
          icon: "el-icon-menu",
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
      {
        path: "/table",
        name: "Table",
        component: RouteView,
        redirect: "/table/condition",
        meta: {
          title: "表单",
          icon: "el-icon-menu",
        },
        children: [
          {
            path: "/table/condition",
            name: "TableCondition",
            component: () =>
              import("@/views/table/table-condition/TableCondition"),
            meta: {
              title: "条件表单",
              icon: "el-icon-setting",
            },
          },
          {
            path: "/table/list",
            name: "TableList",
            component: () => import("@/views/table/table-list/TableList"),
            meta: {
              title: "表格列表",
              icon: "el-icon-setting",
            },
          },
        ],
      },
    ],
  },
];
const asyncRoutes = [];
export { constantRoutes, asyncRoutes };
