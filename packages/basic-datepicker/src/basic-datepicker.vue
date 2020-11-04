<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 15:06:26
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-02 15:08:40
-->
<template>
  <el-date-picker
    :value="value"
    @input="changeHandler"
    :readonly="readonly"
    :disabled="disabled"
    :clearable="clearable"
    :placeholder="placeholder"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :type="type"
    :format="format"
    :picker-options="pickerOptions"
    :range-separator="rangeSeparator"
    :value-format="valueFormat"
  />
</template>

<script>
export default {
  name: 'basicDatepicker',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Array],
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    type: {
      type: String,
      default: 'date'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    pickerOptions: Object,
    rangeSeparator: {
      type: String,
      default: '-'
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    }
  },
  data() {
    return {
      //
    }
  },
  methods: {
    changeHandler(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
