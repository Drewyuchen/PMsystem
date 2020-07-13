import {getToken} from "@/utils/auth"

export function validUsername(validList,str){
    return validList.indexOf(str.trim())>=0
}

export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/*
export function validListname(validList,str){
    if(validList.length ==0){
        return false
    }
    let tmp=[]
    for(let i=0;i<validList.length;i++){
        tmp.push(validList[i]['listname'])
    }
    //console.log(tmp)
    return tmp.indexOf(str.trim())>=0
}*/

export function isLogin() {
    return getToken != undefined
}