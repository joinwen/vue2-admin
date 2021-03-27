<template>
  <div
    @click="toggleClick"
    class="hamburger-container"
    :style="{ width: oW, height: oH }"
  >
    <svg
      :class="{ 'is-active': active }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      :width="iW"
      :height="iH"
    >
      <path
        d="
        M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4
         0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8
          8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4
           0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0
            4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0
             632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0
              8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7
               519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4
                6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: "Hamburger",
  props: {
    oW: {
      type: String,
      default: "64px",
    },
    oH: {
      type: String,
      default: "64px",
    },
    iW: {
      type: String,
      default: "64",
    },
    iH: {
      type: String,
      default: "64",
    },
  },
  data() {
    return {
      active: true,
    };
  },
  methods: {
    toggleClick() {
      this.active = !this.active;
      this.$emit("toggleClick", this.active);
    },
  },
};
</script>
<style lang="less" scoped>
.hamburger-container {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .hamburger {
    align-items: center;
  }
  .is-active {
    transform: rotate(180deg);
  }
}
</style>
