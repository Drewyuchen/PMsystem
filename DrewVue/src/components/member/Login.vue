  
<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip  content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div style="position:relative">

        <div class="tips">
          <router-link style="margin-right:18px;color:#2d3a4b" :to="{name:'register'}">注册</router-link>
          <router-link style="color:#2d3a4b;" :to="{name:'forgetpasswd'}">忘记密码</router-link>
        </div>

        <el-button  class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import {validUsername} from '@/utils/validate'
export default {
    name:"Login",
    data(){
        return{
            loginForm:{
                username:'',
                password:'',
            },
            loginRules:{
                username:[{required:true,trigger:'blur'}],
                password:[{required:true}]
            },
            passwordType:'password',
            showDialog:false
        }
    },
    mouted(){
        if(this.loginForm.username ===''){
            this.$refs.username.focus()
        }else if(this.loginForm.password === ''){
            thsi.$refs.password.focus()
        }
    },
    methods:{
        showPwd(){
            if(this.passwordType === 'password'){
                this.passwordType=''
            }else{
                this.passwordType='password'
            }
            this.$nextTick(() =>{
                this.$refs.password.focus()
            })
        },
        handleLogin(){
            this.$refs.loginForm.validate(valid =>{
                if(valid){
                    this.$store.dispatch('user/login',this.loginForm).then(
                        () =>{
                            this.$router.push('/')
                        }).catch(
                            () =>{

                            }
                        )
                }else{
                    console.log('error submit!')
                    return false
                }
            })
        }
    }
}
</script>
<style lang="scss">

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $bg;
  }
}

.login-container {
.el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $bg;
    height: 47px;
    caret-color: $cursor;
    &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
    }
    }
}
.el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
}
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 100%;
  width: 100%;

  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 100px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;
    text-align:left;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>