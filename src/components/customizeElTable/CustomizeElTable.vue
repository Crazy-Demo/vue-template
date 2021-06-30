<!--
 * @Date: 2020-07-07 09:56:43
 * @LastEditTime: 2020-09-25 10:02:11
 * @Description: slot:fore 前部插槽 slot:tail 尾部插槽 slot:tags tags插槽
-->
<template>
  <div class="tab-wrapper">
    <el-table
      v-loading="loading"
      :data="datas"
      tooltip-effect="dark"
      style="width: 100%"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot name="fore" />
      <el-table-column
        v-for="(item, index) in titles"
        :key="index"
        :prop="item.prop ? item.prop : null"
        :label="item.label"
        :width="item.width ? item.width : null"
        :min-width="item.minWidth ? item.minWidth : null"
        :show-overflow-tooltip="item.tooltip ? item.tooltip : false"
      >
        {{ item.minWidth }}
        <template slot-scope="scope">
          <template v-if="item.tag">
            <slot name="tags" :scope="scope" />
          </template>
          <template v-else-if="item.switch">
            <slot name="switch" :scope="scope" />
          </template>
          <template v-else-if="item.tail">
            <slot name="tail" :scope="scope" />
          </template>
          <p v-else class="cus-text">
            <span>{{ scope.row[item.prop] }}</span>
          </p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TableMixins from '@/components/customizeElTable/TableMixins.vue'
export default {
  mixins: [TableMixins],
  inheritAttrs: false,
  data() {
    return {
      multipleSelection: [] // 多选数据
    }
  },
  watch: {
    datas(newValue, oldValue) {
      if (newValue) {
        this.$emit('update:loading', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cus-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  span {
    white-space: pre;
  }
}
</style>
