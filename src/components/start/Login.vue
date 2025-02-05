<template>
  <div class="login">
    <div>课程后台管理</div>
    <a-form action="" :name="formName" :model="form" ref="loginform">
      <a-form-item
        label="Username"
        name="username"
        :rules="[
          {
            required: true,
            message: 'Please input your username!',
            trigger: 'blur',
          },
        ]"
      >
        <a-input
          v-model:value="form.username"
          placeholder="请输入用户名"
          allowClear
        >
        </a-input
      ></a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[
          {
            required: true,
            message: 'Please input your password!',
            trigger: 'blur',
          },
        ]"
      >
        <a-input
          v-model:value="form.password"
          placeholder="请输入密码"
          type="password"
          allowClear
        >
        </a-input
      ></a-form-item>
    </a-form>
    <a-button type="primary" @click="login()" clearable>登录</a-button>
    <a-button @click="sign" clearable>注册</a-button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { getCurrentInstance } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { loginRes } from "../../api/login/login";
export default {
  name: "login",
  setup() {
    const form = reactive({
      username: "123456",
      password: "123456",
    });
    const router = new useRouter();
    const { proxy, currentInstance, ctx } = getCurrentInstance();
    const formName = ref(null);

    //发送登录请求
    function loginsend() {
      loginRes(form)
        .then((res) => {
          console.log(res.data);
          if (res.data.code == "200") {
            console.log("请求成功");
            //存储token
            localStorage.setItem('token',JSON.stringify(res.data.token))
            //存储登录信息
            localStorage.setItem('userinfo',JSON.stringify(res.data.content[0]))
          }
        })
        .catch((res) => {
          throw new Error('send web serve is defeact')
        });
    }

    //点击登录
    async function login() {
      const valid = await proxy.$refs.loginform.validate();
      console.log(valid,form)
      if (valid) {
        loginsend();
          proxy.$message.success("login success,waitting for a second please");
          setTimeout(() => {
            router.push("/student/home");
          }, 2000);
      } else {
        console.log("1");
      }
    }

    function sign() {
      console.log(ctx.$refs.loginform);
      // router.push("/sign");
    }
    return {
      form,
      login,
      loginsend,
      sign,
      formName,
    };
  },
};
</script>

<style scoped lang="scss">
.login {
  width: 600px;
  height: 400px;
  // background-color: rgb(163, 236, 236, 0.6);
  margin: 0 auto;
  text-align: center;
  .ant-btn {
    margin: 0 20px;
    // position: absolute;
  }
  div {
    font-size: 24px;
    margin: 50px 50px 0 50px;
  }
  form {
    height: 200px;
    // background-color: rgb(238, 203, 203);
    .ant-form-item {
      height: 100px;
      // background: rgb(238, 164, 164);
      margin-top: 0;
    }
    .ant-form-item:nth-child(1) {
      margin-top: 30px;
    }
  }
}
</style>
