<template>
  <div class="footers">
    <footer>
        <p>{{copyright}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
      copyright:"Vue.js Demo"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer p{
    color: lightgreen;
    text-align: center;
    
}
footer{
    background: #222;
    padding:10px;
}
</style>
