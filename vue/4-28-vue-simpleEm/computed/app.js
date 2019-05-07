new Vue ({
    el:"#vue-app",
    data:{
        a:0,
        b:0,
        age:20
    },
    methods:{
        // method中的方法会同时全部加载
        /*addToA(){
            console.info("addToA");
            return this.a + this.age;
        },
        addToB(){
            console.info("addToB");
            return this.b + this.age;
        }*/
    },
    computed:{
        addToA(){
            console.info("addToA");
            return this.a + this.age;
        },
        addToB(){
            console.info("addToB");
            return this.b + this.age;
        }
    }

});