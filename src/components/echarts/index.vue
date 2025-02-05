<template>
  <div class="infolist">
    <div class="head">
      <span>codefish-班级管理可视化</span>
    </div>
    <div class="mainPart">
      <div class="part1">
        <div class="content1 content">
          <div class="title">班级年龄图</div>
          <div class="chartbox1" ref="boxa"></div>
        </div>
        <div class="content2 content">
          <div class="title">各科成绩</div>
          <div class="chartbox1" ref="boxb"></div>
        </div>
        <div class="content3 content">
          <div class="title">数学成绩</div>
          <div class="chartbox1" ref="boxc"></div>
        </div>
      </div>
      <div class="part2">
        <div class="title">
          <div class="time">{{ nowdate }}</div>
          <div class="time">{{ nowdates }}</div>
        </div>
        <div class="earch">
          <div class="box circlebox"></div>
          <div class="box retatebox"></div>
          <div class="box unretatebox"></div>
          <div class="box chartbox"></div>
        </div>
      </div>
      <div class="part3">
        <div class="content1 content">
          <div class="title">班级总分</div>
          <div class="chartbox1" ref="boxd"></div>
        </div>
        <div class="content2 content">
          <div class="title">总分饼图</div>
          <div class="chartbox1" ref="boxe"></div>
        </div>
        <div class="content3 content">
          <div class="title">图像名称</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import moment, { max } from "moment";
