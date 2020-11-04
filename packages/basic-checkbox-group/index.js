/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:23:47
 */
import basicCheckboxGroup from './src/basic-checkbox-group'

basicCheckboxGroup.install = function(Vue) {
  Vue.component(basicCheckboxGroup.name, basicCheckboxGroup)
}

export default basicCheckboxGroup
