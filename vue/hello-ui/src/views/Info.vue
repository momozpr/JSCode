<template>
    <div>
      <h1>Info</h1>
      <button @click="add()">提交</button>
    </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Info',
  store,
  methods: {
    add () {
      store.commit('increate')
    }
  }
}
</script>

<style scoped>

</style>
