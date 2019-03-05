<template>
  <div id="app">
    <input v-model="inputObj" class="inner" />
    <button @click="add">提交</button>
    <ul>
      <todoItem
        v-for="(item,index) of list"
        :content="item"
        :index="index"
        :key="index"
        @delete="vueHandler"
      ></todoItem>
    </ul>
  </div>
</template>

<script>
import todoItem from './components/todoItem'
export default {
  components: {
    'todoItem': todoItem
  },
  data () {
    return {
      inputObj: '',
      list: []
    }
  },
  methods: {
    add () {
      this.list.push(this.inputObj)
      this.inputObj = ''
    },
    vueHandler (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
