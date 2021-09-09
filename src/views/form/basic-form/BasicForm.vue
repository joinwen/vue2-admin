<template>
  <div class="Basic-Form">
    <bread-crumb class="m-b-4" />
    <el-row type="flex" wrap justify="center">
      <el-col :xl="20">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" prop="date1">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">立即创建</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { data, api, business } from "./assets/index";
export default {
  name: "BasicForm",
  components: { BreadCrumb },
  mixins: [data, api, business],
  comments: {},
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        console.log(valid);
      });
    },
    handleCancel() {
      this.$refs["form"].resetFields();
    },
  },
};
</script>
<style lang="less" scoped></style>
