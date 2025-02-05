<template>
  <div class="infolist">
    <div class="head">
      <h3>风儿吹</h3>
    </div>
    <div class="mainPart">
      <div class="part1"></div>
      <div class="part2"></div>
      <div class="part3"></div>
    </div>
  </div>
</template>

<script>
import { StudentInfo } from "../../api/student/studentlist";
export default {
  name: "infolist",
  data() {
    return {
      studentInfos:[],
      tabledata: {
        data: [],
        header: {},
      },
      config:{}
    };
  },
  methods: {
    getdata() {
      StudentInfo().then((res) => {
        let x = [];
        let y = [];
        res.data.data.forEach((item, index) => {
          if (index < 200) {
            x.push(item.name);
            y.push(Number(item.age));
          }
          let headDate = Object.keys(arr, () => {
            return;
          });
          let newarr = Object.values(arr, () => {
            return;
          });
          this.tabledata.data.push(newarr);
        });
        this.xdataOne = x;
        this.ydataOne = y;
        res.data.data.sort((a, b) => {
          return a.classId - b.classId;
        });
        this.studentInfos = res.data.data;
      });
    },
  },
  beforemount() {
    this.getdata();
  },
  mounted() {
    this.config = this.tabledata;
  },
};
</script>

<style scoped lang="scss">
.infolist {
  width: 100%;
  height: 100%;
}
</style>
