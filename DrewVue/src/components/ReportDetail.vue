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
      <h1>TEAM TASK REPORT </h1>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="tableDataStep"
              style="width: 100%">
              <el-table-column
                prop="step"
                label="step"
                width="180">
              </el-table-column>
              <el-table-column
                prop="duration"
                label="Duration"
                width="180">
              </el-table-column>
              <el-table-column
                prop="workhour"
                label="WorkHour">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="Task"
          prop="taskid">
        </el-table-column>
        <el-table-column
          label="Description"
          prop="description">
        </el-table-column>
        <el-table-column
          label="TotalTaskTime"
          prop="totaltasktime">
        </el-table-column>
      </el-table>
      <el-button style="margin-top:20px;text-align: right">
        EXPORT
      </el-button>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "ReportDetail",
      data() {
        return {
          tableDataStep:[{
            step:'step1',
            duration:'2020/05/01-2020/05/01',
            workhour:'3'},
            {step: 'step2',
              duration: '2020/05/02-2020/05/02',
              workhour: '4',
            },
            {step: 'step3',
              duration: '2020/05/03-2020/05/03',
              workhour: '3',
          }],
          tableData: [{
            taskid: 'Task1',
            description: 'Task1Description',
            totaltasktime: '10',

          }, {
            taskid: 'Task2',
            description: 'Task2Description',
            totaltasktime: '10',
          }, {
            taskid: 'Task3',
            description: 'Task3Description',
            totaltasktime: '10',
          }, {
            taskid: 'Task4',
            description: 'Task4Description',
            totaltasktime: '10',
          }]
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
