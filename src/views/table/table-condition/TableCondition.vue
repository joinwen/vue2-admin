<template>
  <div class="table-condition">
    <bread-crumb />
    <base-condition-form
      ref="conditionRef"
      class="m-t-2"
      :data="conditionData"
      @search="handleSearchEmit"
    />
    <div>
      <base-table
        ref="tableRef"
        :columns="columns"
        :data="data"
        :page="page"
        :total="total"
        :loading="loading"
        @handlePageSizeChange="handlePageSizeChangeEmit"
        @handlePageChange="handlePageChangeEmit"
      >
        <template slot="op">
          <el-button>激活</el-button>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import BaseTable from "@/components/table/BaseTable";
import BaseConditionForm from "@/components/form/BaseConditionForm";
import { data, api, business } from "./assets/index";
export default {
  name: "TableCondition",
  components: { BaseConditionForm, BaseTable, BreadCrumb },
  mixins: [data, api, business],
  data() {
    return {};
  },
  mounted() {
    this.initPageData();
  },
  methods: {
    initPageData(data) {
      data = Object.assign(this.handleGetConditionData(), data);
      console.log(data);
      this.getData(data);
    },
    handleGetConditionData() {
      let tableComp = this.$refs["tableRef"],
        conditionComp = this.$refs["conditionRef"],
        params = { ...conditionComp.form };
      return {
        ...params,
        page: tableComp.currentPage,
        limit: tableComp.limit,
      };
    },
    handlePageSizeChangeEmit() {
      this.initPageData();
    },
    handlePageChangeEmit() {
      this.initPageData();
    },
    handleSearchEmit() {
      this.initPageData();
    },
  },
};
</script>
<style lang="less" scoped></style>
