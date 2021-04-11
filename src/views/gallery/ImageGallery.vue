<template>
  <div class="Image-Gallery">
    <el-row>
      <el-col
        class="p-1"
        :xl="12"
        :md="24"
        v-for="(img, index) in list"
        :key="index"
      >
        <el-image class="shadow-basic" :src="img" lazy />
      </el-col>
      <el-col :span="24">
        <p class="tx-center" v-if="loading">加载中...</p>
        <p class="tx-center" v-if="noMore">没有更多了</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ImageGallery",
  components: {},
  data() {
    return {
      list: [
        require("./assets/g-1.jpg"),
        require("./assets/g-2.jpg"),
        require("./assets/g-3.jpg"),
        require("./assets/g-4.jpg"),
        require("./assets/g-5.jpg"),
        require("./assets/g-6.jpg"),
        require("./assets/g-7.jpg"),
        require("./assets/g-8.jpg"),
        require("./assets/g-9.jpg"),
      ],
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.list.length >= 9;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    getMoreImage() {
      this.loading = true;
      setTimeout(() => {
        this.list.push(...this.list);
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.Image-Gallery {
  height: 100%;
  overflow: auto;
}
</style>
