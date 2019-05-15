<template>
  <button class="ka-button"
          @click="handClick"
          :disabled="disable"
          :class="[
            type ? 'ka-button-'+ type : '',
            size ? 'ka-button-'+ size : ''
          ]">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: "KaButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disable: {
      type: Boolean,
      default: false
    },
    size: String
  },
  data () {
    return {

    }
  },
  methods: {
    handClick () {
      // console.log(1);
      this.$emit("click");
    }
  }
}
</script>

<style lang='scss' scoped>
</style>