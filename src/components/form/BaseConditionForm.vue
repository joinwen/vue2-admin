<template>
  <div>
    <el-form label-position="left" :inline="inline" :form="form" ref="form">
      <el-row align="center">
        <template v-for="(item, index) in data">
          <el-col
            v-if="!item.btn"
            :style="{
              overflow: item.type == 'date-picker' ? 'auto' : 'inherit',
            }"
            :size="size"
            :stretch-xl="item.span ? item.span.xl : 'auto'"
            :stretch-lg="item.span ? item.span.lg : 'auto'"
            :stretch-md="item.span ? item.span.md : 'auto'"
            :stretch-sm="item.span ? item.span.sm : 'auto'"
            :stretch-xs="item.span ? item.span.xs : 'auto'"
            :xl="
              item.span
                ? item.span.xl == 'auto'
                  ? undefined
                  : item.span.xl
                : undefined
            "
            :lg="
              item.span
                ? item.span.lg == 'auto'
                  ? undefined
                  : item.span.lg
                : undefined
            "
            :md="
              item.span
                ? item.span.md == 'auto'
                  ? undefined
                  : item.span.md
                : undefined
            "
            :xs="
              item.span
                ? item.span.xs == 'auto'
                  ? undefined
                  : item.span.xs
                : undefined
            "
            :span="item.span ? item.span.final : 24"
            :key="index"
          >
            <el-form-item
              style="padding-right: 1em"
              :label-width="item.labelWidth || null"
              :label="item.label"
            >
              <base-form-list
                :type="item.type"
                :value="(form[item.prop] = item.default)"
                :data="item.data"
                :placeholder="item.placeholder"
                :newValue.sync="form[item.prop]"
              />
            </el-form-item>
          </el-col>
          <el-col
            :size="size"
            :stretch-xl="item.span ? item.span.xl : 'auto'"
            :stretch-lg="item.span ? item.span.lg : 'auto'"
            :stretch-md="item.span ? item.span.md : 'auto'"
            :stretch-sm="item.span ? item.span.sm : 'auto'"
            :stretch-xs="item.span ? item.span.xs : 'auto'"
            :xl="
              item.span
                ? item.span.xl == 'auto'
                  ? undefined
                  : item.span.xl
                : undefined
            "
            :lg="
              item.span
                ? item.span.lg == 'auto'
                  ? undefined
                  : item.span.lg
                : undefined
            "
            :md="
              item.span
                ? item.span.md == 'auto'
                  ? undefined
                  : item.span.md
                : undefined
            "
            :xs="
              item.span
                ? item.span.xs == 'auto'
                  ? undefined
                  : item.span.xs
                : undefined
            "
            :span="item.span ? item.span.final : 24"
            v-else
            :key="index"
            style="min-height: 62px"
          >
            <el-button
              :type="item.type"
              :icon="item.icon"
              @click="onOthers(item)"
            >
              {{ item.label }}
            </el-button>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import BaseFormList from "@/components/form/BaseFormList.vue";
import { mapGetters } from "vuex";
export default {
  name: "BaseConditionForm",
  components: { BaseFormList },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    inline: {
      type: Boolean,
      default: true,
    },
    submitName: {
      type: String,
      default: "查询",
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
  computed: {
    ...mapGetters(["size"]),
  },
  data() {
    return {
      form: {},
      nbsp: " ",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$emit("handleSubmit", this.form);
    },
    onOthers(btn) {
      if (btn.emit) {
        this.$emit(btn.emit, this.form);
      } else {
        this.$emit("handleOthers", btn);
      }
    },
    handleResetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
<style lang="less">
[size="xl"].el-col[stretch-xl="auto"] {
  max-width: 100%;
  width: auto;
}

[size="lg"].el-col[stretch-lg="auto"] {
  max-width: 100%;
  width: auto;
}

[size="md"].el-col[stretch-md="auto"] {
  max-width: 100%;
  width: auto;
}

[size="sm"].el-col[stretch-sm="auto"] {
  max-width: 100%;
  width: auto;
}

[size="xs"].el-col[stretch-xs="auto"] {
  max-width: 100%;
  width: auto;
}
</style>
