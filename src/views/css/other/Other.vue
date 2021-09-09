<template>
  <div class="Other">
    <bread-crumb />
    <h2 class="fs-lg leading-loose">1. 投影</h2>
    <div class="shadow-example-1">
      <p class="fs-md leading-normal">无偏移投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-2">
      <p class="fs-md leading-normal">右侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-3">
      <p class="fs-md leading-normal">左侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-4">
      <p class="fs-md leading-normal">上侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-5">
      <p class="fs-md leading-normal">下侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-6">
      <p class="fs-md leading-normal">垂直两侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-7">
      <p class="fs-md leading-normal">水平两侧投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-8">
      <p class="fs-md leading-normal">下临边投影</p>
      <div class="shadow-box"></div>
    </div>
    <div class="shadow-example-9">
      <p class="fs-md leading-normal">上临边投影</p>
      <div class="shadow-box"></div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
export default {
  name: "Other",
  components: { BreadCrumb },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.shadow-box {
  width: 100%;
  background-color: rgba(100, 100, 100, 0.1);
  height: 80px;
}
.shadow-example-1 {
  .shadow-box {
    box-shadow: 0 0 4px 2px red;
  }
}
.shadow-example-2 {
  .shadow-box {
    box-shadow: 4px 0 4px -2px red;
  }
}
.shadow-example-3 {
  .shadow-box {
    box-shadow: -4px 0 2px -2px red;
  }
}

.shadow-example-4 {
  .shadow-box {
    box-shadow: 0px -4px 2px -2px red;
  }
}

.shadow-example-5 {
  .shadow-box {
    box-shadow: 0px 4px 2px -2px red;
  }
}
.shadow-example-6 {
  .shadow-box {
    box-shadow: 4px 0 2px -2px red, -4px 0 2px -2px red;
  }
}
.shadow-example-7 {
  .shadow-box {
    box-shadow: 0px -4px 2px -2px red, 0px 4px 2px -2px red;
  }
}
.shadow-example-8 {
  .shadow-box {
    box-shadow: 4px 4px 4px -2px red;
  }
}
.shadow-example-9 {
  .shadow-box {
    box-shadow: -4px -4px 4px -2px red;
  }
}
</style>
