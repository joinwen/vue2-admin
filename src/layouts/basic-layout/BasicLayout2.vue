<template>
  <div class="basic-layout">
    <section>
      <aside></aside>
      <section>
        <header></header>
        <main>
          <div>
            <router-view />
            <footer></footer>
          </div>
        </main>
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

    aside {
      position: fixed;
      width: 256px;
      top: 0;
      bottom: 0;
      background-color: yellowgreen;
    }

    section {
      margin-left: 256px;
      height: 100%;
      position: relative;

      header {
        position: fixed;
        top: 0px;
        height: 64px;
        width: 100%;
        background-color: cornsilk;
      }

      main {
        padding-top: 64px;

        div {
          position: relative;
          overflow: hidden;
          min-height: 100%;

          footer {
            height: 64px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            position: absolute;
            background-color: cornsilk;
          }
        }
      }
    }
  }
}
</style>
