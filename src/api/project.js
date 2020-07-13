import request from '@/utils/request'

export function getAllProject(){
    return request({
        url:'http://localhost:8065/project/projects/getAllProjects',
        method:'get',
    })
}

export function createProject(data){
    return request({
        url:'http://localhost:8065/project/projects/createProject',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
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

export function getTaskList(data){
    return request({
        url:'http://localhost:8065/project/tasks/getAllTasks',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
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
        url:'http://localhost:8086/ucenter/users/getAllUsers2',
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

export function getUsersNotInProject(data){
    return request({
        url:'http://localhost:8065/project/user/getUsersNotInProject',
        headers:{
            'Content-Type': 'application/json'
        },
        method:'post',
        data
    })
}

export function getStepsByTask(data){
    return request({
        url:'http://localhost:8065/project/steps/getSteps',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function insertToSteps(data){
    return request({
        url:'http://localhost:8065/project/steps/insertToSteps',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getStepTimeByStep(data){
    return request({
        url:'http://localhost:8065/project/step-time/getStepTimeByStep',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function insertToStepTime(data){
    return request({
        url:'http://localhost:8065/project/step-time/insertToStepTime',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getUserMarkList(){
    return request({
        url:'http://localhost:8065/project/projects/getUserMarkList',
        method:'get',
    })
}

export function getUserProject(data){
    return request({
        url:'http://localhost:8065/project/projects/getUserProject',
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data
    })
}