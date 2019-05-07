<template>
<!-- 注意binding.arg:column,binding.value:'wide'(别忘了'') -->
  <div id="show-blog" v-theme:column="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="blog in filterSearchBlog" :key="blog.id" class="single-blog">
          <!-- 自定义指令 -->
          <h2 v-rainbow>{{blog.title | to-upcase}}</h2>
          <article>{{blog.body | sinnpet}}</article>
      </div>
  </div>
</template>

<script>

export default {
  name: 'show-blog',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
    //   请求本地的数据:文件要放在static下面
    this.$http.get('./../static/posts.json')
    // 请求网路的数据
    //   this.$http.get('http://jsonplaceholder.typicode.com/posts')
      .then(function(data){
        //   console.log(data);
            this.blogs = data.body.slice(0,10);
            console.log(this.blogs);
      })
  },
  computed:{
      filterSearchBlog(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  },
//   局部命令:好像都要加s
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color = '#'+Math.random().toString(16).slice(2,8);
          }
      }
  },
  filters:{
    //   'to-upcase':function(value){
    //       return value.toUpperCase();
    //   }

    // 驼峰格式
    toUpcase(value){
        return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
