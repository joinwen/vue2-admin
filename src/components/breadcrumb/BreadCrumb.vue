<template>
  <div class="base-bread-crumb" :class="[hasHr && 'hr', size]">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(bread, index) in auto ? matches : data"
        :key="index"
        :to="{ path: bread.path }"
      >
        {{ bread.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    size: {
      type: String,
      default: "md",
    },
    hasHr: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    auto() {
      return this.data.length == 0;
    },
  },
  data() {
    return {
      matches: [],
    };
  },
  mounted() {
    this.generateMatchedRoutes();
  },
  methods: {
    generateMatchedRoutes() {
      this.matches = this.$route.matched.map((item) => {
        return { path: item.path || "/", label: item.meta.title };
      });
      console.log(this.matches);
    },
  },
};
</script>
<style lang="less" scoped>
.base-bread-crumb {
  font-size: 16px;
  position: relative;
}
.md {
  /deep/ .el-breadcrumb {
    font-size: 16px;
  }
}
.base {
  /deep/ .el-breadcrumb {
    font-size: 14px;
  }
}
.lg {
  /deep/ .el-breadcrumb {
    font-size: 18px;
  }
}
.hr {
  padding-bottom: 0.5em;
  border-bottom: 1px solid #dcdfe6;
}
</style>
