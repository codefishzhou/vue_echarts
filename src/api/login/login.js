import axios from "@/utils/axios"

const api = {
    login:'/login',
}

export function loginRes(paremeter){
    return axios({
        url: api.login,
        method: "get",
        params:paremeter
      });
}