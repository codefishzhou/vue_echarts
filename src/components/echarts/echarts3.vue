<template>
  <div class="echarts3">
    <div class="header">
      <div class="part part1"></div>
      <div class="part part2">晋城高速综合管控</div>
      <div class="part part3"></div>
    </div>
    <div class="mainpart">
      <div class="left">
        <div class="part part1">
          <div class="maptitle">
            <div class="head"><span>交通流量</span></div>
          </div>
          <div class="trafic" ref="trafic"></div>
        </div>
        <div class="part part2">
          <div class="maptitle">
            <div class="head"><span>交通工具流量</span></div>
          </div>
          <div class="trafic" ref="trafic1"></div>
        </div>
        <div class="part part3">
          <div class="maptitle">
            <div class="head"><span>收费站车流量</span></div>
          </div>
          <div class="trafic" ref="trafic3">
            <div class="line lienm">
              <span>运输方式</span><span>客运量</span><span>货运量</span>
            </div>
            <div class="line linen">
              <span><i class="line1"></i>公路运输</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line2"></i>公路运输</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line3"></i>公路运输</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="part">
          <div class="content">
            <div class="title">当前警情数（起）</div>
            <div class="maincontent">
              <div class="number">67</div>
              <div class="descripe">
                <span>日环比：+3%</span><span>周环比：+3%</span>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="title">区域拥堵指数</div>
            <div class="maincontent">
              <div class="number">28.5</div>
              <div class="descripe">
                <span>日环比：+3%</span><span>周环比：+3%</span>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="title">当前警情数（起）</div>
            <div class="maincontent">
              <div class="number">1.4</div>
              <div class="descripe">
                <span>日环比：+3%</span><span>周环比：+3%</span>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="title">当前警情数（起）</div>
            <div class="maincontent">
              <div class="number">17.8</div>
              <div class="descripe"><span></span><span>周环比：+3%</span></div>
            </div>
          </div>
        </div>
        <div class="part">
          <div class="title">
            <span>出行服务+大数据</span>
            <span>交通大数据分析平台</span>
          </div>
          <div class="bottom">
            <div class="todayinfo">
              <div class="title">今日实时收费</div>
              <div class="tip">全省数据</div>
              <div class="area">
                <div class="line">
                  <span>大同北</span><span>大同南</span><span>宿州</span>
                </div>
                <div class="line">
                  <span>吕梁</span><span>吕梁南</span><span>太原</span>
                </div>
                <div class="line">
                  <span>晋中</span><span>太旧</span><span>长治</span>
                </div>
              </div>
            </div>
            <div class="piearea">
              <div class="pie" ref="pieone">1</div>
              <div class="pie" ref="pietwo">2</div>
              <div class="pie" ref="piethree">3</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="part">
          <div class="maptitle">
            <div class="head"><span>本月发生事件</span></div>
          </div>
          <div class="trafic" ref="rightTra"></div>
        </div>
        <div class="part">
          <div class="maptitle">
            <div class="head"><span>收费站收费量</span></div>
          </div>
          <div class="trafic" ref="rightTrab">
            <div class="line lienm">
              <span>小型车</span><span>中型车</span><span>大型车</span>
            </div>
            <div class="line linen">
              <span><i class="line1"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line2"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line3"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line3"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line3"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
            <div class="line linen">
              <span><i class="line3"></i>4347万人</span><span>4347万人</span
              ><span>4347万人</span>
            </div>
          </div>
        </div>
        <div class="part">
          <div class="maptitle">
            <div class="head"><span>收费站收费排行</span></div>
          </div>
          <div class="trafic" ref="rightTrac"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "speedProject",
  data() {
    return {};
  },
  methods: {
    //交通流量图
    loadtrafic() {
      let mynode = this.$refs.trafic;
      let myChart = this.$echarts.init(mynode);
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B",
            },
          },
        },
        grid: {
          left: "20",
          right: "40",
          height: "80%",
          top: "20",
          bottom: "20",
          containLabel: true,
          // show: true,
          borderColor: "#fff",
        },
        xAxis: [
          {
            name: "年份",
            type: "category",
            data: [2015, 2016, 2017, 2018],
            boundaryGap: true, // 不留白，从原点开始
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
            name: "盘龙大道",
            type: "bar",
            areaStyle: {},
            smooth: true,
            legendHoverLink: true,
            data: [35, 65, 46, 54],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#4cb9cf",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
          },
          {
            name: "解放大道",
            type: "bar",
            areaStyle: {},
            smooth: true,
            legendHoverLink: true,
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "rgba(230, 105, 34)",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
            data: [91, 60, 70, 40],
          },
          {
            name: "沿江大道",
            type: "line",
            smooth: false,
            legendHoverLink: true,
            data: [15, 25, 40, 34],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#C7384C",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
          },
          {
            name: "中山路",
            type: "line",
            smooth: false,
            legendHoverLink: true,
            data: [33, 25, 76, 10],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#C7F975",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    //交通流量
    loadtrafic1() {
      let mynode = this.$refs.trafic1;
      let myChart = this.$echarts.init(mynode);
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B",
            },
          },
        },
        grid: {
          left: "20",
          right: "40",
          height: "80%",
          top: "20",
          bottom: "20",
          containLabel: true,
          // show: true,
          borderColor: "#fff",
        },
        xAxis: [
          {
            name: "年份",
            type: "category",
            data: ["1月", "3月", "5月", "7月", "9月", "11月"],
            boundaryGap: true, // 不留白，从原点开始
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
            name: "解放大道",
            type: "line",
            areaStyle: { color: "rgba(98, 201, 141,0.27)" },
            smooth: true,
            legendHoverLink: true,
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "rgba(230, 105, 34)",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
            data: [91, 87, 86, 85, 60, 56],
          },
          {
            name: "沿江大道",
            type: "line",
            smooth: true,
            legendHoverLink: true,
            data: [15, 25, 40, 34, 27, 19],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#C7384C",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
          },
          {
            name: "中山路",
            type: "line",
            smooth: true,
            legendHoverLink: true,
            data: [33, 25, 76, 10, 40, 50],
            xAxisLable: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#C7F975",
                borderColor: "rgba(98, 201, 141,0.27)",
                borderWidth: 0,
              },
            },
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    loadpieone() {
      let mynode = this.$refs.pieone;
      let myChart = this.$echarts.init(mynode);
      let options = {
        title: {
          text: "车辆总数",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        // tooltip: {
        //   trigger: "item",
        // },
        series: [
          {
            // name: "Access From",
            type: "pie",
            radius: ["70%", "90%"],
            hoverAnimation: false,
            data: [
              {
                value: 80,
                // name: "Search Engine",
                itemStyle: {
                  normal: {
                    // color: "#395fff",
                    borderColor: "#fff",
                    color: "#C7384B",
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
                value: 100,
                itemStyle: {
                  color: "rgb(11, 29, 72)",
                },
              },
            ],
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
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    loadpietwo() {
      let mynode = this.$refs.pietwo;
      let myChart = this.$echarts.init(mynode);
      let options = {
        title: {
          text: "今日上线",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "90%"],
            hoverAnimation: false,
            data: [
              {
                value: 265,
                // name: "Search Engine",
                itemStyle: {
                  normal: {
                    // color: "#395fff",
                    borderColor: "#fff",
                    color: "#34FAB8",
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
                value: 100,
                itemStyle: {
                  color: "rgb(11, 29, 72)",
                },
              },
            ],
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
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    loadpiethree() {
      let mynode = this.$refs.piethree;
      let myChart = this.$echarts.init(mynode);
      let options = {
        title: {
          text: "今日报警",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: "18",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "90%"],
            hoverAnimation: false,
            data: [
              {
                value: 185,
                // name: "Search Engine",
                itemStyle: {
                  normal: {
                    borderColor: "#fff",
                    color: "#f40",
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
                value: 100,
                itemStyle: {
                  color: "rgb(11, 29, 72)",
                },
              },
            ],
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
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    loadPictorial() {
      let mynode = this.$refs.rightTrac;
      let myChart = this.$echarts.init(mynode);
      let options = {
        tooltip: {},
        xAxis: {
          max: [891, 1220, 660, 1670],
          splitLine: { show: false },
          offset: 10,
          axisLine: {
            lineStyle: {
              color: "#f40",
            },
          },
          axisLabel: {
            margin: 10,
          },
        },
        yAxis: {
          data: ["2013", "2014", "2015", "2016"],
          inverse: true,
          position:'right',
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            margin: 10,
            color: "#999",
            fontSize: 14,
          },
        },
        grid: {
          top: "center",
          height: 100,
          left: 70,
          right: 100,
        },
        series: [
          {
            // current data
            type: "pictorialBar",
            // symbol: spirit,
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbolClip: true,
            symbolSize: 15,
            symbolBoundingData: [891, 1220, 660, 1670],
            data: [891, 1220, 660, 1670],
            markLine: {
              symbol: "none",
              label: {
                formatter: "max: {c}",
                // position: "start",
              },
              lineStyle: {
                color: "green",
                type: "dotted",
                opacity: 0.2,
                width: 2,
              },
              data: [
                {
                  type: "max",
                },
              ],
            },
            z: 10,
          },
          {
            // full data
            type: "pictorialBar",
            itemStyle: {
              opacity: 0.8,
            },
            label: {
              show: true,
              formatter: function (params) {
                return ((params.value / [891, 1220, 660, 1670]) * 100).toFixed(1) + " %";
              },
              position: "right",
              offset: [140, 0],
              color: "green",
              fontSize: 12,
              color:"#fff"
            },
            animationDuration: 0,
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            // symbol: spirit,
            symbolSize: 15,
            symbolBoundingData: [891, 1220, 660, 1670],
            data: [891, 1220, 660, 1670],
            z: 5,
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    //交通流量
    loadpies() {
      this.loadpiethree();
      this.loadpietwo();
      this.loadpieone();
    },
    //雷达图
    loadradarone() {
      let mynode = this.$refs.rightTra;
      console.log(mynode, "mynode");
      let myChart = this.$echarts.init(mynode);
      let options = {
        color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
        title: {
          // text: "Customized Radar Chart",
        },
        legend: {
          show: false,
          textStyle: {
            color: "#fff",
          },
        },
        radar: [
          {
            indicator: [
              { text: "逆行" },
              { text: "闯红灯" },
              { text: "禁行" },
              { text: "超速" },
              { text: "违停" },
            ],
            center: ["50%", "50%"],
            radius: 60,
            startAngle: 180,
            splitNumber: 4,
            shape: "circle",
            axisName: {
              formatter: "【{value}】",
              color: "#428BD4",
            },
            splitArea: {
              areaStyle: {
                // color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 5,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "违规",
                areaStyle: {
                  color: "rgba(255, 228, 52, 0.6)",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(options);
      window.onresize = function () {
        myChart.resize();
      };
    },
    loadradar() {
      this.loadradarone();
    },
  },
  mounted() {
    this.loadtrafic();
    this.loadtrafic1(); //交通工具流量
    this.loadpies();
    this.loadradar();
    this.loadPictorial();
  },
};
</script>

<style scoped lang="scss">
.echarts3 {
  width: 100%;
  height: 100%;
  min-width: 880px;
  background-image: url("@/assets/echarts3/data08.png");
  .header {
    height: 4rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 33.33%);
    .part1 {
      height: 100%;
      background-repeat: no-repeat;
      background-position: 90% 1rem;
      background-size: 80%;
      background-image: url("@/assets/echarts3/ksh31.png");
    }
    .part2 {
      height: 100%;
      //   background-color: rgb(222, 84, 84);
      display: flex;
      justify-content: center;
      font-size: 2.344vw;
      letter-spacing: 1.042vw;
      color: rgb(243, 234, 232);
      align-items: center;
    }
    .part3 {
      height: 100%;
      background-repeat: no-repeat;
      background-position: 10% 1rem;
      background-size: 80%;
      background-image: url("@/assets/echarts3/ksh32.png");
    }
  }
  .mainpart {
    padding: 1rem 0 0rem 0;
    // background-color: rgb(196, 218, 255);
    height: calc(100% - 4rem);
    min-width: 880px;
    display: grid;
    grid-template-columns: 27% 46% 27%;
    .left {
      // background: rgb(137, 192, 234);
      display: grid;
      grid-template-rows: repeat(3, 33.33%);
      .part:nth-child(1) {
        background-color: rgb(6, 20, 54);
        // background-color: rgb(212, 238, 217);
        max-width: calc(100% - 10rpx);
        margin: 10px 0 0 10px;
      }
      .part:nth-child(2) {
        background-color: rgb(6, 20, 54);
        // background-color: rgb(212, 238, 217);
        margin: 10px 0 0 10px;
      }
      .part:nth-child(3) {
        background-color: rgb(6, 20, 54);
        // background-color: rgb(212, 238, 217);
        color: #fff;
        margin: 10px 0 10px 10px;
      }
      .part1 {
        .trafic {
          height: calc(100% - 40px);
          // background-color: #fff;
        }
      }
      .part2 {
        .trafic {
          height: calc(100% - 40px);
          // background-color: #fff;
        }
      }
      .part3 {
        .trafic {
          height: calc(100% - 40px);
          margin-left: 2%;
          .line {
            width: 100%;
            display: grid;
            text-align: center;
            grid-template-columns: repeat(3, 33.33%);
          }
          .line1 {
            height: 100%;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-position: 10 0;
            background-image: url("@/assets/echarts3/ksh35.png");
          }
          .line2 {
            height: 100%;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-position: 10 0;
            background-image: url("@/assets/echarts3/ksh36.png");
          }
          .line3 {
            height: 100%;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-position: 10 0;
            background-image: url("@/assets/echarts3/ksh37.png");
          }
          .linen {
            height: 25%;
            margin: 2% 0;
            border: 1px solid rgb(46, 49, 235);
            span:nth-child(1) {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-weight: 700;
            }
            span:nth-child(3) {
              // border: 1px solid #000;
              display: flex;
              align-items: center;
              justify-content: center;
              background-image: url("@/assets/echarts3/ksh38.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: 0 0;
              padding: 2%;
              color: rgb(143, 224, 93);
              margin: 2% 3% 2% 3%;
              // background-size: 5%;
            }
            span:nth-child(2) {
              // border: 1px solid #000;
              display: flex;
              align-items: center;
              justify-content: center;
              background-image: url("@/assets/echarts3/ksh38.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: 0 0;
              padding: 2%;
              color: rgb(224, 93, 93);
              margin: 2% 3% 2% 3%;
              // background-size: 5%;
            }
          }
        }
      }
      .maptitle {
        .head {
          height: 30px;
          background-position: 0 10px;
          background-repeat: no-repeat;
          background-image: url("@/assets/echarts3/ksh33.png");
          font-weight: 700;
          color: #fff;
        }
      }
    }
    .center {
      //   margin: 10px;
      //   background-color: rgb(235, 244, 205);
      display: grid;
      grid-template-rows: 25% 75%;
      .part:nth-child(1) {
        // background-color: rgb(212, 238, 214);
        margin: 10px 10px 0 10px;
        display: grid;
        grid-template-columns: 20% 30% 20% 30%;
        .content {
          // margin-top: 15%;
          height: calc(100% - 20px);
          // background-color: #fff;
          background-image: url("@/assets/echarts3/ksh39.png");
          background-repeat: no-repeat;
          padding-left: 7%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #fff;
          .title {
            margin-bottom: 10%;
          }
          .maincontent {
            display: flex;
            justify-content: center;
            align-items: center;
            .number {
              font-size: 36px;
              text-align: center;
              height: 100%;
              margin-right: 2%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              color: aqua;
              font-weight: 700;
              // background-color: #fff;
            }
            .descripe {
              font-size: 12px;
              height: 100%;
              width: 90px;
              // background-color: rgb(165, 119, 119);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span:nth-child(1) {
                color: rgb(157, 115, 234);
              }
              span:nth-child(2) {
                color: rgb(97, 250, 181);
              }
            }
          }
        }
        .content:nth-child(1),
        .content:nth-child(2),
        .content:nth-child(3) {
          margin-right: 3%;
        }
      }
      .part:nth-child(2) {
        // background-color: rgb(238, 212, 229);
        margin: 10px;
        height: calc(100% - 10px);
        display: grid;
        grid-template-rows: 70% 30%;
        .title {
          color: #fff !important;
          span:nth-child(1) {
            font-size: 24px;
            margin-right: 20px;
          }
          span:nth-child(2) {
            font-size: 18px;
          }
        }
        .bottom {
          // margin-bottom: 5%;
          width: 96%;
          margin: 0 auto;
          // height: 90%;
          color: #fff;
          border: 1px solid #fff;
          background-color: rgba(63, 107, 240, 0.1);
          display: grid;
          grid-template-columns: 35% 65%;
          .todayinfo {
            padding: 3%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .title {
              font-size: 18px;
              width: 100%;
            }
            .tip {
              width: 100%;
            }
            .area {
              width: 100%;
              display: flex;
              flex-direction: column;
              .line {
                display: grid;
                grid-template-columns: repeat(3, 33.3%);
                text-align: center;
                font-size: 13px;
              }
            }
          }
          .piearea {
            // background-color: rgb(220, 191, 191);
            display: flex;
            grid-template-columns: repeat(3, 33, 3%);
            .pie {
              width: 100%;
              // background-color: rgb(230, 176, 176);
              margin: 3%;
              // height: 90%;
            }
          }
        }
      }
    }
    .right {
      // background-color: rgb(213, 213, 156);
      color: #fff;
      display: grid;
      grid-template-rows: repeat(3, 33.33%);
      .part:nth-child(1) {
        // background-color: rgb(212, 238, 217);
        margin: 10px 10px 0 0;
        .trafic {
          height: calc(100% - 20px);
          // background: rgb(197, 238, 198);
        }
      }
      .part:nth-child(2) {
        // background-color: rgb(212, 238, 217);
        margin: 10px 10px 0 0;
        .trafic {
          height: calc(100% - 20px);
          // background: rgb(197, 238, 198);
          .line {
            width: 100%;
            display: grid;
            text-align: center;
            grid-template-columns: repeat(3, 33.33%);
            border-bottom: 3px dotted rgb(252, 77, 13);
          }
        }
      }
      .part:nth-child(3) {
        // background-color: rgb(212, 238, 217);
        margin: 10px 10px 10px 0;
        .trafic {
          height: calc(100% - 20px);
          // background-color: rgb(238, 128, 128);
        }
      }
      .maptitle {
        .head {
          height: 30px;
          background-position: 0 10px;
          background-repeat: no-repeat;
          background-image: url("@/assets/echarts3/ksh33.png");
          font-weight: 700;
          color: #fff;
        }
      }
    }
  }
}
</style>
