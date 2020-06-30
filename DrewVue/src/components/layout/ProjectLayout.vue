<template>
  <el-container>
    <el-header style="width: 100%;background-color:#EDF2F7; vertical-align: middle" >
      <div class="HeaderNotification" style=" width: 100%">
        <img src="../../assets/hh.png" style="float: left;margin-top: 10px">
      </div>

      <div class="Notification" style="margin-top: 10px;float: right">
        <el-button plain circle icon="custom-icon el-icon-message-solid" style="margin-right:-10px"></el-button>
        <el-button plain circle icon="custom-icon el-icon-message" style="margin-right:-10px"></el-button>
        <el-button plain circle icon="custom-icon el-icon-user-solid"></el-button>
        <el-link href="Report"><el-button plain circle icon="custom-icon el-icon-s-data"></el-button></el-link>

      </div>
    </el-header>
    <el-main>
      <div style="width: 100%">
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item :index="'/'+$route.params.projectid+'/task'">Task</el-menu-item>
          <el-menu-item :index="'/'+$route.params.projectid+'/discussion'">Discussion</el-menu-item>
        </el-menu>
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "ProjectLayout",
        data(){
            return{}
        }
    }
</script>

<style scoped>
.el-main{background-color: #EBEBEB}
</style>
