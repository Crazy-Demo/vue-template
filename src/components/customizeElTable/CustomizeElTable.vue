<!--
 * @Author: your name
 * @Date: 2020-07-07 09:56:43
 * @LastEditTime: 2020-07-09 11:05:14
 * @LastEditors: Please set LastEditors
 * @Description: slot:fore 前部插槽 slot:tail 尾部插槽
 * @FilePath: /pro03/src/components/Table.vue
-->
<template>
  <div class="tab-wrapper">
    <el-table
      :data="datas"
      v-loading="loading"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <slot name="fore"></slot>
      <el-table-column
        v-for="(item,index) in titles"
        :prop="item.prop"
        :label="item.label"
        :key="index"
        :width="item.width?item.width:''"
      ></el-table-column>
      <slot name="tail"></slot>
    </el-table>
  </div>
</template>

<script>
import TableMixins from '@/components/customizeElTable/TableMixins.vue'
export default {
  mixins: [TableMixins],
  data () {
    return {
      multipleSelection: [] // 多选数据
    }
  },
  watch: {
    datas (newValue, oldValue) {
      if (newValue) {
        this.$emit('update:loading', false)
      }
    }
  },
  methods: {
    /**
     * @description: 表格选中事件
     * @param Array val:选中项
     * @return:
     */
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('handle-selection-change', this.multipleSelection)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
