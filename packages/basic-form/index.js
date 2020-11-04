/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:40:06
 */
import basicForm from './src/basic-form'

basicForm.install = function(Vue) {
  Vue.component(basicForm.name, basicForm)
}

export default basicForm
