<template>
  <div class="head">
    <span>课程管理系统</span>
   <a-button type="primary" @click="quit">退出</a-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
export default{
setup(){
  const router = new useRouter
  function quit(){
    localStorage.setItem('token',JSON.stringify(''))
    localStorage.setItem('userinfo',JSON.stringify(''))
    router.push('/login')
  }
  return {
    quit
  }
}
}
</script>

<style scoped lang="scss">
.head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: sticky;
  top:0;
  left:0;
  span{
    // background-color: rgb(177, 51, 51);
    font-size: 1.6rem;
    font-weight: 700;
  }
}
</style>