import { v4 as uuidv4 } from "uuid";
export default {
  methods: {
    getDataApi(data) {
      let { page, limit } = data,
        total = 62,
        content = [],
        len = page * limit < total ? limit : total % limit;
      return new Promise((resolve) => {
        for (let i = 1; i <= len; i++) {
          content.push({
            id: uuidv4(),
            username: "flywen",
            gender: "男",
            age: 20,
            hobby: "足球",
            weight: 20,
            height: 50,
            description: "没错，还是那个味道",
            state: 1,
          });
        }
        setTimeout(() => {
          resolve({
            total,
            content,
          });
        }, Math.random() * 3000);
      });
    },
  },
};
