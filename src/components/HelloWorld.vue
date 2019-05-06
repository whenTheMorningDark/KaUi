<template>
  <div class="hello">
    <ka-button></ka-button>
    <ka-button type="primary">
      使用的按钮
    </ka-button>
    <ka-button type="success">
      编辑
    </ka-button>
    <ka-button type="info"></ka-button>
    <ka-button type="warning"></ka-button>
    <ka-button type="danger"></ka-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
