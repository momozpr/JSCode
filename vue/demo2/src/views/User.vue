<template>
    <div>
      <input type="button" @click="toAdd" value="添加">
    </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    toAdd () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>

</style>
