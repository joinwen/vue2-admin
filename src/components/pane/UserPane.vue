<template>
  <div class="user-pane p-x-1">
    <el-avatar :src="avatar" class="m-r-0.5" v-if="false" />
    <el-image
      :src="avatar"
      class="m-r-0.5 w-2 rounded-circle shadow-light"
    ></el-image>
    <span class="color-gray-600 fs-md leading-normal">{{ nickname }}</span>
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
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 64px;
}
</style>
