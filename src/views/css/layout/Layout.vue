<template>
  <div class="Css-Layout">
    <bread-crumb />
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="1. flex 布局" name="1">
        <section class="m-b-1">
          <span class="leading-loose">两边固定，中间自适应</span>
          <div class="section-1">
            <aside></aside>
            <main></main>
            <aside></aside>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">中间固定，两边自适应</span>
          <div class="section-2">
            <aside></aside>
            <main></main>
            <aside></aside>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">左边固定，右边自适应</span>
          <div class="section-3">
            <aside></aside>
            <main></main>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">右边固定，左边自适应</span>
          <div class="section-4">
            <aside></aside>
            <main></main>
          </div>
        </section>
      </el-collapse-item>

      <el-collapse-item title="2. 浮动布局" name="2">
        <section class="m-b-1">
          <span class="leading-loose">两边固定，中间自适应</span>
          <div class="float-1">
            <aside></aside>
            <main></main>
            <aside></aside>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">左边固定，右边自适应</span>
          <div class="float-2">
            <aside></aside>
            <main></main>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">右边固定，左边自适应</span>
          <div class="float-3">
            <aside></aside>
            <main></main>
          </div>
        </section>
      </el-collapse-item>
      <el-collapse-item title="3. 定位布局" name="3">
        <section class="m-b-1">
          <span class="leading-loose">两边固定，中间自适应</span>
          <div class="position-1">
            <aside></aside>
            <main></main>
            <aside></aside>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">左边固定，右边自适应</span>
          <div class="position-2">
            <aside></aside>
            <main></main>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">右边固定，左边自适应</span>
          <div class="position-3">
            <main></main>
            <aside></aside>
          </div>
        </section>
      </el-collapse-item>
      <el-collapse-item title="4. 表格布局" name="4">
        <section class="m-b-1">
          <span class="leading-loose">两边固定，中间自适应</span>
          <section class="table-1">
            <aside></aside>
            <main></main>
            <aside></aside>
          </section>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">左边固定，右边自适应</span>
          <section class="table-2">
            <aside></aside>
            <main></main>
          </section>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">右边固定，左边自适应</span>
          <section class="table-3">
            <main></main>
            <aside></aside>
          </section>
        </section>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
export default {
  name: "Layout",
  components: { BreadCrumb },
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>
<style lang="less" scoped>
.section-1 {
  display: flex;
  height: 32px;
  aside {
    flex: 0 1 auto;
    width: 128px;
    border: 1px solid #dcdfe6;
  }
  main {
    flex: 1 0 auto;
    min-width: 128px;
    border: 1px dashed #8cc5ff;
  }
}

.section-2 {
  display: flex;
  height: 32px;
  aside {
    flex: 1 0 auto;
    min-width: 128px;
    border: 1px dashed #dcdfe6;
  }
  main {
    flex: 0 1 auto;
    width: 500px;
    border: 1px solid #8cc5ff;
  }
}

.section-3 {
  display: flex;
  height: 32px;
  aside {
    width: 128px;
    flex: 0 1 auto;
    border: 1px solid #dcdfe6;
  }
  main {
    flex: 1 0 auto;
    min-width: 128px;
    border: 1px dashed #8cc5ff;
  }
}

.section-4 {
  display: flex;
  height: 32px;
  aside {
    flex: 1 0 auto;
    min-width: 128px;
    border: 1px dashed #8cc5ff;
  }
  main {
    width: 128px;
    flex: 0 1 auto;
    border: 1px solid #dcdfe6;
  }
}

.float-1 {
  height: 32px;
  padding-left: 128px;
  padding-right: 128px;
  & > aside:nth-of-type(1) {
    float: left;
    width: 128px;
    margin-left: -128px;
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
  }

  & > aside:nth-of-type(2) {
    float: right;
    width: 128px;
    margin-right: -128px;
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
  }

  main {
    float: left;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed #8cc5ff;
  }
}

.float-2 {
  height: 32px;
  padding-left: 128px;
  aside {
    height: 100%;
    width: 128px;
    margin-left: -128px;
    float: left;
    border: 1px dashed #dcdfe6;
    box-sizing: border-box;
  }
  main {
    width: 100%;
    height: 100%;
    border: 1px solid #8cc5ff;
    box-sizing: border-box;
  }
}

.float-3 {
  height: 32px;
  padding-right: 128px;
  aside {
    height: 100%;
    width: 128px;
    margin-right: -128px;
    float: right;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
  }
  main {
    width: 100%;
    height: 100%;
    border: 1px dashed #8cc5ff;
    box-sizing: border-box;
  }
}

.position-1 {
  height: 32px;
  position: relative;
  & > aside:nth-of-type(1) {
    position: absolute;
    width: 128px;
    height: 100%;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
  }
  & > aside:nth-of-type(2) {
    position: absolute;
    width: 128px;
    height: 100%;
    right: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
  }
  main {
    position: absolute;
    left: 128px;
    right: 128px;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    border: 1px dashed #8cc5ff;
  }
}

.position-2 {
  height: 32px;
  position: relative;

  aside {
    position: absolute;
    width: 128px;
    height: 100%;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
  }
  main {
    position: absolute;
    width: auto;
    height: 100%;
    left: 128px;
    right: 0;
    box-sizing: border-box;
    border: 1px dashed #8cc5ff;
  }
}

.position-3 {
  height: 32px;
  position: relative;
  aside {
    position: absolute;
    right: 0px;
    width: 128px;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
  }
  main {
    width: auto;
    position: absolute;
    left: 0;
    right: 128px;
    height: 100%;
    box-sizing: border-box;
    border: 1px dashed #8cc5ff;
  }
}

.table-1 {
  display: table;
  table-layout: fixed;
  height: 32px;

  & > aside:nth-of-type(1) {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
  }
  & > aside:nth-of-type(2) {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
  }
  main {
    display: table-cell;
    width: 100%;
    border: 1px dashed #8cc5ff;
  }
}

.table-2 {
  display: table;
  table-layout: fixed;
  height: 32px;

  aside {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
  }
  main {
    width: 100%;
    display: table-cell;
    border: 1px dashed #8cc5ff;
  }
}

.table-3 {
  display: table;
  table-layout: fixed;
  height: 32px;

  aside {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
  }
  main {
    width: 100%;
    display: table-cell;
    border: 1px dashed #8cc5ff;
  }
}
</style>
