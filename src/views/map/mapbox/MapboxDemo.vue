<template>
  <div id="MapboxDemo"></div>
</template>
<script>
const mapBoxGl = require("mapbox-gl/dist/mapbox-gl");
mapBoxGl.accessToken =
  "pk.eyJ1IjoiY3l3ZW4iLCJhIjoiY2tnZWtiM3AwMGVrZjJ4cnNiZnJ1Z2hjMiJ9.d0AxnD5TcPg-wovCJp82Wg";
export default {
  name: "D3Demo",
  data() {
    return {
      map: undefined,
      enabledClick: true,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new mapBoxGl.Map({
        container: "MapboxDemo",
        center: [121.47, 31.23],
        zoom: 2,
        pitch: 0,
        style: "mapbox://styles/mapbox/dark-v10",
      });
      if (this.enabledClick) {
        this.initClick();
      }
    },

    initClick() {
      this.map.on("click", (e) => {
        let location = e.lngLat,
          text = `当前点击位置：${location.lng.toFixed(
            2
          )},${location.lat.toFixed(2)}`;
        this.addPopup(location, text);
      });
    },

    addPopup(location, text) {
      new mapBoxGl.Popup().setLngLat(location).setHTML(text).addTo(this.map);
    },
  },
};
</script>
<style lang="less" scoped>
@import "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css";
#MapboxDemo {
  height: 100%;
}
</style>