import { StudentInfo } from "../../api/student/studentlist";
import { scorelist } from "../../api/student/scorelist";
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "infolist",
  setup() {
    let nowdates = ref("");
    let boxoptions1 = reactive({});
    const studentName = ref("");
    let n = ref(0);
    return {
      boxoptions1,
      studentName,
      n,
      nowdates,
    };
  },
  data() {
    return {
      studentInfo: [],
      xdataOne: [],
      ydataOne: [],
      scoreList: [],
      copyscorelist: [],
      averageDate: [],
      xdataTwo: [],
      ydataTwo: [],
      timer: {},
      nameDate: [],
      mathData: [],
      englishData: [],
      geographyData: [],
      historyData: [],
      gradeDate: [], //总分
      nowdate: null,
      piedata: [],
      // nowdates:null
    };
  },
  watch: {
    ydataOne: {
      // deep: true,
      deep: true,
      handler(val, oldval) {
        if (val != oldval) {
          setTimeout(() => {
            this.draw();
          }, 10);
        }
      },
    },
    n: {
      deep: true,
      handler(val) {
        if (val == this.scoreList.length - 1) {
          console.log("重新开始");
          this.n = 0;
        }
      },
    },
    ydataTwo: {
      // deep: true,
      deep: true,
      handler(val, oldval) {
        if (val != oldval) {
          setTimeout(() => {
            this.draw();
          }, 10);
        }
      },
    },
    nameDate: {
      // deep: true,
      deep: true,
      handler(val, oldval) {
        if (val != oldval) {
          setTimeout(() => {
            this.draw();
          }, 10);
        }
      },
    },
  },
  methods: {
    crtTimeFtt(val) {
      if (val != null) {
        var date = new Date(val);
        return (
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()
        );
      }
    },
    changeDate() {
      setInterval(() => {
        this.nowdate = this.crtTimeFtt(new Date());
        this.nowdates = moment().format("HH:mm:ss");
      }, 1000);
    },
    //获取数据
    getdata() {
      StudentInfo().then((res) => {
        let x = [];
        let y = [];
        res.data.data.forEach((item, index) => {
          if (index < 200) {
            x.push(item.name);
            y.push(Number(item.age));
          }
        });
        this.xdataOne = x;
        this.ydataOne = y;
        res.data.data.sort((a, b) => {
          return a.classId - b.classId;
        });
        this.studentInfo = res.data.data;
      });
      scorelist().then((res) => {
        // this.scoreList = res.data.data;
        let obj = res.data.data[0].classlist[0].infolist[0];
        this.scoreList = res.data.data[0].classlist[0].infolist;
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        //计算平均分
        this.scoreList.forEach((item) => {
          arr[0] = arr[0] + item.math / this.scoreList.length;
          arr[1] = arr[1] + item.chinese / this.scoreList.length;
          arr[2] = arr[2] + item.english / this.scoreList.length;
          arr[3] = arr[3] + item.geography / this.scoreList.length;
          arr[4] = arr[4] + item.history / this.scoreList.length;
          arr[5] = arr[5] + item.organism / this.scoreList.length;
          arr[6] = arr[6] + item.physics / this.scoreList.length;
          arr[7] = arr[7] + item.chemistry / this.scoreList.length;
          arr[8] = arr[8] + item.politics / this.scoreList.length;
        });
        this.averageDate = arr;
        this.handleDate(obj);
        this.handleGrade();
      });
    },
    // 处理各科
    handleall() {
      this.scoreList.forEach((item) => {
        this.nameDate.push(item.name);
        this.mathData.push(item.math);
        this.englishData.push(item.english);
        this.geographyData.push(item.geography);
        this.historyData.push(item.history);
        this.gradeDate.push(item.grade);
      });
    },
    //处理总分
    handleGrade() {
      let newArr = [];
      this.handleall();
      for (let i = 0; i < this.scoreList.length; i++) {
        let obj = Object.assign({}, this.scoreList[i]);
        delete obj.name;
        delete obj.id;
        var arr = Object.values(obj, (key) => {
          return key != "name" || key != "id";
        });
        this.copyscorelist[i] = 0;
        arr.forEach((item) => {
          this.copyscorelist[i] += item;
        });
        let listarr = [
          400, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 900,
        ];
        this.hanldPieData(listarr, this.copyscorelist);
        //9门
        //400-450
        //450-500
        //500-550
        //550-600
        //600-650
        //650-700 [400,450,500,550,600,650,700]
      }
    },
    //处理饼图数据
    hanldPieData(arr, source) {
      let newarr = [];
      source.forEach((item) => {
        for (let i = 0; i < arr.length; i++) {
          if (item >= arr[i] && item < arr[i + 1]) {
            if (!newarr[i]) {
              newarr[i] = {
                name: "(" + arr[i] + "," + arr[i + 1] + "]",
                value: 0,
              };
            }
            newarr[i].value += 1;
            break;
          }
        }
      });
      this.piedata = newarr;
      console.log(newarr, "newarr----", this.copyscorelist.length);
    },
    // 处理每个人的分数
    handleDate(arrs) {
      let obj = Object.assign({}, arrs);
      this.studentName = arrs.name;
      delete obj.id;
      delete obj.name;
      var arr = Object.values(obj, (key) => {
        return key != "id" || "name";
      });
      var arr1 = Object.keys(obj, (key) => {
        item.grade += key;
        return key != "id" || "name";
      });
      this.xdataTwo = arr1;
      this.ydataTwo = arr;
    },
    draw() {
      let chart1 = echarts.init(this.$refs.boxa);
      let chart2 = echarts.init(this.$refs.boxb);
      let chart3 = echarts.init(this.$refs.boxc);
      let chart4 = echarts.init(this.$refs.boxd);
      let chart5 = echarts.init(this.$refs.boxe);
      this.boxoptions1 = {
        tooltip: {},
        legend: {
          top: "bottom",
        },
        xAxis: {
          data: this.xdataOne,
        },
        toolbox: {
          featureTitle: {
            lineChart: "line",
            barChart: "pie",
          },
        },
        yAxis: {},
        series: [
          {
            name: "年龄",
            type: "line",
            data: this.ydataOne,
          },
        ],
      };
      this.boxoptions2 = {
        tooltip: {},
        xAxis: {
          data: this.xdataTwo,
        },
        title: {
          text: this.studentName,
        },
        yAxis: {},
        legend: {
          top: "bottom",
        },
        dataZoom: {
          //区域缩放器
        },
        grid: {
          show: true,
          // color:'#f40'
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        },
        series: [
          {
            name: "各科分数",
            type: "scatter",
            color: "#f40",
            symbolSize: 4,
            data: this.ydataTwo,
          },
          {
            name: "平均分",
            color: "rgba(63, 135, 213,.3)",
            type: "line",

            symbolSize: 2,
            data: this.averageDate,
            areaStyle: {},
          },
        ],
      };
      this.boxoptions3 = {
        tooltip: {},
        xAxis: {
          data: this.nameDate,
        },
        yAxis: {},

        legend: {
          top: "bottom",
        },
        series: [
          {
            name: "数学分数",
            type: "bar",
            data: this.mathData,
          },
          {
            name: "数学分数",
            type: "line",
            data: this.mathData,
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#fff", // 0% 处的颜色
                },
                // {
                //   offset: 0.3,
                //   color: "#f40", // 0% 处的颜色
                // },
                {
                  offset: 1,
                  color: "blue", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        ],
      };
      this.boxoptions4 = {
        tooltip: {},
        symbolSize: 5,

        legend: {
          top: "bottom",
        },
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "red", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "blue", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        xAxis: {
          data: this.nameDate,
        },
        yAxis: {},
        series: [
          {
            name: "总分",
            type: "bar",
            data: this.copyscorelist,
          markLine:{
            data:[{type:'average',precision:2, label:"平均分",lineStyle:{color:"#fff"}}],
            silent:true
          },
          },
        ],
      };
      this.boxoptions5 = {
        tooltip: {},
        symbolSize: 5,
        roseType: "area",
        itemStyle: {
          borderRadius: 5,
        },
        // legend: {
        //   top: "bottom",
        //   itemWidth: 5,
        //   itemGap: 5,
        //   itemHeight: 10,
        //   orient: "vertical",
        //   right: 0,
        // },
        series: [
          {
            name: "总分",
            type: "pie",
            data: this.piedata,
            radius: ["5%", "60%"],
            center: ["50%", "50%"],
          },
        ],
      };
      chart1.setOption(this.boxoptions1);
      chart2.setOption(this.boxoptions2);
      chart3.setOption(this.boxoptions3);
      chart4.setOption(this.boxoptions4);
      chart5.setOption(this.boxoptions5);
      window.onresize = function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
      };
    },
  },
  created() {
    // require("moment/locale/zh-cn");
    moment.locale("zh-cn");
  },
  beforeMount() {
    this.changeDate();
    this.getdata();
    this.nowdate += moment().endOf("day");
  },
  mounted() {
    this.timer = setInterval(() => {
      this.n++;
      this.scoreList[this.n] && this.handleDate(this.scoreList[this.n]);
    }, 1000);
  },
};
</script>

