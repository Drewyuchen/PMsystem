<template>
    <div>
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules"  style="width:60%;margin:0 auto;padding:10px 0px;">
            <h1 style="text-align:left;padding:15% 0% 0% 0%">账号注册</h1>
            <el-form-item prop="username">
                <el-input placeholder="用户名" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input placeholder="真实姓名" v-model="registerForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-popover placement="right-start" width="200" trigger="click" :visible="state.passwordLevelChecked">
                    <div :class="currentstatus">强度：<span>{{passwordLevelName}}</span></div>
                    <el-progress :percentage="state.percent" :status="currentstatus"></el-progress>
                    <div style="margin-top: 10px;">
                        <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                    </div>
                    <el-input placeholder="密码须至少6位，且区分大小写" type="password" @click="handlePasswordInputClick" v-model="registerForm.password" slot="reference" ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item prop="rePassword">
                <el-input type="password" placeholder="请再次确认您的密码" v-model="registerForm.rePassword" ></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input placeholder="电子邮箱" v-model="registerForm.email"></el-input>
            </el-form-item>
           
            <el-form-item>
                <el-button type="primary" @click="handleRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { validUsername } from '@/utils/validate'

const levelNames={
    0:'低',
    1:'低',
    2:'中',
    3:'高'
};
const levelClass = {
        0: 'exception',
        1: 'exception',
        2: 'warning',
        3:'success'
};
export default {
    name:"Register",
    data(){
        return{
            registerForm:{
                username:'',
                password:'',
                rePassword:'',
                email:'',
                captcha:'',
                name:''
            },
            state:{
                percent:10,
                passwordLevel:0,
                passwordLevelChecked: false,
                emailSendBtn: false,
                time:60
            },
            registerRules:{
                username:[{required:true,message:"请输入用户名",trigger:['blur']},{validator:this.validateUsername}],
                name:[{required:true,message:"请输入真实名称",trigger:['blur']}],
                password:[{required:true,message:"密码须至少6位，且区分大小写",trigger:['change','blur']},{validator:this.validatePassword}],
                rePassword:[{required:true,message:"密码须至少6位，且区分大小写",trigger:['change','blur']},{validator:this.validaterePassword}],
                email:[{required:true,message:"请输入电子邮箱",trigger:['change','blur']}],
                captcha:[{ required: true, message: '请输入验证码',trigger:'blur'},{validator:this.validatereCaptcha}]
            }
        }
    },
    computed:{
        passwordLevelName() {
            return levelNames[this.state.passwordLevel]
        },
        currentstatus(){
            return levelClass[this.state.passwordLevel]
        }
    },
    methods:{
        validateUsername(rule,value,callback){
            /*this.$store.dispatch('user/getAllUser')
            if(validUsername(this.$store.getters.users,value)){
                callback(new Error("此用户名已被人注册"))
            }else{
                callback()
            }*/
            callback()
        },
        validatePassword(rule,value,callback){
            let level=0;
            // 判断这个字符串中有没有数字
            if (/[0-9]/.test(value)) {
                level++
            }
            // 判断字符串中有没有字母
            if (/[a-zA-Z]/.test(value)) {
                level++
            }
            // 判断字符串中有没有特殊符号
            if (/[^0-9a-zA-Z_]/.test(value)) {
                level++
            }
            this.state.passwordLevel = level;
            this.state.percent = level * 30;
            if(level>=2){
                if(level>=3){
                    this.state.percent=100
                }
                callback()
            }else{
                if(level===0){
                    this.state.percent=10
                }
                callback(new Error('密码强度不够'))
            }
        },
        validaterePassword(rule,value,callback){
            const password=this.registerForm.password
            if(value===undefined){
                callback(new Error("请输入密码"))
            }
            if(value && password && value.trim() != password.trim()){
                callback(new Error("两次密码不一致"))
            }
            callback()
        },
        validatereCaptcha(rule,value,callback){
            //console.log(this.$store.getters.email_captcha)
            if(value != this.$store.getters.email_captcha){
                callback(new Error("您输入的验证码不正确"))
            }
            callback()
        },
        handlePasswordInputClick() {
            this.state.passwordLevelChecked = true;
        },
        handleRegister(){
            this.$refs.registerForm.validate(valid =>{
                if(valid){
                    this.$store.dispatch('user/register',this.registerForm).then(
                        () =>{
                            this.$router.push('/member/login')
                        }
                    ).catch(() =>{
                    })
                }else{
                    console.log('error submit!')
                    return false
                }
            })
        },
    }
}
</script>
<style scoped>
    .exception { 
        color: #ff0000;
    }

    .warning { 
        color: #ff7e05;
    }

    .success { 
        color: #52c41a;
    }
</style>