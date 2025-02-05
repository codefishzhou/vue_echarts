<template>
<!-- //滚动投屏 -->
  <div class="usual">
    <div class="head">
      <div class="content">codefish-可视化数据分析</div>
      <div class="times">
        <div class="time">{{ nowadays }}</div>
        <div class="time">{{ nowadaysDate }}</div>
      </div>
    </div>
    <div class="mainPart">
      <div class="left">
        <div class="part1 part" ref="box1"></div>
        <div class="part2 part" ref="box2">6</div>
      </div>
      <div class="center">
        <div class="part3 part" ref="box3">
          <div class="part3_left">
            <div class="title">业绩总览</div>
            <div class="content">
              <span class="circle">30500</span>
              <span class="other">万</span>
            </div>
          </div>
          <div class="part3_right">
            <div class="part3_right_icon">
              <span class="pie1">pie1</span
              ><span ref="pie1" class="pies"></span>
            </div>
            <div class="part3_right_icon">
              <span class="pie2">pie2</span
              ><span ref="pie2" class="pies"></span>
            </div>
            <div class="part3_right_icon">
              <span class="pie3">pie3</span
              ><span ref="pie3" class="pies"></span>
            </div>
          </div>
        </div>
        <div class="part4 part" ref="box4"></div>
        <div class="part8 part" ref="box8"></div>
      </div>
      <div class="right">
        <div class="part5 part" ref="box5">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

            <circle cx="10" cy="10" r="2" fill="red" />
            <circle cx="90" cy="90" r="2" fill="red" />
            <circle cx="90" cy="10" r="2" fill="red" />
            <circle cx="10" cy="90" r="2" fill="red" />
          </svg>
        </div>
        <div class="part6 part" ref="box6">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
             <circle cx="10" cy="10" r="2" fill="red" />
            <circle cx="90" cy="90" r="2" fill="red" />
            <circle cx="90" cy="10" r="2" fill="red" />
            <circle cx="10" cy="90" r="2" fill="red" />
          </svg>
        </div>
        <div class="part7 part" ref="box7">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "usual",
  data() {},
  setup() {
    let nowadays = new ref("");
    let nowadaysDate = new ref("");
    let timer = new reactive({});
    return {
      nowadays,
      nowadaysDate,
      timer, //时间计时器
    };
  },
  methods: {
    //处理时间
    handleDate() {
      this.timer = setInterval(() => {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        if (month < 10) {
          month = "0" + month;
        }
        if (day < 10) {
          day += "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        this.nowadays = year + "-" + month + "-" + day;
        this.nowadaysDate = " " + hour + ":" + minutes + ":" + seconds;
      }, 1000);
    },
    //loadMap 进度图
    loadMap() {
      let nodeList = this.$refs.box1;
      let mychart = echarts.init(nodeList);
      let options = {
        xAxis: [
          {
            show: false,
          },
        ],
        title: {
          text: "进度bar",
          top: 10,
          color: "#666",
        },
        yAxis: [
          {
            axisTick: "none", //刻度
            axisLine: "none", //线
            offset: "1", //距离左边的距离
            axisLabel: {
              //x轴的lable
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "14",
              },
            },
            data: [
              "字段1",
              "字段2",
              "字段3",
              "字段4",
              "字段5",
              "字段6",
              "字段7",
              "字段8",
              "字段9",
            ],
          },
          {
            name: "进度图",
            nameGap: "20", //距离的位置
            nameTextStyle: {
              color: "rgba(255,255,255)",
              fontSize: "16",
            },
            axisTick: "none",
            axisLine: "none", //刻度线
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.8)", //调整右边label的样式
                fontSize: "14",
              },
            },
            data: [1514, 1619, 1623, 1968, 2158, 2456, 3506, 4664, 8390],
          },
          {
            name: "单位：件",
            nameGap: "0", //距离的位置
            nameTextStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "16",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)", //隐藏线纯显示
              },
            },
            data: [],
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
            label: {
              normal: {
                show: true,
                position: "right", //label的显示位置
                formatter: function (param) {
                  return param.value + "%";
                },
                textStyle: {
                  color: "rgba(255,255,255,.8)",
                  fontSize: "12",
                },
              },
            },
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#03c893",
                  },
                  {
                    offset: 1,
                    color: "#0091ff",
                  },
                ]),
                barBorderRadius: 15,
              },
            },
            z: 2,
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            // barGap: "-100%",
            barGap: "30%",
            data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 16,
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,.5)",
                barBorderRadius: 15,
              },
            },
            z: 1, //层级
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    //柱状图
    loadBar() {
      let nodeList = this.$refs.box2;
      let mychart = echarts.init(nodeList);
      let options = {
        yAxis: [
          {
            show: true,
          },
        ],

        title: {
          text: "数字bar",
          top: 10,
        },
        xAxis: [
          {
            type: "category",
            // name:"数字bar",
            // axisTick: "none", //刻度
            // axisLine: "none", //线
            // offset: "1", //x轴的位置
            axisLabel: {
              //x轴的lable
              textStyle: {
                color: "#f40",
                fontSize: "14",
              },
            },
            data: [
              "字段1",
              "字段2",
              "字段3",
              "字段4",
              "字段5",
              "字段6",
              "字段7",
              "字段8",
              "字段9",
            ],
          },
        ],
        series: [
          {
            name: "a",
            type: "bar",
            stack: "a", //使其在一个柱体上面
            yAxisIndex: 0,
            data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
            itemStyle: {
              normal: {
                color: "#8bd4e6",
              },
            },
            barWidth: 24,
            itemStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                //   {
                //     offset: 0,
                //     color: "#03c893",
                //   },
                //   {
                //     offset: 1,
                //     color: "#0091ff",
                //   },
                // ]),
                color: "#f99",
              },
            },
            z: 2,
          },
          {
            name: "b",
            type: "bar",
            stack: "a",
            yAxisIndex: 0,
            data: [10, 20, 14, 18, 13, 18, 12, 16, 17],
            itemStyle: {
              normal: {
                color: "#8bd4e6",
              },
            },
            barWidth: 24,
            z: 3,
          },
          {
            name: "c",
            type: "bar",
            yAxisIndex: 0,
            barGap: 0,
            data: [5, 3, 4, 5, 3, 8, 2, 6, 7],
            stack: "a",
            barWidth: 24,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#03c893",
                  },
                  {
                    offset: 1,
                    color: "#0091ff",
                  },
                ]),
                // barBorderRadius: 15,
              },
            },
            z: 1,
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    //加载中间的三个饼图
    loadPies() {
      let nodeList = this.$refs.pie1;
      let mychart = echarts.init(nodeList);
      let txt = 10;
      let options = {
        title: {
          text: txt + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        color: "#eee",
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: true, //是否顺时针排布
            radius: ["60%", "80%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: txt,
                name: "已使用",
                itemStyle: {
                  normal: {
                    color: "#395fff",
                    borderColor: "#fff",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      //   show: false,
                    },
                  },
                },
              },
              {
                name: "未使用",
                value: 100 - txt,
              },
            ],
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };

      let nodeList1 = this.$refs.pie2;
      let mychart1 = echarts.init(nodeList1);
      let txt1 = 60;
      let options1 = {
        title: {
          text: txt1 + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        color: "#eee",
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: true, //是否顺时针排布
            radius: ["60%", "80%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: txt1,
                name: "已使用",
                itemStyle: {
                  normal: {
                    color: "#395fff",
                    borderColor: "#fff",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: "未使用",
                value: 100 - txt1,
              },
            ],
          },
        ],
      };
      mychart1.setOption(options1);
      window.onresize = function () {
        mychart1.resize();
      };

      let nodeList2 = this.$refs.pie3;
      let mychart2 = echarts.init(nodeList2);
      let txt2 = 90;
      let options2 = {
        title: {
          text: txt2 + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        color: "#eee",
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: true, //是否顺时针排布
            radius: ["60%", "80%"],
            itemStyle: {
              normal: {
                borderColor: "#fff", //图形的描边颜色
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: txt2,
                name: "已使用",
                itemStyle: {
                  normal: {
                    color: "#395fff",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      //   show: false,
                    },
                  },
                },
              },
              {
                name: "未使用",
                value: 100 - txt2,
              },
            ],
          },
        ],
      };
      mychart2.setOption(options2);
      window.onresize = function () {
        mychart2.resize();
      };
    },
    //主体的第一个表格
    loadMainone() {
      let nodeList = this.$refs.box4;
      let mychart = echarts.init(nodeList);
      let options = {
        grid: {
          top: "20%",
          right: "50",
          bottom: "30",
          left: "30",
        },
        legend: {
          // data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
          right: "center",
          width: "100%",
          textStyle: {
            color: "#fff", //图例字体颜色
          },
          itemWidth: 12,
          itemHeight: 8,
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019"],
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
            axisLabel: {
              textStyle: { color: "rgba(255,255,255,.7)", fontSize: "14" },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "单位万",
            axisTick: { show: false }, //在多个 y 轴为数值轴的时候，可以开启该配置项自动对齐刻度。只对'value'和'log'类型的轴有效。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              fontSize: 14,
              color: "rgba(255,255,255,.6)",
            },
            axisLine: {
              min: 0,
              max: 10,
              lineStyle: { color: "rgba(255,255,255,.1)" },
            }, //左线色
          },
          {
            type: "value",
            name: "增速",
            show: true,
            axisLabel: {
              show: true,
              fontSize: 14,
              formatter: "{value} %",
              color: "rgba(255,255,255,.6)",
            },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } }, //右线色
            splitLine: {
              show: true,
              lineStyle: { color: "rgba(255,255,255,.1)" },
            }, //x轴线
          },
        ],
        series: [
          {
            name: "数据1",
            type: "bar",
            data: [36.6, 38.8, 40.84, 41.6],
            barWidth: "15%",
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8bd46e",
                  },
                  {
                    offset: 1,
                    color: "#09bcb7",
                  },
                ]),
              },
            },
            barGap: "0.2",
          },
          {
            name: "字段2",
            type: "bar",
            data: [14.8, 14.1, 15, 16.3],
            barWidth: "15%",
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#248ff7",
                  },
                  {
                    offset: 1,
                    color: "#6851f1",
                  },
                ]),
              },
            },
            barGap: "0.2",
          },
          {
            name: "字段3",
            type: "bar",
            data: [9.2, 9.1, 9.85, 8.9],
            barWidth: "15%",
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#fccb05",
                  },
                  {
                    offset: 1,
                    color: "#f5804d",
                  },
                ]),
              },
            },
            barGap: "0.2",
          },
          {
            name: "字段4",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            data: [0, 6.01, 5.26, 1.48],
            lineStyle: {
              normal: {
                width: 2,
              },
            },
            itemStyle: {
              normal: {
                color: "#86d370",
              },
            },
          },
          {
            name: "字段5",
            type: "line",
            yAxisIndex: 1,

            data: [0, -4.73, 6.38, 8.67],
            lineStyle: {
              normal: {
                width: 2,
              },
            },
            itemStyle: {
              normal: {
                color: "#3496f8",
              },
            },
            smooth: true,
          },
          {
            name: "字段6",
            type: "line",
            yAxisIndex: 1,

            data: [0, -1.09, 8.24, -9.64],
            lineStyle: {
              normal: {
                width: 2,
              },
            },
            itemStyle: {
              normal: {
                color: "#fbc30d",
              },
            },
            smooth: true,
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    //主体的第二个表格
    loadMainTwo() {
      let nodeList = this.$refs.box8;
      let mychart = echarts.init(nodeList);
      let options = {
        grid: {
          show: true,
          y2: 80,
          containLable: true,
          borderColor: "rgba(255,255,255,.5)",
        },
        legend: {
          // data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
          right: "center",
          width: "100%",
          textStyle: {
            color: "#fff", //图例字体颜色
          },
          itemWidth: 12,
          itemHeight: 8,
        },
        xAxis: [
          {
            type: "category",
            offset: 0,
            data: [
              "2012年1月",
              "2012年2月",
              "2012年3月",
              "2012年4月",
              "2012年5月",
              "2012年6月",
              "2012年7月",
              "2012年8月",
              "2012年9月",
              "2012年10月",
              "2012年11月",
              "2012年12月",
            ],
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
            axisLabel: {
              rotate: -90,
              //   width:50,
              //   height:10,
              margin: 0,
              bottom: 20,
              //   fontWeight: 700,
              textStyle: { color: "rgba(255,255,255,.7)", fontSize: "14" },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            show: true,
            name: "单位/万",
            axisLine: {
              show: true,
              lineStyle: { type: "solid", color: "#fff" },
            },
            axisTick: { show: true }, //在多个 y 轴为数值轴的时候，可以开启该配置项自动对齐刻度。只对'value'和'log'类型的轴有效。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              fontSize: 14,
              color: "rgba(255,255,255,.6)",
            },
            axisLine: {
              min: 0,
              max: 10,
              lineStyle: { color: "rgba(255,255,255,.1)" },
            }, //左线色
          },
        ],
        series: [
          {
            name: "数据1",
            type: "line",
            stack: "a",
            data: [
              36.6, 38.8, 40.84, 41.6, 36.6, 38.8, 40.84, 41.6, 36.6, 38.8,
              40.84, 41.6,
            ],
            barWidth: "30%",
            lineStyle: {
              color: "#f40",
            },
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: "#656555",
              },
            },
            barGap: "0.2",
          },
          {
            name: "数据2",
            type: "line",
            data: [50, 40, 34, 60, 23, 45, 80, 30, 50, 70, 30, 80],
            stack: "a",
            barWidth: "30%",
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8bd46e",
                  },
                  {
                    offset: 1,
                    color: "#09bcb7",
                  },
                ]),
              },
            },
            barGap: "0.2",
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    //加载右下角饼图
    loadrightThree() {
      let nodeList = this.$refs.box7;
      let mychart = echarts.init(nodeList);
      let options = {
        title: {
          text: "5132",
          subtext: "总体",
          x: "center",
          y: "40%",
          textStyle: {
            color: "#fff",
            fontSize: 22,
            lineHeight: 10,
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: 16,
            lineHeight: 10,
          },
        },
        roseType: "radius",

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          },
        },
        series: [
          {
            name: "pie1",
            type: "pie",
            radius: ["60%", "80%"],
            legendHoverLink: true,
            hoverAnimation: true,
            data: [
              { value: 30, name: "已使用" },
              { value: 27, name: "使用中" },
              { value: 43, name: "已废弃" },
            ],
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)",
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
            label: {
              normal: {
                formatter: ["{c|{c}万}", "{b|{b}}"].join("\n"),
                rich: {
                  c: {
                    color: "rgb(241,246,104)",
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 5,
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 14,
                    height: 44,
                  },
                },
              },
            },
          },
        ],
      };
      mychart.setOption(options);
      window.onresize = function () {
        mychart.resize();
      };
    },
    handleOptions() {
      this.loadMap();
      this.loadBar();
      this.loadPies();
      this.loadMainone();
      this.loadMainTwo();
      this.loadrightThree();
    },
  },
  created() {
    this.handleDate();
  },
  mounted() {
    this.handleOptions();
  },
};
</script>