<style scoped lang="scss">
.infolist {
  position: relative;
  width: 100vw;
  // height: 56.25vw;
  .head {
    top: 0;
    height: 5vw;
    // background-image: linear-gradient(360deg, #070b43, #0e1571);
    background-image: linear-gradient(135deg,  transparent 10px, #2baaca 0);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px -2px 20px #fff inset;
    span {
      color: #fff !important;
      font-size: 1.875vw;
    }
  }
  .mainPart {
    // background-color: #09076b;
    display: flex;
    position: relative;
    background-image: url("@/assets/bg.png");
    height: 41vw;
    .part1 {
      width: 27vw;
      // background-color: #171a70;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content {
        height: 32%;
        width: 97%;
        background-color: rgba(63, 135, 213);
        border: #fff;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        clip-path: polygon(
          0.781vw 0,
          calc(100% - 0.781vw) 0,
          100% 0.781vw,
          100% calc(100% - 0.781vw),
          calc(100% - 0.781vw) 100%,
          0.781vw 100%,
          0 calc(100% - 0.781vw),
          0 0.781vw
        );
        .title {
          width: 100%;
          height: 2vw;
          background-color: rgb(162, 153, 243);
          text-align: center;
          line-height: 2vw;
        }
      }
      .content:nth-child(1),
      .content:nth-child(3) {
        margin: 1.5% 0;
      }
    }
    .part2 {
      flex: 1;
      overflow: hidden;
      position: relative;
      // height:45vw;
      // background-color: #114b69;
      // height: 99%;
      margin-top: 0.5%;
      display: flex;
      flex-direction: column;
      // clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
      .title {
        background-color: #e08757;
        background-image: linear-gradient(30deg #fff, rgb(233, 95, 95));
        height: 12%;
        justify-content: space-around;
        display: flex;

        box-shadow: 2px 2px 2px solid #fff;
        clip-path: polygon(
          0.781vw 0,
          calc(100% - 0.41vw) 0,
          100% 0.41vw,
          100% calc(100% - 0.41vw),
          calc(100% - 0.41vw) 100%,
          0.41vw 100%,
          0 calc(100% - 0.41vw),
          0 0.41vw
        );
        .time {
          text-align: center;
          width: 40%;
          color: rgb(0, 1, 4);
          // background-color: #fff;
          font-size: 2.5vw;
          text-shadow: 1px 3px #fff;
          text-decoration-color: 1px solid #fff;
        }
      }
      .earch {
        flex: 1;
        clip-path: polygon(
          50% 0%,
          83% 12%,
          100% 43%,
          94% 78%,
          68% 100%,
          32% 100%,
          6% 78%,
          0% 43%,
          17% 12%
        );
        // background-color: rgba(26, 140, 142, 0.5);
        background-clip: padding-box;
        position: relative;
        display: flex;
        justify-content: center;
        // background-image: url("@/assets/jt.png");
        background-position: 50% 40%;
        overflow: hidden;
        background-size: 150%;
        animation: rotate3 25s linear infinite;
        align-items: center;
        .box {
          position: absolute;
          z-index: 10;
          width: 31.25vw;
          // background-color: rgb(184, 124, 124);
          height: 31.25vw;
        }
        .circlebox {
          width: 20vw;
          // background-color: rgb(184, 124, 124);
          height: 20vw;
          background-image: url("@/assets/map.png");
          background-position: 40% 40%;
          border-radius: 50%;
          background-size: 120%;
          opacity: 0.8;
          z-index: 30;
          animation: rotate1 15s linear infinite;
        }
        .retatebox {
          width: 24vw;
          // background-color: rgb(184, 124, 124);
          height: 24vw;
          background-image: url("@/assets/lbx.png");
          background-position: 60% 40%;
          border-radius: 50%;
          z-index: 30;
          background-size: 100%;
          background-clip: padding-box;
          animation: rotate2 19s linear infinite;
        }
        .unretatebox {
          width: 28vw;
          // background-color: rgb(184, 124, 124);
          height: 28vw;
          background-image: url("@/assets/jt.png");
          background-position: 60% 40%;
          border-radius: 50%;
          z-index: 30;
          background-size: 120%;
          background-clip: padding-box;
          animation: rotate1 25s linear infinite;
        }
      }
    }
    .part3 {
      width: 27vw;
      background-color: #171a70;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content {
        height: 32%;
        width: 97%;
        background-color: rgba(63, 135, 213);
        border: #fff;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        clip-path: polygon(
          0.781vw 0,
          calc(100% - 0.781vw) 0,
          100% 0.781vw,
          100% calc(100% - 0.781vw),
          calc(100% - 0.781vw) 100%,
          0.781vw 100%,
          0 calc(100% - 0.781vw),
          0 0.781vw
        );
        .title {
          width: 100%;
          height: 2vw;
          background-color: rgb(162, 153, 243);
          text-align: center;
          line-height: 2vw;
        }
      }
      .content:nth-child(1),
      .content:nth-child(3) {
        margin: 1.5% 0;
      }
    }
    .chartbox1 {
      background-color: #c6e6f8;
      height: 80%;
      margin: 2% auto;
    }
  }
  @keyframes rotate1 {
    from {
      transform: translate(0, 0) rotate(0deg);
    }
    to {
      transform: translate(0, 0) rotate(360deg);
    }
  }
  @keyframes rotate2 {
    from {
      transform: translate(0, 0) rotate(360deg);
    }
    to {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes rotate3 {
    from {
      transform: translate(0, 0) rotate(5deg);
    }
    to {
      transform: translate(0, 0) rotate(0deg);
    }
    to {
      transform: translate(0, 0) rotate(-5deg);
    }
  }
}
</style>
