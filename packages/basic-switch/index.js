/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 18:30:25
 */
import basicSwitch from './src/basic-switch'

basicSwitch.install = function(Vue) {
  Vue.component(basicSwitch.name, basicSwitch)
}

export default basicSwitch
