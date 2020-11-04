<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-02 16:00:14
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:33:38
-->
<template>
  <el-checkbox-group
    v-model="checkList"
    :disabled="disabled"
  >
    <el-checkbox
      v-for="item in options"
      :key="item.value"
      :label="item.value"
    >
      {{ item.name }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'basicCheckboxGroup',
  props: {
    value: Array,
    options: Array,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkList: this.value
    }
  },
  watch: {
    checkList(value) {
      this.$emit('change', this.checkList)
    },
    value(newVal) {
      this.checkList = newVal
    }
  }
}
</script>

<style lang="less" scoped>

</style>
