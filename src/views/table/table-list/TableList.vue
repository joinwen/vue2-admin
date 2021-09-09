<template>
  <div class="table-list">
    <bread-crumb class="m-b-2" />
    <base-condition-form
      :data="conditionData"
      ref="conditionRef"
      @search="handleSearchEmit"
    />
    <base-table
      ref="tableRef"
      :data="data"
      :page.sync="page"
      :total="total"
      :columns="columns"
      :loading="loading"
      @handlePageChange="handlePageChangeEmit"
      @handlePageSizeChange="handlePageSizeChangeEmit"
    ></base-table>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import BaseTable from "@/components/table/BaseTable";
import { data, api, business } from "./assets/index";
import BaseConditionForm from "@/components/form/BaseConditionForm";
export default {
  name: "TableList",
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
      this.getData(data);
    },
    handleGetConditionData() {
      let tableRef = this.$refs["tableRef"],
        conditionRef = this.$refs["conditionRef"],
        page = tableRef.currentPage,
        limit = tableRef.limit,
        params = { ...conditionRef.form };
      return {
        page,
        limit,
        ...params,
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
