<template>
  <div :style="{ display: display }">
    <el-input
      v-if="type == 'input'"
      clearable
      v-model="theValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-input>

    <el-input
      v-if="type == 'input-textarea'"
      clearable
      :disabled="disabled"
      type="textarea"
      v-model="theValue"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-input>

    <el-select
      v-if="type == 'select'"
      v-model="theValue"
      :disabled="disabled"
      clearable
      :placeholder="placeholder"
      @change="handleChange"
    >
      <el-option
        v-for="(option, index) in data"
        :label="option.label || option"
        :value="option.value === undefined ? option : option.value"
        :key="index"
      ></el-option>
    </el-select>

    <el-date-picker
      v-if="type == 'date-picker'"
      v-model="theValue"
      :type="dateType"
      :format="dateFormat"
      :range-separator="rangeSeparator || null"
      :start-placeholder="startPlaceholder || null"
      :end-placeholder="endPlaceholder || null"
      :value-format="valueFormat"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-date-picker>
    <base-input-tree
      v-if="type == 'input-tree'"
      :data="data"
      :prop="theValue"
      @change="handleChange"
    />
  </div>
</template>
<script>
import BaseInputTree from "@/components/input/BaseInputTree.vue";

export default {
  name: "BaseFormList",
  components: { BaseInputTree },
  props: {
    type: {
      type: String,
      default: "input",
    },
    placeholder: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hidden: {
      type: Function,
      default: () => true,
    },
    dateType: {
      type: String,
      default: "datetimerange",
    },
    dateFormat: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss",
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss",
    },
    display: {
      type: String,
      default: "block",
    },
    rangeSeparator: {
      type: String,
      default: "至",
    },
    startPlaceholder: {
      type: String,
      default: "开始日期",
    },
    endPlaceholder: {
      type: String,
      default: "结束日期",
    },
    value: null,
  },
  watch: {
    value: {
      handler(newVal) {
        this.theValue = newVal;
      },
      immediate: true,
    },
  },
  data() {
    return {
      theValue: undefined,
    };
  },
  methods: {
    handleChange(val) {
      this.$emit("update:newValue", val);
    },
  },
};
</script>
<style lang="less" scoped></style>
