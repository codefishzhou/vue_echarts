<script setup>
</script>

<template>
<div class="app">
  <router-view></router-view>
</div>
</template>

<style scoped lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-y: scroll;
}
.app{
  display: flex;
  flex-direction: column;
  // background-color: rgba(204, 186, 21, 0.5);
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
}
</style>
