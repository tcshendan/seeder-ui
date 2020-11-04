<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-02 17:05:14
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:27:44
-->
<template>
  <el-radio-group
    v-model="radio"
    :disabled="disabled"
  >
    <el-radio
      v-for="item in options"
      :key="item.value"
      :label="item.value"
    >
      {{ item.name }}
    </el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'basicRadioGroup',
  props: {
    value: [String, Number, Boolean],
    options: Array,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radio: this.value
    }
  },
  watch: {
    radio(value) {
      this.$emit('change', this.radio)
    },
    value(newVal) {
      this.radio = newVal
    }
  }
}
</script>

<style lang="less" scoped>

</style>

