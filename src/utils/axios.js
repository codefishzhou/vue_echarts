import axios from "axios";

const request = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/298693/",
  timeout: 6000, //请求超时时间
  // transformRequest: [
  //   function (data, headers) {
  //     // 对 data 进行任意转换处理
  //     headers["Content-Type"] = "application/x-www-form-urlencoded"; //统一处理content-type ，通过qs工具将数据json格式转换为form data，注意不支持get类型
  //     //  console.log('设置请求标头')
  //      return qs.stringify(data);

  //   },
  // ],
});
//异常拦截器
const errorHandler = function () {
  console.log("error", "....");
  if (error.response) {
    const data = error.response.data;
    //获取token
    if (error.response.status === 403) {
      notification.error({
        message: "Forbidden",
        description: data.message,
      });
    }
  }
};

let t = true;
// 请求拦截器
request.interceptors.request.use((config) => {

     if(!t){
        const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["token"] = token.token;
    }
     }
    
    // else{
    //     console.log(token,'----token')
    //     throw new Error('请先登录')
    // }
    t = false;

  return config;
}, errorHandler);

export default request;
