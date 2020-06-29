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
      <h1> TEAM MEMBER REPORT </h1>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Member"
          width="180">
        </el-table-column>
        <el-table-column
          prop="project"
          label="Project"
          width="180">
        </el-table-column>
        <el-table-column
          prop="assigner"
          label="Assigner">
        </el-table-column>
        <el-table-column
          prop="project_right"
          label="Project_Right">
        </el-table-column>
        <el-table-column
          prop="score"
          label="Project_Score">
        </el-table-column>
        <el-table-column
          prop="time"
          label="Time_stamp">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">
              <el-link href="ReportDetail">DETAIL</el-link>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class = exportButton>
        <el-button style="margin-top:20px;text-align: right">
          EXPORT
        </el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      methods: {
        handleClick(row) {
          console.log(row);
        }
      },
      data() {
        return {
          tableData: [{
            name: 'Member1',
            project: 'Project1',
            assigner: 'Manager1',
            project_right:'40%',
            score:'7',
            time:'Current_Time'
          }, {
            name: 'Member2',
            project: 'Project2',
            assigner: 'Manager2',
            project_right:'10%',
            score:'8',
            time:'Current_Time'
          }, {
            name: 'Member3',
            project: 'Project3',
            assigner: 'Manager1',
            project_right:'20%',
            score:'5',
            time:'Current_Time'
          }, {
            name: 'Member4',
            project: 'Project4',
            assigner: 'Manager1',
            project_right:'30%',
            score:'9',
            time:'Current_Time'
          }]
        }
      }
    }
</script>

<style scoped>
</style>
