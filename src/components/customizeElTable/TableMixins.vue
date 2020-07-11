<!--
 * @Author: your name
 * @Date: 2020-07-07 11:03:15
 * @LastEditTime: 2020-07-07 14:26:40
 * @LastEditors: Please set LastEditors
 * @Description: el-tab混入
 * @FilePath: /pro03/src/components/TableMixins.vue
-->
<script>
export default {
  props: {
    titles: {
      // 标题数据
      type: Array,
      default: function () {
        return []
      }
    },
    datas: {
      // 列表数据
      type: Array,
      default: function () {
        return []
      }
    },
    loading: {
      // 显示loading
      type: Boolean,
      default: false
    }
  }
}
</script>
