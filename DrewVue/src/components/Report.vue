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
          label="Member/Project"
          width="180">
        </el-table-column>
        <el-table-column
          prop="project1"
          label="Project1(Project 1 權重)">
        </el-table-column>
        <el-table-column
          prop="project2"
          label="Project2(Project 2 權重)">
        </el-table-column>
        <el-table-column
          prop="project3"
          label="Project3 (Project 3 權重)">
        </el-table-column>
        <el-table-column
          prop="project4"
          label="Project4(Project 4 權重)">
        </el-table-column>
        <el-table-column
          prop="member_saturation"
          label="Member Saturation">
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
          value1:'',
          tableData: [{
            name: 'Member1',
            project1:'project1權重*project1總工時',
            project2:'project2權重*project2總工時',
            project3:'project3權重*project3總工時',
            project4:'project4權重*project4總工時',
            member_saturation:'左方menber1 四個欄位加總'
          }, {
            name: 'Member2',
            project1:'project1權重*project1總工時',
            project2:'project2權重*project2總工時',
            project3:'project3權重*project3總工時',
            project4:'project4權重*project4總工時',
            member_saturation:'左方menber2 四個欄位加總'
          }, {
            name: 'Member3',
            project1:'project1權重*project1總工時',
            project2:'project2權重*project2總工時',
            project3:'project3權重*project3總工時',
            project4:'project4權重*project4總工時',
            member_saturation:'左方menber3 四個欄位加總'
          }, {
            name: 'Member4',
            project1:'project1權重*project1總工時',
            project2:'project2權重*project2總工時',
            project3:'project3權重*project3總工時',
            project4:'project4權重*project4總工時',
            member_saturation:'左方menber4 四個欄位加總'
          },
            {
              name: 'Member5',
              project1:'project1權重*project1總工時',
              project2:'project2權重*project2總工時',
              project3:'project3權重*project3總工時',
              project4:'project4權重*project4總工時',
              member_saturation:'左方menber5 四個欄位加總'
            },
            {
              name: 'Total',
              project1:'project1權重*menber1-5project1總工時',
              project2:'project2權重*menber1-5project2總工時',
              project3:'project3權重*menber1-5project3總工時',
              project4:'project4權重*menber1-5project4總工時',
              member_saturation:'左方四個欄位加總'
            }
          ],

        }
      }
    }
</script>

<style scoped>
</style>
