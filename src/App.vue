<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
*{
    margin: 0;padding: 0;
  }
  body {
    margin:0;padding:0;
  }
#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
}
.logoBox img{
       width: 5%; 
}
.logoBox{
    display: flex;
    align-items: center;
}
.logoBox p{
    font-size: 22px;
    margin-left: 1%;
}
</style>
