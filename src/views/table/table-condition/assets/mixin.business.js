export default {
  methods: {
    getData(data) {
      this.loading = true;
      this.getDataApi(data).then((res) => {
        this.data = res.content;
        this.total = res.total;
        this.loading = false;
      });
    },
  },
};
