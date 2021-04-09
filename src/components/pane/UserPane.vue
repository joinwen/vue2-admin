<template>
  <div class="user-pane">
    <el-dropdown>
      <div class="user-pane-item p-x-1">
        <el-image
          :src="avatar"
          class="m-r-0.5 w-2 rounded-circle shadow-light"
        ></el-image>
        <span class="color-gray-600 fs-md leading-normal">{{ nickname }}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user-solid">用户中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-delete-solid">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserPane",
  components: {},
  computed: {
    ...mapGetters(["avatar", "nickname"]),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.user-pane {
  height: 64px;

  .user-pane-item {
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 64px;
  }
}
</style>
