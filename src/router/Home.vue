<template>
  <div class="home">
    <div class="head">
      <head-nav></head-nav>
    </div>
    <div class="main">
      <div class="left">
        <left-nav></left-nav>
      </div>
      <div class="right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import Home from "../components/home/Home.vue";
import HeadNav from "../components/home/Head.vue";
import LeftNav from "../components/home/LeftNav.vue";
export default {
  components: {
    Home,
    HeadNav,
    LeftNav,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  // background-color: rgb(191, 240, 172);
  height: 100vh;
  width: 100vw;
  
}
.main {
  display: flex;
  // background-color: rgb(245, 215, 215);
  flex: 1;
  overflow-y:scroll ;
}
.main .left {
  // background-color: rgb(125, 137, 240);
  padding: 20px;
  top: 0px;
  position: sticky;
  
}
.right {
  margin: 20px;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  // overflow-y: scroll;
  // border:2px solid #000;
  // background-clip:border-box;
  box-sizing: content-box;
}
.head {
  padding: 0 20px;
  // background-color: rgb(154, 224, 241);
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
}
</style>
