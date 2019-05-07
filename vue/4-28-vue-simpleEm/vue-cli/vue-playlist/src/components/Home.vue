// 1.模板：html结构
<template>
  <!-- 只有一个根标签 -->
  <div id="home">
    <Header></Header>
    <users v-bind:users="users"></users>
    <Footer></Footer>
  </div>
</template>
// 2.行为：处理逻辑
<script>
// 让两个组件产生关联，导入import：可以看作一个功能
// import HelloWorld from './components/HelloWorld'
// 局部组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  // 注册组件
  components: {
    // HelloWorld
    // 不能取与系统标签冲突的名字
    "users":Users,
    Header,
    Footer
  },
  data(){
    return {
      msg:"这是我的第一个Vue脚手架",
      users:[
         
      ]
    }
  },
  created(){
    //   请求数据
      this.$http.get("http://jsonplaceholder.typicode.com/users")
                .then((data)=>{
                    // console.log(data);
                    this.users = data.body;
                })
  }
//   },
//   beforeCreate(){
//     alert("组件实例化前执行的函数");
//   },
//   created(){
//     alert("组件实例化后执行的函数");
//   },
//   beforeMount(){
//     alert("组件挂载前，页面仍未显示，但是虚拟dom已经配置");
//   },
//   mounted(){
//     alert("组件挂载后，页面显示");
//   },
//   beforeUpdate(){
//     alert("组件更新前，页面仍未显示，但是虚拟dom已经配置");
//   },
//   updated(){
//     alert("组件更新后，页面显示");
//   },
//   BeforeDestory(){
//     alert("组件销毁前");
//   },
//   destroyed(){
//     alert("组件销毁");
//   }
}
</script>
// 3.样式：解决样式
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
h1{
  color:purple;
}
</style>
