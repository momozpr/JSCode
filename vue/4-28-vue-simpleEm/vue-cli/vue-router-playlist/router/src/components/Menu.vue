<template>
    <h1>Menu</h1>
</template>

// 设置组件内守卫
<script>
export default {
    data(){
        return{
            name:"Hery"
        }
    },
    // 组件开始前

    // beforeRouteEnter:(to,from,next)=>{
    //     // 由于比数据先加载所以无法获得实际数值
    //     // alert("Hello "+this.name);
        
    //     // 使用next()相当于异步，故可以获得data
    //     next(vm=>{
    //         alert("Hello "+vm.name);
    //     })
    // }

    // 离开组件前
    beforeRouteLeave:(to,from,next)=>{
        if(confirm('是否离开？')){
            next();
        }
        else{
            next(false);
        }
    }
}
</script>
