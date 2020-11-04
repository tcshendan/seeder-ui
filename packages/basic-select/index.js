/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 17:49:02
 */
import basicSelect from './src/basic-select'

basicSelect.install = function(Vue) {
  Vue.component(basicSelect.name, basicSelect)
}

export default basicSelect
