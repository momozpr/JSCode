<template>
  <div id="add-blob">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required/>

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories" />
            <label>Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories" />
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.categories" />
            <label>Angular4</label>
            <input type="checkbox" value="Angular4" v-model="blog.categories" />
        </div>

        <label>作者</label>
        <select v-model="blog.author">
          <option v-for="(author,index) in authors" :key="index">
            {{author}}
          </option>
        </select>
        <!-- 阻止页面刷新 -->
        <button @click.prevent="post">添加博客</button>
      </form>
      <div v-if="submmited">
        <h3>您的博客发布成功！</h3>
      </div>

      <hr/>

      <div id="preview">
          <h3>博客预览</h3>
          <p>博客标题：{{blog.title}}</p>
          <p>博客内容：</p>
          <p>{{blog.content}}</p>
          <p>博客分类：</p>
          <ul>
            <!-- 使用元素自身的id不影响其他元素，key和index会影响其他元素 -->
            <li v-for="(category,index) in blog.categories" :key="index">
              {{category}}
            </li>
          </ul>
          <p>作者：{{blog.author}}</p>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'add-blob',
  data () {
    return {
      blog:{
          title:"",
          content:"",
          categories:[],
          author:""
      },
      authors:["Zola","Zpr","Mary"],
      submmited:false
    }
  },
  methods:{
    post(){
      this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        userId:1,
        title:this.blog.title,
        body:this.blog.content
      })
      .then(function(data){
        console.log(data);
        this.submmited = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blob *{
  box-sizing: border-box;
}

#add-blob{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0; 
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 15px;
  /* 鼠标手 */
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px; 
}
</style>
