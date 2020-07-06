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
      <h1> WEEKLY TEAM MEMBER REPORT </h1>
      <div class="block" style="margin-bottom: 20px;text-align: right">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="Start"
          end-placeholder="End">
        </el-date-picker>
      </div>
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
          prop="Score"
          label="Score">
        </el-table-column>
        <el-table-column
          prop="WorkHour"
          label="WorkHour">
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
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "report2",
    data() {
      return {
        value1:'',
        tableData: [{
          name: 'Member1',
          Score:'Member 1 在所有參與項目內的時間乘上對應項目的權重加總而得的分數',
          WorkHour:'Member 1 在所有參與項目內的時間',
        }],
      };
    }
  }
</script>

<style scoped>

</style>
