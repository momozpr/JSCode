<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    // fetch
    // fetch('/api/posts/1',{
    //   method:"get",
    //   headers:{
    //     // "Content-type":"application/json",
    //     // token:""
    //   },
    //   // 设置body
    //   // body:JSON.stringify({username:"hery",pwd:"123456"})
    // })
    // .then(result => {
    //   // console.log(result)
    //   return result.json();
    //   // console.log(data);
    // })
    // .then(data =>{
    //   console.log(data);
    // })

    // axios
    this.$axios.get("/api/posts/1").then(data=>{
      console.log(data);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
