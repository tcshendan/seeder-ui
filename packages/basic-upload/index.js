/*
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 15:22:15
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-04 09:52:03
 */
import basicUpload from './src/basic-upload'

basicUpload.install = function(Vue) {
  Vue.component(basicUpload.name, basicUpload)
}

export default basicUpload
