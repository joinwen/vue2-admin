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
      <el-collapse-item title="5. 水平垂直居中" name="5">
        <section class="m-b-1">
          <span class="leading-loose">1. flex——不限定宽高</span>
          <div class="h-v-1 m-1 p-1 shadow-basic">
            <div class="w-5 h-5 p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-full h-full"
              />
            </div>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">2. 定位——不限定宽高</span>
          <div class="h-v-2 m-1 p-1 shadow-basic">
            <div class="w-5 h-5 p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-full h-full"
              />
            </div>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">3. 定位——不限定宽高</span>
          <div class="h-v-3 m-1 p-1 shadow-basic">
            <div class="w-5 h-5 p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-full h-full"
              />
            </div>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">4. table-cell——不限定宽高</span>
          <div class="h-v-4 m-1 p-1 shadow-basic">
            <div class="p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-5 h-5"
              />
            </div>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">5. 定位——限定宽高</span>
          <div class="h-v-5 m-1 p-1 shadow-basic">
            <div class="w-5 h-5 p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-full h-full"
              />
            </div>
          </div>
        </section>
        <section class="m-b-1">
          <span class="leading-loose">6. 行高 + text-align——限定宽高</span>
          <div class="h-v-6 m-1 p-1 shadow-basic">
            <div class="w-5 h-5 p-0.5">
              <img
                :src="require('@/assets/images/css/text-graphic/img-7.jpg')"
                class="w-full h-full"
              />
            </div>
          </div>
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
      activeNames: [],
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
  height: 128px;
  aside {
    flex: 0 1 auto;
    width: 128px;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center/128px no-repeat;
  }
  main {
    flex: 1 0 auto;
    min-width: 128px;
    line-height: 128px;
    border: 1px dashed #8cc5ff;
  }
}

.section-2 {
  display: flex;
  height: 128px;
  aside {
    flex: 1 0 auto;
    min-width: 128px;
    line-height: 128px;
    border: 1px dashed #dcdfe6;
  }
  main {
    flex: 0 1 auto;
    width: 128px;
    border: 1px solid #8cc5ff;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center/128px no-repeat;
  }
}

.section-3 {
  display: flex;
  height: 128px;
  aside {
    width: 128px;
    flex: 0 1 auto;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center/128px no-repeat;
  }
  main {
    flex: 1 0 auto;
    min-width: 128px;
    line-height: 128px;
    border: 1px dashed #8cc5ff;
  }
}

.section-4 {
  display: flex;
  height: 128px;
  aside {
    flex: 1 0 auto;
    min-width: 128px;
    line-height: 128px;
    border: 1px dashed #8cc5ff;
  }
  main {
    width: 128px;
    flex: 0 1 auto;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center/128px no-repeat;
    border: 1px solid #dcdfe6;
  }
}

.float-1 {
  height: 128px;
  padding-left: 128px;
  padding-right: 128px;
  & > aside:nth-of-type(1) {
    float: left;
    width: 128px;
    margin-left: -128px;
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center / 128px no-repeat;
  }

  & > aside:nth-of-type(2) {
    float: right;
    width: 128px;
    margin-right: -128px;
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center / 128px no-repeat;
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
  height: 128px;
  padding-left: 128px;
  aside {
    height: 100%;
    width: 128px;
    margin-left: -128px;
    float: left;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center / 128px no-repeat;
  }
  main {
    width: 100%;
    height: 100%;
    border: 1px dashed #8cc5ff;
    box-sizing: border-box;
  }
}

.float-3 {
  height: 128px;
  padding-right: 128px;
  aside {
    height: 100%;
    width: 128px;
    margin-right: -128px;
    float: right;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background: url("../../../assets/images/css/text-graphic/img-7.jpg") center
      center / 128px no-repeat;
  }
  main {
    width: 100%;
    height: 100%;
    border: 1px dashed #8cc5ff;
    box-sizing: border-box;
  }
}

.position-1 {
  height: 128px;
  position: relative;
  & > aside:nth-of-type(1) {
    position: absolute;
    width: 128px;
    height: 100%;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-4.jpg") center
      center / 128px no-repeat;
  }
  & > aside:nth-of-type(2) {
    position: absolute;
    width: 128px;
    height: 100%;
    right: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-4.jpg") center
      center / 128px no-repeat;
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
  height: 128px;
  position: relative;

  aside {
    position: absolute;
    width: 128px;
    height: 100%;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-4.jpg") center
      center / 128px no-repeat;
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
  height: 128px;
  position: relative;
  aside {
    position: absolute;
    right: 0px;
    width: 128px;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-4.jpg") center
      center / 128px no-repeat;
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
  height: 128px;

  & > aside:nth-of-type(1) {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-6.jpg") center
      center / 128px no-repeat;
  }
  & > aside:nth-of-type(2) {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-6.jpg") center
      center / 128px no-repeat;
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
  height: 128px;

  aside {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-6.jpg") center
      center / 128px no-repeat;
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
  height: 128px;

  aside {
    display: table-cell;
    width: 128px;
    min-width: 128px;
    border: 1px solid #dcdfe6;
    background: url("../../../assets/images/css/text-graphic/img-6.jpg") center
      center / 128px no-repeat;
  }
  main {
    width: 100%;
    display: table-cell;
    border: 1px dashed #8cc5ff;
  }
}

.h-v-1 {
  min-height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}
.h-v-2 {
  min-height: 128px;
  position: relative;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}

.h-v-3 {
  min-height: 128px;
  position: relative;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}

.h-v-4 {
  min-height: 128px;
  display: table;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}

.h-v-5 {
  height: 128px;
  position: relative;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    position: absolute;
    top: calc(50% - 48px);
    left: calc(50% - 48px);
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}

.h-v-6 {
  height: 128px;
  display: inline-block;
  text-align: center;
  background: linear-gradient(yellowgreen, yellowgreen) center / 2px no-repeat,
    linear-gradient(yellowgreen, yellowgreen) 0 center / 100% 2px no-repeat,
    transparent;
  & div {
    margin-top: 16px;
    display: inline-block;
    background: linear-gradient(red, red) center / 2px no-repeat,
      linear-gradient(red, red) 0 center / 100% 2px no-repeat, transparent;
  }
}
</style>
