<!--
 * @Descripttion:
 * @Author: shendan
 * @Date: 2020-10-29 15:15:29
 * @LastEditors: shendan
 * @LastEditTime: 2020-11-04 10:14:02
-->
<script>
import basicInput from '../../basic-input'
import basicSelect from '../../basic-select'
import basicDatepicker from '../../basic-datepicker'
import basicSwitch from '../../basic-switch'
import basicTextarea from '../../basic-textarea'
import basicRadioGroup from '../../basic-radio-group'
import basicCheckboxGroup from '../../basic-checkbox-group'
import basicRegionCascader from '../../basic-region-cascader'
import basicUpload from'../../basic-upload'

import ajax from '../../basic-upload/src/ajax'

export default {
  name: 'basicForm',
  components: {
    basicInput,
    basicSelect,
    basicDatepicker,
    basicSwitch,
    basicTextarea,
    basicRadioGroup,
    basicCheckboxGroup,
    basicRegionCascader,
    basicUpload
  },
  props: {
    formModel: Object,
    formItemList: Array,
    fileList: Array,
    httpRequest: {
      type: Function,
      default: ajax
    },
    refName: {
      type: String,
      default: 'form'
    },
    // 表单域标签的宽度
    labelWidth: {
      type: Number,
      default: 100
    },
    formInline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formRef: null
    }
  },
  mounted() {
    this.formRef = this.$refs[this.refName]
  },
  methods: {
    //
  },
  render() {
    const showComponent = (item) => {
      const basicType = item.basicType
      const value = this.formModel[item.key]
      const hanlder = (value) => { this.formModel[item.key] = value }

      switch (basicType) {
        case 'basic-input':
          return (
            <basicInput
              value={value}
              onInput={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-select':
          return (
            <basicSelect
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-textarea':
          return (
            <basicTextarea
              value={value}
              onInput={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-region-cascader':
          return (
            <basicRegionCascader
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-datepicker':
          return (
            <basicDatepicker
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-switch':
          return (
            <basicSwitch
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-checkbox-group':
          return (
            <basicCheckboxGroup
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-radio-group':
          return (
            <basicRadioGroup
              value={value}
              onChange={hanlder}
              {...{ props: item }}
            />
          )
        case 'basic-upload':
          return (
            <basicUpload
              fileList={this.fileList}
              httpRequest={this.httpRequest}
              onUpload={hanlder}
            />
          )
      }
    }
    return (
      <div>
        <el-form
          ref={this.refName}
          props={{ model: this.formModel }}
          inline={this.formInline}
          labelWidth={`${this.labelWidth}px`}
        >
          {
            this.formItemList.map((item, index) => {
              return (
                <el-form-item
                  key={`formItem_${index}`}
                  label={`${item.label}：`}
                  prop={item.key}
                  rules={item.rules}
                >
                  { showComponent(item) }
                </el-form-item>
              )
            })
          }
          <el-form-item>
            {
              this.$scopedSlots.formButtons({
                formRef: this.formRef
              })
            }
          </el-form-item>
        </el-form>
      </div>
    )
  }
}
</script>

