<template>
  <div class="worklist">
    <h2>worklist</h2>
    <div class="classhead">
      <a-tag v-for="(item, index) in 4" :key="index" @click="linkclass(index)"
        >{{ index + 1 }}班</a-tag
      >
    </div>

    <a-table
      :dataSource="info[0].infolist"
      :columns="columns"
      :rowKey="(record) => record.id"
      :footer="footerdata"
    >
      <template #id="{ index }">
        {{ index + 1 }}
      </template>
      <template #default="{ text }">
        {{ text + 1 }}
      </template>
      <template #total="{ record }">
        {{
          record.math +
          record.chinese +
          record.english +
          record.history +
          record.geography +
          record.physics +
          record.politics +
          record.chemistry +
          record.organism
        }}
      </template>
    </a-table>
    <div class="cardmy">
      <a-card
        :title="arr[item - 1]"
        style=""
        v-for="item in 10"
        :key="item"
        :ref="level[item - 1]"
        :class="level[item - 1]"
      >
        <template #extra
          ><a href="#">{{ level[0] }}</a></template
        >
      </a-card>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { getCurrentInstance } from "vue";
import { scorelist } from "../../api/student/scorelist";
// import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "worklist",
  setup() {
    let info = reactive([
      {
        infolist: [{ id: 0 }],
        classId: 0,
      },
    ]);
    let chinese = ref(null);
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive([]);
    let mapdata = reactive({});
    let level = [
      "chinese",
      "math",
      "english",
      "geography",
      "physics",
      "politics",
      "history",
      "organism",
      "chemistry",
    ];
    const arr = ["成绩汇总", "语文成绩", "数学成绩", "英语成绩"];
    scorelist().then((res) => {
      console.log(res.data.data, "-------");
      data.push(...res.data.data[0].classlist);
      info.splice(0, 1, res.data.data[0].classlist[0]);
      let arrdata = datacheck().then(() => {
        console.log(res.data, "arrdata-resdata");
        return res.data;
      });
      console.log(arrdata, "arrdata");
      drawline(arrdata);
    });

    function linkclass(index) {
      // console.log(index);
      info.splice(0, 1, data[index]);
    }
    //获取图表数据
    async function datacheck() {
      const data = await info[0].infolist;
      let arr = {
        chinese: { data: [], name: "chinese", type: "line", stack: "Total" },
        math: { data: [], name: "math", type: "line", stack: "Total" },
        english: { data: [], name: "english", type: "line", stack: "Total" },
        geography: {
          data: [],
          name: "geography",
          type: "line",
          stack: "Total",
        },
        physics: { data: [], name: "physics", type: "line", stack: "Total" },
        politics: { data: [], name: "politics", type: "line", stack: "Total" },
        history: { data: [], name: "history", type: "line", stack: "Total" },
        organism: { data: [], name: "organism", type: "line", stack: "Total" },
        chemistry: {
          data: [],
          name: "chemistry",
          type: "line",
          stack: "Total",
        },
      };
      let level = [
        "chinese",
        "math",
        "english",
        "geography",
        "physics",
        "politics",
        "history",
        "organism",
        "chemistry",
      ];
      let title = [
        "语文",
        "数学",
        "英语",
        "物理",
        "化学",
        "政治",
        "历史",
        "地理",
        "生物",
      ];
      // console.log(data, "--data");
      data.forEach((item, index) => {
        for (let i = 0; i < level.length; i++) {
          const temp = item[level[i]];
          const a = level[i];
          arr[a].data.push(temp);
        }
      });
      mapdata = reactive({ arr });
      //元数据arr
      console.log(arr);
      return arr;
    }
    //表尾数据
    const footerdata = () => {};
    function drawline(arrdata) {
      console.log(ctx.$refs.chinese, "chinese");
      let chartDom = document.querySelector(".chinese");
      console.log(proxy.$echarts);
      let myChart = proxy.$echarts.init(chartDom);
      let option;
      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [arrdata.chinese, arrdata.math],
      };
      option && myChart.setOption(option);
      // 基于准备好的dom，初始化echarts实例
      // this.myChar = proxy.$echarts.init(proxy.$refs.chinese);
      // this.myChar.setOption({
      //   //标题
      //   title: { text: "我的第一个图" },
      //   tooltip: {},
      //   xAxis: {
      //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //   },
      //   //下载工具，可以另存为图片
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {},
      //     },
      //   },
      //   //图例
      //   legend: {
      //     data: ["销量"],
      //     type: "scroll",
      //     show: true,
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: "销量",
      //       type: "bar",
      //       data: [5, 20, 36, 10, 10, 20],
      //       color: [
      //         "#dd6b66",
      //         "#759aa0",
      //         "#e69d87",
      //         "#8dc1a9",
      //         "#ea7e53",
      //         "#eedd78",
      //       ],
      //     },
      //   ],
      // });
    }
    const columns = [
      {
        title: "id",
        slots: { title: "id", customRender: "id" },
      },
      {
        title: "姓名",
        dataIndex: "name",
      },
      {
        title: "语文",
        dataIndex: "chinese",
      },
      {
        title: "数学",
        dataIndex: "math",
      },
      {
        title: "英语",
        dataIndex: "english",
      },
      {
        title: "物理",
        dataIndex: "geography",
      },
      {
        title: "化学",
        dataIndex: "physics",
      },
      {
        title: "政治",
        dataIndex: "politics",
      },
      {
        title: "历史",
        dataIndex: "history",
      },
      {
        title: "地理",
        dataIndex: "organism",
      },
      {
        title: "生物",
        dataIndex: "chemistry",
      },
      {
        title: "总分",
        slots: { title: "total", customRender: "total" },
      },
    ];

    return {
      info,
      columns,
      data,
      arr,
      mapdata,
      level,
      chinese,
      drawline,
      footerdata,
      linkclass,
    };
  },
};
</script>

<style scoped lang="scss">
.worklist {
  .classhead {
    cursor: pointer;
  }
  .cardmy {
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    // grid-template-rows: 100px;
    justify-content: space-evenly;
    grid-template-rows: repeat(6, 800px);
    grid-gap: 30px;
    .ant-card:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      // background-color: rgb(216, 120, 120);
    }
  }
}
</style>
