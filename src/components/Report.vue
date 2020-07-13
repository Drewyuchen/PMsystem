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
          prop="uname"
          label="Member"
          width="180">
        </el-table-column>
        <el-table-column
          prop="totalScore"
          label="Score">
        </el-table-column>
        <el-table-column
          prop="totalWorkHour"
          label="WorkHour">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"><el-link>Detail</el-link></el-button>
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
    import {getUserMarkList} from '@/api/project'
    export default {
      data() {
        return {
          value1:'',
          tableData: [],

        }
      },
      created(){
        this.getUserMarkList()
      },
      methods: {
        handleClick(row) {
          console.log(row)
          this.$router.push({name:'reportdetail',query:{'userid':row.uid}})
        },
        getUserMarkList(){
          return new Promise((resolve,reject)=>{
            getUserMarkList().then(res =>{
                this.tableData=res.data.list
                resolve()
            }).catch((err)=>{
                console.log(err)
            })
          })
        }
      },
    }
</script>

<style scoped>
</style>
