<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 14:51:22
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 19:43:44
-->
<template>
  <el-cascader
    :value="selectedArea"
    @change="changeHandler"
    :options="options"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :show-all-levels="showAllLevels"
  />
</template>

<script>
import {
  regionData,
  CodeToText,
  TextToCode
} from 'element-china-area-data'
export default {
  name: 'basicRegionCascader',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    showAllLevels: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 省市区数据
      options: regionData,
      selectedArea: []
    }
  },
  watch: {
    value(newVal) {
      if (newVal === '') {
        this.selectedArea = []
      } else {
        this.selectedArea = this.convertChineseToRegionCode(newVal)
      }
    }
  },
  methods: {
    changeHandler(value) {
      this.$emit('change', this.convertRegionCodeToChinese(value))
    },
    // 区域码转成中文
    convertRegionCodeToChinese(regionCodes) {
      if (regionCodes.length === 0) return ''

      const [province, city, District] = regionCodes
      if (regionCodes.length === 1) {
        return CodeToText[province]
      } else if (regionCodes.length === 2) {
        return [CodeToText[province], CodeToText[city]].join('/')
      } else {
        return [CodeToText[province], CodeToText[city], CodeToText[District]].join('/')
      }
    },
    // 中文转成区域码
    convertChineseToRegionCode(chineseValue = '浙江省/杭州市/滨江区') {
      const result = chineseValue.split('/')
      if (result.length === 1) {
        return [
          TextToCode[result[0]].code
        ]
      } else if (result.length === 2) {
        return [
          TextToCode[result[0]].code,
          TextToCode[result[0]][result[1]].code
        ]
      } else {
        return [
          TextToCode[result[0]].code,
          TextToCode[result[0]][result[1]].code,
          TextToCode[result[0]][result[1]][result[2]].code
        ]
      }
    }
  }
}
</script>
