(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151ea454"],{"10c8":function(t,e,a){"use strict";a("bc30")},bc30:function(t,e,a){},c3f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sys-permission"},[a("bread-crumb")],1)},r=[],s=a("e608"),c={name:"SysPermission",components:{BreadCrumb:s["a"]},comments:{},data:function(){return{}}},u=c,o=a("2877"),i=Object(o["a"])(u,n,r,!1,null,"b051410e",null);e["default"]=i.exports},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,s=a("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e608:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-bread-crumb",class:[t.hasHr&&"hr",t.size]},[a("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.auto?t.matches:t.data,(function(e,n){return a("el-breadcrumb-item",{key:n,attrs:{to:{path:e.path}}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)},r=[],s=(a("d81d"),{name:"BreadCrumb",props:{data:{type:Array,default:function(){return[]}},size:{type:String,default:"md"},hasHr:{type:Boolean,default:!0}},computed:{auto:function(){return 0==this.data.length}},data:function(){return{matches:[]}},mounted:function(){this.generateMatchedRoutes()},methods:{generateMatchedRoutes:function(){this.matches=this.$route.matched.map((function(t){return{path:t.path||"/",label:t.meta.title}})),console.log(this.matches)}}}),c=s,u=(a("10c8"),a("2877")),o=Object(u["a"])(c,n,r,!1,null,"7c8d733d",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-151ea454.591f7afe.js.map