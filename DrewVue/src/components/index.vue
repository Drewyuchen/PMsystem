<template>
  <div>
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
      <div class="HeaderTabs" style="width: 100%">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Home" name="first">
            <div class="text-xl">
              {{ 'What\'s on your plate today' }} ⬇️ </div>
            <div>{{ 'There is currently no work "In Progress" assigned to you' }}</div>
          </el-tab-pane>
          <el-tab-pane label="Project" name="second" >
            <div class="Tab2Header">
              <h2> All Projects List </h2>
            </div>
            <el-divider></el-divider>
            <div>
              <el-row>
                <el-card class="box-card" :span="4" v-for="project in allprojects" :key="project.pid">
                  <div slot="header" class="clearfix">
                    <span>
                      <el-link href="ProjectStatus" style="float: left; padding: 3px 0;margin-bottom: -5px">
                      <el-button  type="text" style="font-size: large"> {{project.pid}} </el-button>
                      </el-link>
                      <p class="text item" style="float:left;text-align: left;font-size: large ">{{project.descript}}</p>
                    </span>
                    <div class="PartiCipants" >
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" style="vertical-align: middle;margin-left: 5px" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" style="vertical-align: middle;margin-left: 5px" href=Profile></el-avatar>
                      </el-link>
                    </div>
                  </div>
                </el-card>
              </el-row>

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </div>

</template>

<script>
  export default {
    name: "test",
    data(){
      return {
        activeName: 'first',

        allprojects:[
          {
            "pid":"Project 1",
            "descript":"This projects is for demo purposeO1"
          },
          {
            "pid":"Project 2",
            "descript":"This projects is for demo purposeO2"
          },
          {
            "pid":"Project 3",
            "descript":"This projects is for demo purposeO3"
          },
          {
            "pid":"Project 4",
            "descript":"This projects is for demo purposeO4"
          },
          {
            "pid":"Project 5",
            "descript":"This projects is for demo purposeO5"
          },
          {
            "pid":"Project 6",
            "descript":"This projects is for demo purposeO6"
          },
          {
            "pid":"Project 7",
            "descript":"This projects is for demo purposeO7"
          },
          {
            "pid":"Project 8",
            "descript":"This projects is for demo purposeO8"
          },
        ]
      }
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
  .PartiCipants{margin-top: 5px;float: left;display: flex; justify-content:flex-start}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
    height: 200px;
  }
</style>
