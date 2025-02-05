import axios from "@/utils/axios"

const api = {
    studentlist:'/student/studentlist',
}

export function StudentInfo(parameter){
    return axios({
        url: api.studentlist,
        method: "GET",
        params:parameter
      });
}