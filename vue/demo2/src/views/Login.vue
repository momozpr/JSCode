<template>
  <div>
    <form v-if="!flag">
      <div>姓名</div>
      <input type="text" v-model="name">
      <div>密码</div>
      <input type="password" v-model="password"><br/>
      <button @click="login()">登陆</button>
      <button @click="reg()">注册</button>
    </form>
    <form v-else="flag">
      <div>姓名</div>
      <input type="text" v-model="name">
      <div>密码</div>
      <input type="password" v-model="password">
      <div>再次输入密码</div>
      <input type="password" v-model="repeat"><br/>
      <button @click="addUser">确认</button>
      <button @click="cancle">取消</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      flag: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    reg () {
      this.flag=true
    },
    login () {
      if(this.name === localStorage.getItem("name") && this.password === localStorage.getItem("password")){
        this.$router.push('/home/list')
      }
    },
    cancle () {
      this.flag = false
    },
    addUser () {
      if(this.password === this.repeat){
        localStorage.setItem('name',this.name)
        localStorage.setItem('password',this.password)
        this.name = ''
        this.password = ''
        this.flag=false
      }else{
        alert('两次密码不相同')
        this.password=''
        this.repeat=''
      }
    }
  }
}
</script>

<style scoped>

</style>
