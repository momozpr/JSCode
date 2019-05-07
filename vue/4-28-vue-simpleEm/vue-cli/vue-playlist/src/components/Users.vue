<template>
  <div class="users">
      <h1>用户</h1>
      <ul>
          <li v-for="user in users" :key="user.id" v-on:click="user.show = !user.show">
              <h2>{{user.name}}</h2>
              <h3 v-show="user.show">{{user.position}}</h3>
          </li>
      </ul>
      <button v-on:click="deleteUsers">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    deleteUsers(){
      this.users.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// 域可以限制css的使用范围
<style scoped>
/* h1{
    color:green;
} */
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
