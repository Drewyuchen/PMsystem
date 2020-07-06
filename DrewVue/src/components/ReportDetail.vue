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
          <el-link href="Report"><el-button plain circle icon="custom-icon el-icon-s-data"></el-button></el-link>
        </div>
      </div>
    </el-header>
    <el-main>
      <h1> Project/Task REPORT </h1>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table :data="props.row.children" >
              <el-table-column
                prop="taskName"
                label="Task"
                width="180">
              </el-table-column>
              <el-table-column
                prop="totalHour"
                label="TaskTotalWorkHour"
                width="180">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="projectDescription"
          label="项目描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mright"
          label="项目权重">
        </el-table-column>
      </el-table>
      <el-button style="margin-top:20px;text-align: right">
        EXPORT
      </el-button>
    </el-main>
  </el-container>
</template>

<script>
  import {getUserProject} from '@/api/project'
  export default {
    name: "ReportDetail",
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.getUserProject()
    },
    methods:{
      getUserProject(){
        return new Promise((resolve,reject)=>{
          getUserProject(this.$route.query.userid).then(res =>{
              this.tableData=res.data.list
              resolve()
          }).catch((err)=>{
              console.log(err)
          })
        })
      }
    }
  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
