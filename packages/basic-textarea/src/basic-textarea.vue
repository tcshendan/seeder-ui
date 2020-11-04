<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 17:21:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:32:20
-->
<template>
  <el-input
    type="textarea"
    :value="value"
    @input="inputHandler"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    :placeholder="placeholder"
    :disabled="disabled"
    :autosize="{ minRows: 3, maxRows: 6 }"
    :readonly="readonly"
  />
</template>

<script>
export default {
  name: 'basicTextarea',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    maxlength: Number,
    showWordLimit: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
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

