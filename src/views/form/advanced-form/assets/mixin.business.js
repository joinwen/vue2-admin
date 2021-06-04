export default {
  methods: {
    addForm3Data() {
      let len = this.form3Data.length;
      this.form3Data.push({
        label: `标签${len + 1}`,
        prop: `label${len + 1}`,
      });
    },
  },
};
