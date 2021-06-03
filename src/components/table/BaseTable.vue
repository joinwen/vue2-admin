<template>
  <div>
    <slot :name="'caption' + (seq ? `-${seq}` : '')" :data="selectedData">
      <h2 class="fs-md lh-normal color-1">
        {{ caption }}
      </h2>
    </slot>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      id="tableExcel"
      :border="border"
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <template>
        <el-table-column type="expand" v-if="expandColumns.length > 0">
          <template slot-scope="props">
            <el-form label-position="left" inline class="base-table-expand">
              <el-form-item
                :label="item.label"
                v-for="(item, index) in expandColumns"
                :key="index"
              >
                <span>{{ props.row[item.prop] }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </template>
      <template v-for="(column, index) in columns">
        <el-table-column
          v-if="!column.slot && !column.hidden && !column.expand"
          :label="column.label"
          :align="column.align || 'center'"
          :width="column.width || null"
          :prop="column.prop"
          :key="index + column.label"
          :type="column.type || null"
          :show-overflow-tooltip="overflow"
        >
        </el-table-column>
        <el-table-column
          v-if="column.slot && !column.hidden && !column.expand"
          :label="column.label"
          :width="column.width || '150'"
          :align="column.align || 'center'"
          :prop="column.prop || null"
          :key="index + column.label"
        >
          <template slot-scope="scope">
            <slot
              :name="column.slot"
              :scope="{ $index: scope.$index, row: scope.row }"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <el-pagination
      v-if="pagination && size != 'xs'"
      style="margin-top: 1em"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <el-pagination
      v-if="pagination && size == 'xs'"
      style="margin-top: 1em"
      :pagerCount="3"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="limit"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BaseTable",
  props: {
    pagerCount: {
      type: Number,
      default: 3,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    seq: {
      type: String,
      default: undefined,
    },
    caption: {
      type: String,
      default: undefined,
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    overflow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      limit: 10,
      currentPage: 1,
      selectedData: [],
    };
  },
  computed: {
    ...mapGetters(["size"]),
    expandColumns() {
      return this.columns.filter((column) => column.expand);
    },
  },
  watch: {
    page: {
      handler(newVal) {
        this.currentPage = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    // 处理页码 Change 事件
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("update:page", val);
      this.$emit("handlePageChange", val);
    },

    // 处理页大小 Change 事件
    handleSizeChange(val) {
      this.limit = val;
      this.$emit("handlePageSizeChange", val);
    },
    handleSelectionChange(val) {
      this.selectedData = val;
    },
  },
};
</script>
<style lang="less" scoped>
h2 {
  font-size: 16px;
  line-height: 2;
  color: #303133;
  margin: 0px;
}
.base-table-expand {
  font-size: 0;

  label {
    width: 90px;
    color: #99a9bf;
  }
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>
