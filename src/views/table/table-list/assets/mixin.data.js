export default {
  data() {
    return {
      columns: [
        {
          label: "商品名称",
          prop: "name",
          expand: true,
        },
        {
          label: "所属店铺",
          prop: "shop",
          expand: true,
        },
        {
          label: "店铺ID",
          prop: "shopId",
          expand: true,
        },
        {
          label: "商品分类",
          prop: "category",
          expand: true,
        },
        {
          label: "店铺地址",
          prop: "address",
          expand: true,
        },
        {
          label: "商品ID",
          prop: "id",
        },
        {
          label: "商品名称",
          prop: "name",
        },
        {
          label: "描述",
          prop: "description",
        },
      ],
      data: [],
      total: 0,
      page: 1,
      loading: false,
      conditionData: [
        {
          label: "商品名称",
          prop: "name",
        },
        {
          btn: true,
          label: "搜索",
          emit: "search",
        },
      ],
    };
  },
};
