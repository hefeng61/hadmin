import axios from "axios";

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.response.use(response => {
    const {data} = response
    if (data.code === 200) {
        return data
    }
}, error => {
    console.log('interface error')
})


export default service
