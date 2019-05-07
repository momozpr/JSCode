<template>
    <div>
      <ul>
        <li v-for="(item,index) in lists"
          :key="index"
            @click="change(index)"
            :class="{active:current==index&&current!==''}"
        >{{item}}</li>
      </ul>
      <button @click="add">添加</button>
      <ul>
        <li v-for="(item,index) in target"
        :key="index"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      current: '',
      lists: [1, 2, 3, 4, 5, 6, 7],
      target: []
    }
  },
  methods: {
    change (index) {
      this.current = index
    },
    add () {
      if (this.current) {
        this.target.push(this.lists[this.current])
        this.current = ''
      }
    }
  }

}
</script>

<style scoped>
li.active{
  background-color:green
}
</style>
