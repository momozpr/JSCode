<template>
  <div id="app">
    <!-- <add-blob></add-blob> -->
    <show-blog></show-blog>
  </div>
</template>

<script>
import AddBlob from './components/AddBlob'
import ShowBlog from './components/ShowBlog'

export default {
  name: 'App',
  components: {
    AddBlob,ShowBlog
  }
}
</script>

<style>

</style>
