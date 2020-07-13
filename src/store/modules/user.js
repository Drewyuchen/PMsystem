import { setToken,setUserId,setUserName,setDefaultListId} from "../../utils/auth"
import { register,login} from '@/api/user'


const state={
    username:'',
    users:[],
    email_captcha:'',
}

const mutations={
    SET_USERNAME:(state,username) =>{
        state.username=username
    },
    SET_USERS:(state,users) =>{
        state.users=users
    },
    SET_EMAIL_CAPTCHA:(state,email_captcha) =>{
        state.email_captcha=email_captcha
    },
}

const actions={
    login({commit},userInfo){
        const {username,password}=userInfo
        return new Promise((resolve,reject) =>{
            login({username:username.trim(),password:password}).then(() =>{
              console.log(username)
                commit('SET_USERNAME',username)
                resolve()
            }).catch(error =>{
                reject(error)
            }
            )
        })
    },
    register({},userInfo){//默认参数{}
        const { username,password,email,name} = userInfo
        //console.log(userInfo)
        return new Promise((resolve,reject) => {
            register({name:name,username: username.trim(), password: password,email:email,active:1}).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    /*getAllUser({commit}){
        //get all username from datebase
        return new Promise((resolve,reject) =>{
          getAllUser().then(response => {
            const {data}=response
            
            commit('SET_USERS', data.users)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
    },*/
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }