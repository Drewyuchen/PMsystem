import Cookies from 'js-cookie'


export function getToken(){
    return Cookies.get("TokenKey")
}

export function setToken(token){
    console.log(token)
    return Cookies.set("TokenKey",token)
}

export function removeToken(){
    return Cookies.remove("TokenKey")
}

export function setUserId(userid){
    return Cookies.set("UserId",userid)
}

export function getUserId(){
    return Cookies.get("UserId")
}

export function setUserName(username){
    return Cookies.set("UserName",username)
}

export function getUserName(){
    return Cookies.get("UserName")
}

export function getDefaultListId(){
    return Cookies.get("DefaultListId")
}

export function setDefaultListId(listid){
    return Cookies.set("DefaultListId",listid)
}