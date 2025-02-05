<template>
  <h2 @click="linkpage">welcome to my project</h2>
  <h3>was designed to learn with echarts and vue3</h3>
</template>
<script>
import { defineComponent } from "@vue/runtime-core"

//   // name: "home",

// })
import { useRouter } from "vue-router"
export default defineComponent({
  setup() {
    name:'home'
    const that = this
    const router = useRouter()
    const linkpage = ()=>
      {console.log("跳转页面")
      console.log(router.push('/four'))
      }
    return {
      linkpage
    }
  },
  props:{
      msg:String
    }
})
</script>



<style scoped>
a {
  color: #42b983;
}
</style>
