<template>
  <div class="Leaflet-Demo">
    <l-map :zoom="zoom" :center="center" :options="mapOptions">
      <l-tile-layer :url="url" :attribution="attribution" />
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "LeafletDemo",
  components: { LMap, LTileLayer },
  data() {
    return {
      zoom: 3,
      center: latLng(31.23, 121.47),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">flywen.top</a>',
      mapOptions: {
        zoomSnap: 0.5,
      },
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.Leaflet-Demo {
  width: 100%;
  height: 100%;
}
</style>
