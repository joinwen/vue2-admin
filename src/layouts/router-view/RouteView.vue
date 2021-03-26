<script>
export default {
  name: "RouteView",
  props: {
    keepAlive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  render() {
    const {
      $route: { meta },
    } = this;
    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    );
    const notKeep = <router-view />;
    if (!meta.keepAlive) {
      return notKeep;
    }
    return this.keepAlive || meta.keepAlive ? inKeep : notKeep;
  },
};
</script>