<style scoped lang="scss">
.usual {
  background-image: url("@/assets/echarts1/bg.jpg");
  width: 100vw;
  height: 56.25vw;
  .head {
    width: 100vw;
    height: 5.233vw;
    background-image: url("@/assets/echarts1/head_bg.png");
    background-repeat: no-repeat;
    color: #399bff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.344vw;
    position: relative;
    .times {
      position: absolute;
      right: 0;
      font-size: 0.977vw;
      width: 20vw;
      display: flex;
      justify-content: space-around;
      color: rgb(247, 251, 254, 0.7);
    }
  }
  .mainPart {
    height: 41.225vw;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    .left {
      display: grid;
      grid-template-rows: 60% 40%;
    }
    .center {
      //   background-color: rgb(115, 177, 228);
      display: grid;
      grid-template-rows: 18% 42% 40%;
    }
    .right {
      display: grid;
      grid-template-rows: repeat(3, 33.33%);
      //   background-color: rgb(168, 119, 119);
    }
    .part1 {
      margin: 10px 10px 0 10px;
      background-color: rgba(13, 31, 95, 0.3);
    }
    .part2 {
      background-color: rgba(13, 31, 95, 0.3);
      margin: 10px 10px 10px 10px;
    }
    .part3 {
      margin: 10px 0 0 0;
      background-color: rgba(13, 31, 95, 0.3);
      display: flex;
      .part3_right {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .part3_left {
        width: 50%;
        // background-color: #399bff;
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
          height: 1.953vw;
          align-self: flex-start;
          color: #fff;
          margin-top: 0.651vw;
          margin-left: -1.953vw;
          font-size: 1.042vw;
        }
        .content {
          //   background-color: rgb(244, 119, 119);
          display: flex;
          align-items: center;
          .circle {
            font-size: 2.734vw;
            color: rgb(239, 233, 49);
            font-weight: 700;
          }
          .other {
            font-size: 1.758vw;
            color: rgb(239, 233, 49);
            font-weight: 700;
          }
        }
      }
      .part3_right {
        .part3_right_icon {
          width: 4.557vw;
          height: 5.208vw;
          .pies {
            height: 4.557vw;
            width: 4.557vw;
            border-radius: 2.279vw;
            background: #000;
          }
          .pie1,
          .pie2,
          .pie3 {
            height: 0.326vw;
            color: #fff;
          }
        }
      }
    }
    .part4 {
      margin: 10px 0 0 0;
      background-color: rgba(13, 31, 95, 0.3);
    }
    .part5 {
      margin: 10px 10px 0 10px;
      background-color: rgba(13, 31, 95, 0.3);
      // background-color: red;
      // mask-image: url("@/assets/echarts1/1.svg") no-repeat 50% 50%;
    }
    .part6 {
      margin: 10px 10px 0 10px;
      background-color: rgba(13, 31, 95, 0.3);
    }
    .part7 {
      margin: 10px;
      background-color: rgba(13, 31, 95, 0.3);
    }
    .part8 {
      margin: 10px 0 10px 0;
      background-color: rgba(13, 31, 95, 0.3);
    }
  }
  svg {
    width: 200px;
  }
}
</style>
