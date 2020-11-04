/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-03 19:52:02
 */
import basicRegionCascader from './src/basic-region-cascader'

basicRegionCascader.install = function(Vue) {
  Vue.component(basicRegionCascader.name, basicRegionCascader)
}

export default basicRegionCascader
