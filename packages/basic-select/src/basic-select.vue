<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 15:29:41
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 17:48:55
-->
<template>
  <el-select
    :value="value"
    @change="changeHandler"
    :multiple="multiple"
    :disabled="disabled"
    :value-key="valueKey"
    :clearable="clearable"
    :placeholder="placeholder"
    :filterable="filterable"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'basicSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: false
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
