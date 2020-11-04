/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:31:21
 */
import basicTextarea from './src/basic-textarea'

basicTextarea.install = function(Vue) {
  Vue.component(basicTextarea.name, basicTextarea)
}

export default basicTextarea
