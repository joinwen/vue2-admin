<template>
  <aside class="Basic-Aside-Comp">
    <BasicAsideMobile v-if="isMobile" />
    <BasicAsidePc v-else />
  </aside>
</template>
<script>
import { mapGetters } from "vuex";
import BasicAsideMobile from "@/layouts/basic-layout/components/basic-aside/basic-aside-mobile/BasicAsideMobile";
import BasicAsidePc from "@/layouts/basic-layout/components/basic-aside/basic-aside-pc/BasicAsidePc";
export default {
  name: "BasicAside",
  components: { BasicAsidePc, BasicAsideMobile },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
