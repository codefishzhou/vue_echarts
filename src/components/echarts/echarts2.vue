<template>
  <div class="echarts">
    <div class="head"></div>
    <div class="mainpart">
      <div class="left">
        <div class="left_part1 part">
          <div class="title">条形区域图</div>
          <div class="echart" ref="box1"></div>
        </div>
        <div class="left_part2 part">
          <div class="left_mid">
            <div class="echart box2" ref="box2">
              <div class="title">雷达图</div>
            </div>
            <div class="echart box3" ref="box3">
              <div class="title">纯展示</div>
            </div>
          </div>
        </div>
        <div class="left_part3 part">
          <div class="title">标题</div>
          <div class="echart" ref="box"></div>
        </div>
      </div>
      <div class="center">
        <div class="center_part1 part">
          <div class="title">标题</div>
          <div class="echart" ref="box"></div>
        </div>
        <div class="center_part2 part">
          <div class="title">标题6</div>
          <div class="echart" ref="box6">
            <div class="content">
              <div class="headr">
                <ul>
                  <li>标题</li>
                  <li>标题</li>
                  <li>标题</li>
                  <li>标题</li>
                  <li>标题</li>
                  <li>标题</li>
                </ul>
              </div>
              <div class="maincontent">
                <div ref="maincontent" class="box" style="top: 0">
                  <ul v-for="i in 12" :key="i">
                    <li>{{ i }}</li>
                    <li>内容1</li>
                    <li>暗地</li>
                    <li>阿发</li>
                    <li>分公司</li>
                    <li>程序</li>
                  </ul>
                </div>
                <div ref="maincontent1" class="box" style="margin-top: 25rem">
                  <ul v-for="i in 12" :key="i">
                    <li>{{ i }}</li>
                    <li>内容2</li>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right"><div class="title">标题</div></div>
    </div>
  </div>
</template>

<script>
import { start } from "@popperjs/core";

export default {
  name: "echarts2",
  data() {
    return {};
  },
  methods: {
    //条形区域图
    loadLineArea() {
      let mynode = this.$refs.box1;
      // console.log(mynode);
      let chart = this.$echarts.init(mynode);
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B",
            },
          },
          formatter: "{b}日	:<br/> 生产情况{c}",
        },
        grid: {
          left: "20",
          right: "40",
          top: "10",
          bottom: "20",
          containLabel: true,
          show: true,
          borderColor: "#fff",
        },
        xAxis: [
          {
            name: "值",
            type: "category",
            data: [18, 16, 22, 14, 10],
            boundaryGap: false, // 不留白，从原点开始
          },
        ],
        yAxis: [
          {
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
              },
            },

            boundaryGap: false,
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dotted",
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "生产情况",
            type: "line",
            areaStyle: {},
            smooth: true,
            legendHoverLink: true,
            data: [35, 65, 46, 54, 24],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#4cb9cf",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 12,
              },
            },
            data: [91, 60, 70, 54, 80, 40],
          },
        ],
      };
      chart.setOption(options);
      window.onresize = function () {
        chart.resize();
      };
    },
    //雷达图
    loadThounder() {
      let myNode = this.$refs.box2;
      let chart = this.$echarts.init(myNode);
      let options = {
        title: {
          text: "Basic Radar Chart",
        },
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
              },
            ],
          },
        ],
      };
      chart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    //table滚动
    tablePgDn() {
      let myNode = this.$refs.maincontent;
      let myNode1 = this.$refs.maincontent1;
      setInterval(() => {
        let length = myNode.style.marginTop.replace("rem", "");
        length = Number(length) - 0.02;
        myNode.style.marginTop = length + "rem";

        let length1 = myNode1.style.marginTop.replace("rem", "");
        length = Number(length1) - 0.02;
        myNode1.style.marginTop = length + "rem";
        console.log(myNode.style.marginTop, "myNode.style.top");
      }, 10);

      setTimeout(() => {
        let length = myNode.style.marginTop;
        myNode.style.marginTop = "25rem";
        setInterval(() => {
          let length = myNode.style.marginTop;
          myNode.style.marginTop = "25rem";
        }, 25000);
      }, 12500);
      setInterval(() => {
        let length1 = myNode1.style.marginTop;
        myNode1.style.marginTop = "25rem";
      }, 25000);
    },
  },
  mounted() {
    this.loadLineArea();
    this.tablePgDn();
    this.loadThounder()
  },
};
</script>

