<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-02 15:30:04
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:32:27
-->
<template>
  <el-switch
    :value="value"
    @change="changeHandler"
    :disabled="disabled"
    :active-value="activeValue"
    :inactive-value="inactiveValue"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
  />
</template>

<script>
export default {
  name: 'basicSwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [Boolean, String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveColor: {
      type: String,
      default: '#C0CCDA'
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
