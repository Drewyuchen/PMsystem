import axios from 'axios'
import {MessageBox,Message} from 'element-ui'

const service =axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:20000
})

service.interceptors.request.use(
    config=>{
        return config
    },
    error =>{
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response =>{
        const res=response.data
        //console.log(response)
        if(res.code != 20000){
            Message({
                message:res.message || 'Error',
                type: 'error',
                duration: 1*1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        }else{
            return res
        }
    },
    error =>{
        console.log('err' + error)
        Message({
            message:error.message,
            type:'error',
            duration:1000
        })
        return Promise.reject(error)
    }
)
export default service