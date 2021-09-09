export default {
  methods: {
    getData(data) {
      this.loading = true;
      this.getDataApi(data).then((res) => {
        this.loading = false;
        this.data = res.content;
        this.total = res.total;
      });
    },
  },
};