<style scoped lang="scss">
.echarts {
  // padding: 0.4rem 0rem 0rem 0rem;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 240, 250);
  .head {
    background-image: url("@/assets/echarts2/head_bg.png");
    height: 5rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .mainpart {
    padding: 1rem 0 0rem 0;
    background-color: rgb(196, 218, 255);
    height: calc(100% - 7rem);
    display: grid;
    grid-template-columns: 27% 46% 27%;
    .left {
      background-color: rgb(239, 205, 205);
      display: grid;
      grid-template-rows: repeat(3, 33.3333%);
      .left_part1 {
        background-color: rgb(176, 206, 233);
        margin: 1rem;
      }
      .left_part2 {
        background-color: aliceblue;
        margin: 0 1rem;
        .left_mid {
          display: grid;
          grid-template-columns: 50% 50%;
          height: 100%;
          .box3 {
            background-color: rgb(59, 142, 214);
            z-index: 10;
            width: calc(100% - 0.5rem);
            margin-left: 0.5rem;
          }
          .box2 {
            background-color: rgb(180, 209, 235);
            z-index: 10;
            width: calc(100% - 0.5rem);
            margin-right: 0.5rem;
          }
        }
      }
      .left_part3 {
        background-color: rgb(221, 154, 187);
        margin: 1rem;
      }
    }
    .center {
      background-color: rgb(225, 244, 185);
      display: grid;
      height: 100%;
      overflow: hidden;
      grid-template-rows: 33.3333% 66.6666%;
      .center_part1 {
        background-color: rgb(22, 96, 160);
        margin: 1rem 0 1rem 0;
      }
      .center_part2 {
        background-color: rgb(15, 94, 162);
        margin: 0rem 0 1rem 0;
        // height:66.6666%;
        overflow: hidden;
        .echart {
          height: 100%;
          .content {
            height: 100%;
            .headr ul {
              display: flex;
              justify-content: center;
              margin: 0 5%;
              z-index: 10;
              color: aqua;
              // background-color: aqua;
              li {
                width: calc(15%);
                border: 1px solid rgb(28, 54, 132);
                // margin: 0 1%;
              }
            }
            .maincontent {
              overflow: hidden;
              position: relative;
              // background-color: rgb(57, 146, 224);
              height: 100%;
              top: 0;
              ul {
                display: flex;
                overflow: hidden;
                justify-content: center;
                margin: 0.1% 5%;
                li {
                  width: calc(15%);
                  border: 2px solid rgb(50, 53, 157);
                  color: #fff;
                }
                li:nth-child(1),
                li:nth-child(2),
                li:nth-child(3),
                li:nth-child(4),
                li:nth-child(5) {
                  border-right: 0;
                }
              }
              .box:nth-child(1) {
                position: absolute;
                width: 100%;
                // background-color: rgb(234, 26, 54);
              }
              .box:nth-child(2) {
                position: absolute;
                width: 100%;
                // background-color: rgb(198, 234, 19);
              }
            }
          }
        }
      }
    }
    .right {
      background-color: rgb(246, 185, 228);
      margin: 1rem;
      // width:320px;
    }
  }
  .echart {
    // width: 100%;
    height: 100%;
    // background-color: #fff;
  }
  @keyframes move {
    from {
      transform: translate(0, 100px) rotate(0deg);
    }
    to {
      transform: translate(0, 1000px) rotate(360deg);
    }
  }
}
</style>
