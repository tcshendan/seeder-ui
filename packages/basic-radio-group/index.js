/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:27:53
 */
import basicRadioGroup from './src/basic-radio-group.vue'

basicRadioGroup.install = function(Vue) {
  Vue.component(basicRadioGroup.name, basicRadioGroup)
}

export default basicRadioGroup
