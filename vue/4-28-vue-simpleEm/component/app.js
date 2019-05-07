// 同时更改所有的模板
var data = {
    name:"谢伶"
}
Vue.component('greeting',{
    // 组件中有且只有一个根标签
    template:`
    <p>
        {{name}}：为你战死是我至高无上的荣耀！
        <button v-on:click="changeName">改变名字</button>
    </p>
    `,
    data:function(){
        // 为何使用这种形式的数据模式：如果将data暴露在外会同时更改所有引用模板的数据
        return {
            name:"谢伶"
        }
    },
    methods:{
        changeName:function(){
            this.name = "花城";
        }
    }
})

new Vue({
    el:"#vue-app-one"
})

new Vue({
    el:"#vue-app-two"
})