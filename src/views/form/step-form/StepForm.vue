<template>
  <div class="Step-Form">
    <bread-crumb />
    <div class="step-form-wrapper">
      <el-row type="flex" wrap justify="center">
        <el-col :xl="16" :xs="23">
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-col>
        <el-col :xl="9" :xs="18">
          <template v-if="active == 1">
            <el-form
              key="1"
              class="step-1-form"
              label-width="80px"
              ref="form1"
              :model="form1"
            >
              <div style="margin-left: 80px">
                <p>请输入姓名和年龄</p>
                <p>
                  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
                </p>
              </div>
              <el-form-item label="姓名" prop="username">
                <el-input v-model="form1.username" />
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input-number v-model="form1.age" :max="100" :min="10" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleStep1Submit"
                  >下一步</el-button
                >
              </el-form-item>
            </el-form>
          </template>
          <template v-if="active == 2">
            <el-form
              key="2"
              class="step-2-form"
              label-width="80px"
              ref="form2"
              :model="form2"
            >
              <div style="margin-left: 80px">
                <p>这一步很重要，请输入密码</p>
                <p>对后续的任何疑问和Tips，请留言给我们</p>
              </div>
              <el-form-item
                label="密码"
                prop="password"
                :rules="[{ required: true, message: '请输入密码' }]"
              >
                <el-input type="password" v-model="form2.password" />
              </el-form-item>
              <el-form-item label="留言" prop="message">
                <el-input v-model="form2.message" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleStep2Submit"
                  >提交</el-button
                >
                <el-button @click="handleStep2Back">上一步</el-button>
              </el-form-item>
            </el-form>
          </template>
          <template v-if="active == 3">
            <el-form class="step-3-form" key="3">
              <el-form-item>
                <el-alert
                  title="成功提示的文案"
                  type="success"
                  :closable="false"
                  description="文字说明文字说明文字说明文字说明文字说明文字说明"
                  show-icon
                >
                </el-alert>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleRetry"
                  >再来一次</el-button
                >
              </el-form-item>
            </el-form>
          </template>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { data, api, business } from "./assets/index";
export default {
  name: "StepForm",
  components: { BreadCrumb },
  mixins: [data, api, business],
  data() {
    return {};
  },
  methods: {
    handleStep1Submit() {
      this.$refs["form1"].validate((valid) => {
        if (valid) {
          this.active++;
        }
      });
    },
    handleStep2Back() {
      this.active--;
    },
    handleStep2Submit() {
      this.$refs["form2"].validate((valid) => {
        if (valid) {
          this.active++;
          console.log({
            ...this.form1,
            ...this.form2,
          });
        }
      });
    },
    handleRetry() {
      this.form1 = {};
      this.form2 = {};
      this.active = 1;
    },
  },
};
</script>
<style lang="less" scoped>
.step-form-wrapper {
  margin: auto;
  margin-top: 50px;

  .step-1-form,
  .step-2-form,
  .step-3-form {
    margin-top: 3rem;
  }
}
</style>
