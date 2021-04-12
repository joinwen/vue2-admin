<template>
  <div class="Clay-Gl-Demo">
    <div id="viewport"></div>
  </div>
</template>
<script>
const clay = require("claygl");
export default {
  name: "ClayGlDemo",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      clay.application.create("#viewport", {
        graphic: {
          shadow: true,
          linear: true,
          tonemapping: true,
        },
        init(app) {
          this._camera = app.createCamera([-200, 8000, 35000], [20, 2000, 500]);

          app.createDirectionalLight([500, 100, 100]);
          this._orbitControl = new clay.plugin.OrbitControl({
            target: this._camera,
            domElement: app.container,
          });

          app.createAmbientCubemapLight(
            "http://upload.flywen.top/bg2_1k.hdr",
            1,
            1
          );

          return app.loadModel("http://upload.flywen.top/scene.gltf").then(
            ((result) => {
              this._logoRoot = result.rootNode;
              result.materials.forEach((material) => {
                material.set("roughness", 0.3);
                material.set("lineWidth", 1);
              });
              result.meshes.forEach((mesh) => {
                mesh.geometry.generateBarycentric();
              });
            }).bind()
          );
        },
        loop(app) {
          this._orbitControl.update(app.frameTime);
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.Clay-Gl-Demo {
  height: 100%;
  #viewport {
    height: 100%;
  }
}
</style>
