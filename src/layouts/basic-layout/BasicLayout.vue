<template>
  <div class="basic-layout">
    <section>
      <div class="aside">
        <div></div>
        <aside>侧边栏</aside>
      </div>

      <section>
        <header>头部</header>
        <main>
          <router-view />
        </main>
        <footer></footer>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "BasicLayout",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.basic-layout {
  height: 100%;

  section {
    height: 100%;

    .aside {
      width: 256px;
      height: 100%;
    }
    aside {
      position: fixed;
      width: 256px;
    }
  }
}
</style>
