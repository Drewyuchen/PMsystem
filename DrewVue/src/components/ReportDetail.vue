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
            <el-table
              :data="tableDataTask"
              style="width: 100%">
              <el-table-column
                prop="task"
                label="Task"
                width="180">
              </el-table-column>
              <el-table-column
                prop="duration"
                label="Duration"
                width="180">
              </el-table-column>
              <el-table-column
                prop="totalhour"
                label="TaskTotalWorkHour">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="Project"
          prop="projectid">
        </el-table-column>
        <el-table-column
          label="Description"
          prop="description">
        </el-table-column>
        <el-table-column
          label="TotalProjectTime"
          prop="totalprojecttime">
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
          tableDataTask:[{
            task:'Task1',
            duration:'取Task1中符合前面日期篩選條件的step最早時間和最近時間',
            totalhour:'符合篩選條件下的step總工時'},
            {
              task:'Task2',
              duration:'取Task2中符合前面日期篩選條件的step最早時間和最近時間',
              totalhour:'符合篩選條件下的step總工時'},
            {
              task:'Task3',
              duration:'取Task3中符合前面日期篩選條件的step最早時間和最近時間',
              totalhour:'符合篩選條件下的step總工時'},

          ],
          tableData: [{
            projectid: 'Project1',
            description: 'ProjectDescription',
            totalprojecttime: '子項目Task 工時加總',
          },
            {
              projectid: 'Project2',
              description: 'ProjectDescription',
              totalprojecttime: '子項目Task 工時加總',
            },
            {
              projectid: 'Project3',
              description: 'ProjectDescription',
              totalprojecttime: '子項目Task 工時加總',
            },]
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
