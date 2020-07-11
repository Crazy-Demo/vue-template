/*
 * @Author: your name
 * @Date: 2020-06-04 16:36:40
 * @LastEditTime: 2020-07-07 14:24:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pro03/src/store/user.js
 */
import axios from 'axios'
export default {
  namespaced: true,
  namespace: 'listStore/',
  state: {
    data: {
      list: [], // Home表格数据
      titles: [
        // Home标题
        { label: 'ID', prop: 'id', width: '150' },
        { label: '姓名', prop: 'name', width: '200' },
        { label: '年龄', prop: 'age', width: '200' },
        { label: '性别', prop: 'sex' }
      ],
      tabRtData: [] // 表格选中事件返回数据
    }
  },
  mutations: {
    async getList (state) {
      const { data } = await axios.get('http://localhost:3000/data')
      if (data.status === 0) {
        state.data.list = data.lists
      } else {
        console.log('请求失败')
      }
    }
  },
  actions: {
    getList ({ commit }) {
      commit('getList')
    }
  }
}
