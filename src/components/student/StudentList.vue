<template>
  <div class="studentlist">
    <h2>studentlist</h2>
    <div class="skill">
      <a-button type="primary" @click="editinfo">添加</a-button>
      <div class="search1">
        <a-input v-model:value="searchvalue" placeholder="Basic usage" />
        <a-tag color="blue">搜索</a-tag>
      </div>
    </div>
    <a-table :dataSource="info[0]" :columns="columns" rowKey="studentId">
      <template #id="{ index }">
        {{ index + 1 }}
      </template>
      <template #status="{ record }">
        <a-tag :color="record.status ? 'green' : 'red'">{{
          record.status ? "开启" : "禁用"
        }}</a-tag>
      </template>
      <template #action="{ record }">
        <a-tag
          :color="!record.status ? 'green' : 'red'"
          @click="changestatus(record)"
          >{{ !record.status ? "开启" : "禁用" }}</a-tag
        >
        <a-tag color="pink" @click="editstudent(record)">编辑</a-tag>
      </template>
      <template #sex="{ record }">
        <span v-show="record.sex">男</span>
        <span v-show="!record.sex">女</span>
        <!-- {{record.sex}} -->
      </template>
    </a-table>
    <!-- 添加和修改对话框 -->
    <a-modal :title="editOrAdd?'添加学生':'编辑学生'" v-model:visible="visible" @ok="handleok">
      <a-form :model="formState">
        <a-form-item label="姓名">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="年龄">
          <a-input v-model:value="formState.age" />
        </a-form-item>
        <a-form-item label="性别">
          <a-input v-model:value="formState.sex" />
        </a-form-item>
        <a-form-item label="班级">
          <a-input v-model:value="formState.classId" />
        </a-form-item>
        <a-form-item label="地址">
          <a-input v-model:value="formState.address" />
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input v-model:value="formState.phone" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { StudentInfo } from "../../api/student/studentlist";
import { getCurrentInstance, reactive, ref } from "vue";
export default {
  name: "studentlist",
  components: {},
  setup() {
    const { proxy } = getCurrentInstance();
    let info = reactive([]);
    let visible = ref(false);
    let searchvalue = ref("");
    let editOrAdd = ref(true)
    let labelCol = reactive({
      labelCol:{span:3},
      wrapperCol:{span:3}
    })
    let formState = reactive({
      name: "",
      age: "",
      sex: "",
      classId: "",
      address: "",
      phone: "",
    });
    //请求数据
    StudentInfo().then((res) => {
      console.log(res.data.data);
      info.push(res.data.data);
    });
    //改变状态
    function changestatus(record) {
      // console.log(record)
      record.status = !Boolean(record.status);
    }
    //添加编辑
    function editinfo() {
      visible.value = true;
      editOrAdd.value = true;
    }
    //点击确认对话框
    function handleok(){
      StudentInfo(formState).then((res) => {
      console.log(res.data);
    });
      visible.value = false;

      console.log('ok')
    }
    //编辑学生
    function editstudent(record){
      editOrAdd.value = false
      visible.value = true;
      let {name,age,sex,classId,address,phone} = record
      formState = reactive({ 
        name,
        sex,
        classId,
        address,
        phone,
        age,
      })
      console.log(record,formState)
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
        title: "性别",
        // dataIndex: "sex",
        slots: { title: "sex", customRender: "sex" },
      },

      {
        title: "年龄",
        dataIndex: "age",
      },
      {
        title: "学号",
        dataIndex: "studentId",
      },
      {
        title: "班级",
        dataIndex: "classId",
      },
      {
        title: "状态",
        // dataIndex: "status",
        slots: { title: "status", customRender: "status" },
      },
      {
        title: "地址",
        dataIndex: "address",
      },
      {
        title: "联系方式",
        dataIndex: "phone",
      },
      {
        title: "操作",
        // dataIndex: "classId",
        width: 200,
        slots: { title: "action", customRender: "action" },
      },
    ];
    console.log(info);

    return {
      info,
      columns,
      changestatus,
      visible,
      editinfo,
      searchvalue,
      formState,
      labelCol,
      handleok,
      editOrAdd,
      editstudent,
    };
  },
};
</script>

<style scoped lang="scss">
.studentlist {
  width: 100%;
  // background-color: aqua;
  user-select: none;
  .skill {
    display: flex;
    .search1 {
      align-items: center;
      display: flex;
      margin-left: 100px;
    }
  }
   
}
.ant-form-item-label >>> label{
     width:100px;
   }
</style>
