import BasicLayout from "@/layouts/basic-layout/BasicLayout";
import RouteView from "@/layouts/router-view/RouteView";

const constantRoutes = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
    component: BasicLayout,
    meta: {
      title: "主页",
    },
    children: [
      {
        name: "Home",
        path: "/home",
        component: () => import("@/views/home/Home"),
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
        },
      },
      {
        name: "CSS",
        path: "/css",
        component: RouteView,
        redirect: "/css/layout",
        meta: {
          title: "CSS",
          icon: "el-icon-postcard",
        },
        children: [
          {
            name: "CssLayout",
            path: "/css/layout",
            component: () => import("@/views/css/layout/Layout"),
            meta: {
              title: "布局",
            },
          },
          {
            name: "TextGraphic",
            path: "/css/text-graphic",
            component: () => import("@/views/css/text-graphic/TextGraphic"),
            meta: {
              title: "图文混排",
            },
          },
          {
            name: "Other",
            path: "/css/other",
            component: () => import("@/views/css/other/Other"),
            meta: {
              title: "其他",
            },
          },
        ],
      },
      {
        path: "/form",
        name: "Form",
        component: RouteView,
        redirect: "/form/basic",
        meta: {
          title: "表单",
          icon: "el-icon-setting",
        },
        children: [
          {
            path: "/form/advanced",
            name: "AdvancedForm",
            component: () => import("@/views/form/advanced-form/AdvancedForm"),
            meta: {
              title: "高级表单",
            },
          },
          {
            path: "/form/step",
            name: "StepForm",
            component: () => import("@/views/form/step-form/StepForm"),
            meta: {
              title: "分步表单",
            },
          },
          {
            path: "/form/basic",
            name: "BasicForm",
            component: () => import("@/views/form/basic-form/BasicForm"),
            meta: {
              title: "基础表单",
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
          title: "表格",
          icon: "el-icon-s-order",
        },
        children: [
          {
            path: "/table/condition",
            name: "TableCondition",
            component: () =>
              import("@/views/table/table-condition/TableCondition"),
            meta: {
              title: "条件表格",
              icon: "el-icon-setting",
            },
          },
          {
            path: "/table/list",
            name: "TableList",
            component: () => import("@/views/table/table-list/TableList"),
            meta: {
              title: "高级表格",
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
