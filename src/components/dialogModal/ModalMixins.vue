<script>
export default {
  props: {
    dialogVisible: {
      // 控制模态框显隐，默认隐藏
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
  methods: {
    /**
     * 关闭模态框
     */
    closeModal() {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>
