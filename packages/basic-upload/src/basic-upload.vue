<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-11-03 09:28:53
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-04 13:07:04
-->
<template>
  <div>
    <el-upload
      action
      list-type="picture-card"
      :file-list="files"
      :http-request="uploadHandler"
      :before-upload="onBeforeUpload"
      :on-preview="onPreview"
      :before-remove="beforeRemove"
      :on-remove="onRemove"
    >
      <i class="el-icon-plus"></i>
      <div slot="tip" class="el-upload__tip">上传说明：支持 .jpg .jpeg .png .svg .bmp 格式</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import ajax from './ajax'
export default {
  name: 'basicUpload',
  props: {
    fileList: Array,
    httpRequest: {
      type: Function,
      default: ajax
    }
  },
  data() {
    return {
      files: [],
      tempFiles: [],

      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  watch: {
    fileList(value) {
      const processedFileList = JSON.parse(JSON.stringify(value))
      this.files = processedFileList
      this.tempFiles = processedFileList
    }
  },
  methods: {
    async uploadHandler (file) {
      try {
        const formData = new FormData()
        formData.append('file', file.file)

        const { data } = await this.httpRequest(formData)
        this.tempFiles = [
          ...this.tempFiles,
          { name: file.file.name, url: data }
        ]
        this.onEmit({
          fileList: this.tempFiles.map(({ url }) => url)
        })
      } catch (err) {
        console.log('upload error', err)
      }
    },
    // 上传文件之前的钩子，参数为上传的文件
    onBeforeUpload(file) {
      if (!(['image/jpg', 'image/jpeg', 'image/png', 'image/svg', 'image/bmp'].indexOf(file.type) > -1)) {
        this.$message.error('只能上传 jpg、jpeg、png、svg、bmp 格式的文件')
        return false
      }
      if (file.size / 1024 / 1024 > 5) {
        this.$message.error('上传图片大小不能超过 5M')
        return false
      }
      return true
    },
    // 点击文件列表中已上传的文件时的钩子
    onPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定要移除 ${file.name}？`)
    },
    // 文件列表移除文件时的钩子
    onRemove(file, fileList) {
      this.tempFiles = this.tempFiles.filter(({ name }) => name !== file.name)
      this.onEmit({
        fileList: this.tempFiles.map(({ url }) => url)
      })
    },
    onEmit({ fileList }) {
      this.$emit('upload', fileList)
    }
  }
}
</script>
