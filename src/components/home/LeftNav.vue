<template>
  <h2>这是左边导航</h2>
  <a-menu
    id="dddddd"
    style="width: 256px"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="handleClick"
    v-for="(item, index) in studentlist.menulist"
    :key="index"
  >
    <a-sub-menu key="sub1" @titleClick="titleClick($event)">
      <template #icon>
        <SolutionOutlined />
      </template>

      <template #title :index-path="item.path"
        ><span :index-path="item.path">{{ item.name }}</span></template
      >

      <a-menu-item :key="index" v-for="(item2, index) in item.child"
        ><template #icon><TeamOutlined /></template
        ><span
          :index-path="item2.path"
          ref="linkpage"
          @click.stop="linkpageone($event)"
          >{{ item2.name }}</span
        ></a-menu-item
      >
    </a-sub-menu>
  </a-menu>
</template>

<script>
// import { createFromIconfontCN } from '@ant-design/icons-vue'
import { SolutionOutlined, TeamOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "@vue/reactivity";
import { getCurrentInstance, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "leftnav",
  components: {
    SolutionOutlined,
    TeamOutlined,
  },
  setup() {
    const { proxy, ctx } = getCurrentInstance();
    const router = new useRouter();
    const studentlist = reactive({
      menulist: [
        {
          name: "学生管理",
          path: "student",
          child: [
            { name: "学生列表", path: "studentlist" },
            { name: "成绩列表", path: "worklist" },
            { name: "信息列表", path: "infolist" },
          ],
        },
        { name: "作业列表", child: [] },
        { name: "信息列表", child: [] },
        { name: "可视化", child: [], path: "echarts" },
        { name: "可视化1", child: [], path: "echarts1" },
        { name: "滚动图表可视化案例", child: [], path: "echarts2" },
        { name: " 晋城高速综合管控大数据", child: [], path: "echarts3" },
        {name:"服务大数据管理平台", child: [], path: "one"},
        {name:"滚动table", child: [], path: "two"}
      ],
      name: "hello",
    });
    const openKeys = reactive([]);
    const selectedKeys = reactive([]);
    const linkpage = ref(null);
    function handleClick(event) {}
    function linkpageone(event) {
      const path = event.target.getAttribute("index-path");
      // console.log(path)
      router.push(path);
      //  console.log(event.target.getAttribute('index-path'))
    }
    function titleClick(event) {
      let path = event.target.getAttribute("index-path");
      console.log(path, "path-----");
      if (path == "echarts") {
        router.push("/echarts");
        return
      }
      else if (path == "echarts1") {
        router.push("/echarts1");
        return
      }
      else if (path == "echarts2") {
        router.push("/echarts2");
        return
      }
      else if (path == "echarts3") {
        router.push("/echarts3");
        return
      }else if (path == "one") {
        router.push("/one");
        return
      }else if (path == "two") {
        router.push("/two");
        return
      }
    }
    function addIcon() {}
    onMounted(() => {
      proxy.addIcon();
    });
    return {
      studentlist,
      openKeys,
      selectedKeys,
      handleClick,
      linkpageone,
      titleClick,
      linkpage,
      addIcon,
    };
  },
};
</script>

<style scoped lang="scss"></style>
