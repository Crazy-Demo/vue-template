<!--
 * @Author: your name
 * @Date: 2020-05-06 19:52:18
 * @LastEditTime: 2020-07-09 13:52:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pro03/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :data="partten" />
    <cus-table
      :datas="listStore.data.list"
      :titles="listStore.data.titles"
      @handle-selection-change="tabReturnData"
      :loading.sync="loading"
    >
      <template v-slot:fore>
        <el-table-column type="selection" width="55"></el-table-column>
      </template>
      <template v-slot:tail>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.prevent="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </cus-table>
    <video-components :video-url="url" v-if="videoShow"></video-components>
    <el-button @click="setUrl">设置</el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import cusTable from '@/components/customizeElTable/CustomizeElTable.vue'
import { partten } from '@/utils/partten'
import { indexAndValue } from '@/utils/indexToValue'
import videoComponents from '@/components/VideoComponents.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    cusTable,
    videoComponents
  },
  computed: {
    ...mapState(['listStore'])
  },
  data () {
    return {
      loading: true,
      partten: partten.textLength,
      url: '',
      videoShow: false
    }
  },
  mounted () {
    console.log(indexAndValue)
  },
  methods: {
    ...mapActions('listStore', ['getList']),
    /**
     * @description: 全选
     * @param Array data:选中项
     * @return: null
     */
    tabReturnData (data) {
      // 全选
      this.listStore.data.tabRtData = data
    },

    /**
     * @description: 删除
     * @param rowData 行数据
     * @return:
     */
    del (rowData) {
      const index = this.listStore.data.list.findIndex(
        item => item === rowData
      )
      this.listStore.data.list.splice(index, 1)
      console.log(partten.textLength)
    },

    setUrl () {
      this.url =
        'https://az29176.vo.msecnd.net/videocontent/CanadaDay_1920x1080_G_1078467500_HD_ZH-CN.mp4'
      this.videoShow = true
    }
  }
  /* mounted () {
    // this.getList()
    // console.log(partten)
  } */
}
</script>
