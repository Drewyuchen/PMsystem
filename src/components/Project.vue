<template>
    <div>
        <div>
            <h2 style="margin-top:20px"> All Projects List </h2>
        </div>
        <el-divider></el-divider>
        <div class="ProjectCard" style="display: block">
            <el-row :gutter="200">
                <el-col :span="4" v-for="project in allprojects" :key="project.id" style="margin-right: 150px;
                margin-top: 30px">
                    <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <div style="text-align: left ">
                            <router-link :to="'/'+project.id+'/task'" style="padding: 0px 0;margin-bottom: -5px">
                                <el-button  type="text" style="font-size: large"> {{project.name}} </el-button>
                            </router-link>
                        </div>
                        <div class="text item" style="text-align: left;font-size: large ">{{project.description}}</div>
                    </div>

                    <div class="PartiCipants"  style="display: block; margin-bottom: 15px">
                        <el-link href="Profile" v-for="member in project.members" :key="member.id">
                            <el-avatar :src="member.avatar" size="medium" style="vertical-align: middle;margin-right: 3px" href=Profile></el-avatar>
                        </el-link>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

      <div class="CreateProject" >
        <el-link type="primary" icon="el-icon-circle-plus-outline" @click="ProjectVisible = true"
                 style="font-size: 70px"></el-link>
        <el-dialog
          title="About Project Information"
          :visible.sync="ProjectVisible"
          width="60%"
          :before-close="handleClose">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="Project Name">
              <el-input v-model="form.Projectname" placeholder="Please Enter A Project Name"></el-input>
            </el-form-item>
            <el-form-item label="Project Description">
              <el-input v-model="form.ProjectDesc" placeholder="Please Enter A Project Description"></el-input>
            </el-form-item>
            <el-form-item label="Project Right">
              <div class="block">
                <el-slider
                  v-model="ProjectRightvalue"
                  show-input input-size="large" :format-tooltip="formatTooltip" style="margin-left: 5px">
                </el-slider>
              </div>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="ProjectVisible = false">Cancel</el-button>
            <el-button type="primary" @click="createProject();ProjectVisible = false;getAllProject()">OK</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
import {getAllProject,createProject} from '@/api/project'
export default {
    name: "Project",
    data(){
        return {
          form: {
            Projectname:'',
            ProjectDesc:''
          },
          allprojects:[],
          ProjectVisible: false,
          ProjectRightvalue: 0
        };
    },

    created(){
        this.getAllProject()
    },
    methods:{
      getAllProject(){
        return new Promise((resolve,reject)=>{
          getAllProject().then((res)=>{
            this.allprojects=res.data.list
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      createProject(){
        return new Promise((resolve,reject)=>{
          createProject({
            description: this.form.ProjectDesc,
            gmtCreate: "2020-07-06 00:51:15",
            gmtModified: "2020-07-06 00:51:15",
            is_public: 1,
            mright:this.ProjectRightvalue/100,
            name: this.form.Projectname,
            officeId: 0,
            ownerId: 0,
            teamId: 0
          }).then((res)=>{
            this.allprojects=res.data.list
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      formatTooltip(val) {
        return val / 100;
      },
      handleClose(done) {
          this.$confirm('Sure to Close？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
    }
}
</script>

<style scoped>

    .PartiCipants{margin-top: 5px;float: left;display: flex; justify-content:flex-start}
    .el-input{margin-bottom: 15px}
    .el-dialog{font-size: larger}
    .el-button{margin-bottom: 15px}

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
        width: 400px;
        height: 100%;
    }
</style>

