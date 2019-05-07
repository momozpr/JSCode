// 1.模板：html结构
<template>
  <div id="app">
    <ul>
      <!-- a标签会重新跳转,router-link则那个刷新的圈圈不会转 -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/hello">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
// 2.行为：处理逻辑
<script>


export default {
  name: 'App'
}
</script>
// 3.样式：解决样式
<style>

</style>
