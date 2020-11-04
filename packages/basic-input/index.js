/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-04 09:51:45
 */
import basicInput from './src/basic-input'

basicInput.install = function(Vue) {
  Vue.component(basicInput.name, basicInput)
}

export default basicInput
