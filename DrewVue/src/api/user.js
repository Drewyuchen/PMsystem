import request from '@/utils/request'

export function login(data){
    return request({
        url:'http://localhost:8086/ucenter/users/login',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function register(data){
    return request({
        url:'http://localhost:8086/ucenter/users/register',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}
