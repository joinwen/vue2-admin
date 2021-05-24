<template>
  <header class="Basic-Header-Comp">
    <basic-header-menu v-if="menuDirection === 'top'" />
    <basic-header-normal v-else />
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import BasicHeaderMenu from "@/layouts/basic-layout/components/basic-header/basic-header-menu/BasicHeaderMenu";
import BasicHeaderNormal from "@/layouts/basic-layout/components/basic-header/basic-header-normal/BasicHeaderNormal";
export default {
  name: "BasicHeader",
  components: { BasicHeaderMenu, BasicHeaderNormal },
  computed: {
    ...mapGetters(["menuDirection"]),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
