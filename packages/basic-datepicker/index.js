/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:25:31
 */
import basicDatepicker from './src/basic-datepicker'

basicDatepicker.install = function(Vue) {
  Vue.component(basicDatepicker.name, basicDatepicker)
}

export default basicDatepicker
