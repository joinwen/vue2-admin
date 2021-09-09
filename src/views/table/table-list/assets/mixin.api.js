import { v4 as uuidv4 } from "uuid";
export default {
  methods: {
    getDataApi(data) {
      return new Promise((resolve) => {
        let { page, limit } = data,
          total = 62,
          len = page * limit < total ? limit : total % limit,
          content = [];
        for (let i = 1; i <= len; i++) {
          content.push({
            id: uuidv4(),
            name: "飞机",
            description: "不可描述",
            shop: "天字第一号",
            shopId: uuidv4(),
            category: "重金属",
            address: "江苏省南京市栖霞区",
          });
        }
        setTimeout(() => {
          resolve({
            content,
            total,
          });
        }, Math.random() * 3000);
      });
    },
  },
};
