import axios from "@/utils/axios"

const api = {
    scorelist:'/student/scorelist',
}

export function scorelist(parameter){
    return axios({
        url: api.scorelist,
        method: "Post",
        params:parameter
      });
}