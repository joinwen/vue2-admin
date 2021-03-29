<template>
  <div class="Menu" v-if="!data.hidden">
    <menu-item
      v-if="!data.children || data.children.length == 0"
      :index="data.path"
      :icon="data.meta ? data.meta.icon : undefined"
      :title="data.meta ? data.meta.title : undefined"
    />
    <menu-item
      v-if="data.children && data.children.length == 1"
      :index="data.children[0].path"
      :icon="data.children[0].meta ? data.children[0].meta.icon : undefined"
      :title="data.children[0].meta ? data.children[0].meta.title : undefined"
    />
    <template v-if="data.children && data.children.length > 1">
      <el-submenu :index="data.path" :key="data.name">
        <template slot="title">
          <i v-if="data.meta && data.meta.icon" :class="[data.meta.icon]"></i>
          <span slot="title">{{ data.meta.title }}</span>
        </template>
        <template v-for="(menu, index) in data.children">
          <Menu :key="index" :data="menu" />
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "Menu",
  components: { MenuItem },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped></style>
