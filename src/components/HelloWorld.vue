<template>
  <div class="hello">
    <ka-button></ka-button>
    <ka-button type="primary">
      使用的按钮
    </ka-button>
    <ka-button type="success">
      编辑1
    </ka-button>
    <ka-button type="info"></ka-button>
    <ka-button type="warning"></ka-button>
    <ka-button type="danger"></ka-button>

    <div>
      <h3>具有数据校验功能的表单组件——Form</h3>
      <ka-form ref="form" :model="formValidate" :rules="ruleValidate">
        <ka-form-item label="用户名" prop="name">
          <ka-input v-model="formValidate.name"></ka-input>
        </ka-form-item>
        <ka-form-item label="邮箱" prop="mail">
          <ka-input v-model="formValidate.mail"></ka-input>
        </ka-form-item>
      </ka-form>
      <button @click="handleSubmit">提交</button>
      <button @click="handleReset">重置</button>
    </div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [
            { required: false, message: '用户名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            window.alert('提交成功');
          } else {
            window.alert('表单校验失败');
          }
        })
      },
      handleReset () {
        this.$refs.form.resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
