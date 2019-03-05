<template>
  <li class="inner" @click="deleteHandler">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    deleteHandler () {
      this.$emit('delete', this.index)
    }
  }
}
</script>
<!-- 不加scored会导致样式全局化 -->
<style scored>
  .inner{
    color:green
  }
</style>
