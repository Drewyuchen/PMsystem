<template>
  <el-container>
    <el-header style="width: 100%;background-color:#F3F3F3; vertical-align: middle" >
      <div class="HeaderNotification" style=" width: 100%" >
        <el-link href="index" style="float: left;margin-top: 10px">
        <img src="../assets/hh.png" >
        </el-link>
        <div class="Notification" style="margin-top: 10px;float: right">
          <el-button plain circle icon="custom-icon el-icon-message-solid" style="margin-right:-10px"></el-button>
          <el-button plain circle icon="custom-icon el-icon-message" style="margin-right:-10px"></el-button>
          <el-button plain circle icon="custom-icon el-icon-user-solid"></el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      <div style="width: 100%">
        <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect" router>
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/project">Project</el-menu-item>
        </el-menu>
        <router-view />
      </div>
    </el-main>
  </el-container>

</template>

<script>
import {getAllProject} from '@/api/project'
  export default {
    name: "test",
    data(){
      return {
      }
    },
    created(){
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    }
  }
</script>

<style scoped>
  .el-main{background-color: #EBEBEB;text-align: center}
  .el-card{float: left;margin: 10px 10px 0 10px ;display: flex;justify-content: space-around;flex-wrap: nowrap;}
  .el-icon-user-solid{font-size: small}
  .el-tab{font-size: large}
  .el-tab-pane{font-size: large;}
  .el-card{margin: 10px 5px 5px 5px }
</style>
