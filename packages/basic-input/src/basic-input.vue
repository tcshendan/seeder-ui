<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 15:06:26
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 17:48:46
-->
<template>
  <el-input
    :value="value"
    @input="inputHandler"
    :maxlength="maxlength"
    :minlength="minlength"
    :placeholder="placeholder"
    :clearable="clearable"
    :disabled="disabled"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :readonly="readonly"
  />
</template>

<script>
export default {
  name: 'basicInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    maxlength: Number,
    minlength: Number,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    readonly: {
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
    inputHandler(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
