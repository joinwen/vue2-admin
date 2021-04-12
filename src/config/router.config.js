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
          icon: "el-icon-setting",
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
          icon: "el-icon-s-order",
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
      {
        path: "/visualization",
        name: "Visualization",
        component: RouteView,
        redirect: "/visualization/echarts",
        meta: {
          title: "可视化",
          icon: "el-icon-s-data",
        },
        children: [
          {
            path: "/visualization/echarts",
            name: "EchartsDemo",
            component: () =>
              import("@/views/visualization/echarts/EchartsDemo"),
            meta: {
              title: "Echarts",
            },
          },
          {
            path: "/visualization/d3",
            name: "D3Demo",
            component: () => import("@/views/visualization/d3/D3Demo"),
            meta: {
              title: "D3",
            },
          },
        ],
      },
      {
        name: "Map",
        path: "/map",
        redirect: "/map/leaflet",
        component: RouteView,
        meta: {
          title: "地图",
          icon: "el-icon-location",
        },
        children: [
          {
            name: "LeafletDemo",
            path: "/map/leaflet",
            component: () => import("@/views/map/leaflet/LeafletDemo"),
            meta: {
              title: "Leaflet",
            },
          },
          {
            name: "MapboxDemo",
            path: "/map/mapbox",
            component: () => import("@/views/map/mapbox/MapboxDemo"),
            meta: {
              title: "Mapbox",
            },
          },
        ],
      },
      {
        name: "ImageGallery",
        path: "/gallery",
        component: () => import("@/views/gallery/ImageGallery"),
        meta: {
          title: "画廊",
          icon: "el-icon-picture",
        },
      },
      {
        name: "3D",
        path: "/3d",
        redirect: "/3d/clay-gl",
        component: RouteView,
        meta: {
          title: "3D",
          icon: "el-icon-location",
        },
        children: [
          {
            name: "ClayGlDemo",
            path: "/3d/clay-gl",
            component: () => import("@/views/3d/clay-gl/ClayGlDemo"),
            meta: {
              title: "ClayGL",
            },
          },
          {
            name: "ThreeJsDemo",
            path: "/3d/three-js",
            component: () => import("@/views/3d/three-js/ThreeJsDemo"),
            meta: {
              title: "ThreeJS",
            },
          },
        ],
      },
    ],
  },
];
const asyncRoutes = [];
export { constantRoutes, asyncRoutes };
