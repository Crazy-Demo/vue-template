<!--
 * @Description: 对话框 cusContainer插槽为自定义内容 title:自定义提示信息，showMsg:为需要展示的信息
 * @FilePath: /vt_client_new/src/components/DialogModal.vue
-->
<template>
  <div class="modal-wrapper">
    <el-dialog
      :title="titleName === 'null' ? '' : titleName"
      :class="[titleName === 'null' ? 'audit-dialog-no' : 'audit-dialog']"
      :visible.sync="dialogVisibleStatus"
      :width="width"
      @close="closeModal"
    >
      <slot name="cusContainer">{{ showMsg }}</slot>
      <span v-if="dialogFoot" slot="footer" class="dialog-footer audit-dialog-footer">
        <el-button @click="closeModal">取消</el-button>
        <el-button type="primary" class="audit-btn" @click="determine">确定</el-button>
      </span>
      <span v-if="!dialogFoot && dialogFix" slot="footer" class="dialog-footer">
        <el-button type="primary" class="audit-btn" @click="determine">确定</el-button>
      </span>
      <span v-if="!dialogFoot && dialogCal" slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import ModalMixins from '@/components/ModalMixins.vue'
export default {
  mixins: [ModalMixins],
  props: {
    titleName: {
      // 标题名称
      type: String,
      default: 'null'
    },
    showMsg: {
      // 展示的信息
      type: String,
      default: ''
    },
    width: {
      // 宽度
      type: String,
      default: '510px'
    },
    dialogFoot: {
      // 显示取消和确定按钮
      type: Boolean,
      default: true
    },
    dialogFix: {
      // 只显示确定按钮
      type: Boolean,
      default: false
    },
    dialogCal: {
      // 只显示取消按钮
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisibleStatus: false
    }
  },
  watch: {
    dialogVisible (newValue, oldValue) {
      // 避免直接修改dialogVisibleStatus
      this.dialogVisibleStatus = newValue
    }
  },
  methods: {
    /**
     * @description: 确定事件
     * @param null
     * @return: null
     */
    determine () {
      this.$emit('determine', false) // 触发组件上的determine事件
    }
  }
}
</script>
<style scoped lang="scss">
/deep/.audit-dialog-no {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 20px 30px 30px 30px;
  }
}
/deep/ .audit-dialog {
  .el-dialog__header {
    height: 30px;
    .el-dialog__title {
      line-height: 30px;
      display: inline-block;
      color: #031129;
    }
  }
  .el-dialog__body {
    padding: 20px;
  }
  .el-dialog__footer {
    border-top: 1px solid #e9ebef;
  }
}
</style>
