/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:23:55
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-04 14:23:36
 */
import basicInput from './basic-input'
import basicSelect from './basic-select'
import basicDatepicker from './basic-datepicker'
import basicSwitch from './basic-switch'
import basicTextarea from './basic-textarea'
import basicRadioGroup from './basic-radio-group'
import basicCheckboxGroup from './basic-checkbox-group'
import basicRegionCascader from './basic-region-cascader'
import basicUpload from './basic-upload'
import basicForm from './basic-form'

const components = [
  basicInput,
  basicSelect,
  basicDatepicker,
  basicSwitch,
  basicTextarea,
  basicRadioGroup,
  basicCheckboxGroup,
  basicRegionCascader,
  basicUpload,
  basicForm
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  basicInput,
  basicSelect,
  basicDatepicker,
  basicSwitch,
  basicTextarea,
  basicRadioGroup,
  basicCheckboxGroup,
  basicRegionCascader,
  basicUpload,
  basicForm
}
export default {
  install,
  basicInput,
  basicSelect,
  basicDatepicker,
  basicSwitch,
  basicTextarea,
  basicRadioGroup,
  basicCheckboxGroup,
  basicRegionCascader,
  basicUpload,
  basicForm
}
