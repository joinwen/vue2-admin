export default {
  data() {
    return {
      columns: [
        {
          label: "序号",
          type: "index",
          width: "auto",
        },
        {
          label: "id",
          prop: "id",
        },
        {
          label: "姓名",
          prop: "username",
        },
        {
          label: "性别",
          prop: "gender",
        },
        {
          label: "年龄",
          prop: "age",
        },
        {
          label: "爱好",
          prop: "hobby",
        },
        {
          label: "体重",
          prop: "weight",
        },
        {
          label: "身高",
          prop: "height",
        },
        {
          label: "描述",
          prop: "description",
        },
        {
          label: "状态",
          prop: "state",
        },
        {
          label: "操作",
          slot: "op",
        },
      ],
      data: [],
      total: 0,
      page: 1,
      loading: true,
      conditionData: [
        {
          label: "姓名",
          prop: "username",
          span: {
            xl: "auto",
            sm: "auto",
            xs: 12,
          },
        },
        {
          label: "性别",
          prop: "gender",
          span: {
            xl: "auto",
            sm: "auto",
            xs: 12,
          },
        },
        {
          label: "id",
          prop: "id",
          span: {
            xl: "auto",
            sm: "auto",
            xs: 12,
          },
        },
        {
          btn: true,
          label: "查询",
          emit: "search",
          span: {
            xl: "auto",
            sm: "auto",
            xs: 24,
          },
        },
      ],
    };
  },
};
