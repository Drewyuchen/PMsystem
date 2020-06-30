<template>
    <div>
        <div>
            <h2 style="margin-top:20px"> All Projects List </h2>
        </div>
        <el-divider></el-divider>
        <div>
            <el-row :gutter="200">
                <el-col :span="4" v-for="project in allprojects" :key="project.id" style="margin-right: 50px">
                    <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <div style="text-align: left ">
                            <router-link :to="'/'+project.id+'/task'" style="padding: 0px 0;margin-bottom: -5px">
                                <el-button  type="text" style="font-size: large"> {{project.name}} </el-button>
                            </router-link>
                        </div>
                        <div class="text item" style="text-align: left;font-size: large ">{{project.description}}</div>
                    </div>

                    <div class="PartiCipants" >
                        <el-link href="Profile" v-for="member in project.members" :key="member.id">
                            <el-avatar :src="member.avatar" style="vertical-align: middle" href=Profile></el-avatar>
                        </el-link>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import {getAllProject} from '@/api/project'
export default {
    name: "Project",
    data(){
        return {
            allprojects:[]
        }
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
      }
    }
}
</script>

<style scoped>

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
