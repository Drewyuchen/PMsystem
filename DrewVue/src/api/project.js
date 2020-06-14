import request from '@/utils/request'

export function getAllProject(){
    return request({
        url:'http://localhost:8065/project/projects/getAllProjects',
        method:'get',
    })
}

export function getProjectById(data){
    return request({
        url:'http://localhost:8065/project/projects/getProjectById',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getTaskList(){
    return request({
        url:'http://localhost:8065/project/tasks/getAllTasks',
        method:'get',
    })
}


export function createTask(data){
    return request({
        url:'http://localhost:8065/project/tasks/insertToTasks',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getAllUsers(){
    return request({
        url:'http://localhost:8065/ucenter/users/getAllUsers',
        method:'get',
    })
}

export function addUsertoProject(data){
    return request({
        url:'http://localhost:8065/project/user/addUsertoProjectUser',
        method:'post',
        data
    })
}

export function getUsersByProject(data){
    return request({
        url:'http://localhost:8065/project/user/getUsersByProject',
        headers:{
            'Content-Type': 'application/json'
        },
        method:'post',
        data
    })
}