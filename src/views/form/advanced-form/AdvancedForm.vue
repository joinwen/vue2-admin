<template>
  <div class="Advanced-Form">
    <bread-crumb class="m-b-2" />
    <el-row type="flex" wrap justify="center">
      <el-col :xl="20">
        <h2 class="fs-md">表单1</h2>
        <el-form inline label-width="80px">
          <el-row>
            <el-col :xl="6" v-for="(item, index) in form1Data" :key="index">
              <el-form-item :label="item.label" prop="item.prop">
                <el-input v-model="form1[item.prop]" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>

      <el-col :xl="20">
        <h2 class="fs-md">表单2</h2>
        <el-form inline label-width="80px">
          <el-row>
            <el-col :xl="6" v-for="(item, index) in form2Data" :key="index">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input v-model="form2[item.prop]" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :xl="20">
        <h2 class="fs-md">表单3</h2>
        <el-form inline label-width="80px">
          <el-row>
            <el-col :xl="6" v-for="(item, index) in form3Data" :key="index">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input v-model="form3[item.prop]" />
              </el-form-item>
            </el-col>
            <el-col :xl="6">
              <el-button @click="handleAddLabelField">添加</el-button>
            </el-col>
            <el-col :xl="24">
              <el-form-item>
                <el-button type="primary" @click="handleSubmit">提交</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { data, api, business } from "./assets/index";
export default {
  name: "AdvancedForm",
  components: { BreadCrumb },
  mixins: [data, api, business],
  data() {
    return {};
  },
  methods: {
    handleAddLabelField() {
      this.addForm3Data();
    },
    handleSubmit() {
      console.log({
        ...this.form1,
        ...this.form2,
        ...this.form3,
      });
    },
  },
};
</script>
<style lang="less" scoped></style>
