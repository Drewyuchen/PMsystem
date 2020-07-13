<template>
  <el-container>
    <el-main>
      <div class="HeaderTabs" style="width: 100%">
        <div class="TasksHeader">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;padding: 10px 10px 10px 0px">
            <el-breadcrumb-item :to="{ path: '/project' }">Project</el-breadcrumb-item>
            <el-breadcrumb-item>Tasks</el-breadcrumb-item>
          </el-breadcrumb>
          <h2 style="text-align: left; margin-left: 20px">{{projectinfo.name}}</h2>
          <h5 style="text-align: left; margin-left: 20px"> Description: {{projectinfo.description}} </h5>
          <div class="ADDParticipants">
            <el-dialog
            width="30%"
            :visible.sync="UsersdialogVisible"
            title="加入成员">
              <center>
                <el-select placeholder="请选择成员" v-model="currentSelectUserId" @change="getUserId" style="width:80%">
                  <el-option v-for="user in allusers" :key="user.id" :label="user.name" :value="user.id"></el-option>
                </el-select>
              </center>
                <div slot="footer" class="dialog-footer" style="padding-top:20px">
                <el-button @click.stop.prevent="UsersdialogVisible = false">取 消</el-button>
                <el-button type="primary" @click.stop.prevent="addUsertoProject();UsersdialogVisible=false;currentSelectUserId=''">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="text" @click="UsersdialogVisible=true;getUsersNotInProject()">
              <i class="el-icon-circle-plus" style="font-size: 45px"></i>
            </el-button>
            <el-link href="Profile" v-for="member in usersInProject" :key="member.id">
              <el-avatar :src="member.avatar" icon="el-icon-user-solid"></el-avatar>
            </el-link>
          </div>
        </div>

        <div class="CreateTask">
            <el-button type="primary" @click="createTaskDialogVisible=true">CreateTask</el-button>
        </div>
        <!--createTasks專案細節對話框-->
        <el-dialog
          :visible.sync="createTaskDialogVisible"
          width="60%"
          title="Create A Task(require)">
          <el-form ref="taskForm" :model="taskForm" :rules="taskFormRules" label-position="left">
            <el-form-item prop="title">
              <el-input v-model="taskForm.title" placeholder=" Create A Task Title " style="width: 100%;height:50%;margin-bottom: 10px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row style="width: 100%;background-color: #E9EEF3;border: 1px solid;border-color: #E9EEF3;padding-top: 5px;">
                <el-col :span="6">
                  <el-form-item prop="currentMember" label="Assigner">
                    <el-select placeholder="select a member" v-model="taskForm.currentMember" @change="getMemberId" style="width:80%">
                      <el-option v-for="user in allusers" :key="user.id" :label="user.name" :value="user.id"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="duedate" label="Due Date">
                    <el-date-picker
                      v-model="taskForm.duedate"
                      type="date"
                      value-format="yyyy-MM-dd hh:mm:ss"
                      format="yyyy-MM-dd"
                      placeholder="Choose A Date"
                      style="width: 80%">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="RelatetoMember" label="Relate To">

                    <el-select placeholder="Select a Relate member" v-model="taskForm.RelatetoMember" @change="getRelatetoMemberId" style="width:80%">
                      <el-option v-for="user in allusers" :key="user.id" :label="user.name" :value="user.id"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="other" label="Other">
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item prop="description" label="Description" style="padding-top:10px">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="taskForm.description" placeholder=" Task Description" maxlength="30" show-word-limit></el-input>
              </el-form-item>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="createTask();getTaskList()" style="margin-top: 15px">OK</el-button>
          </span>
        </el-dialog>



        <div v-for="(value,key) in allTasks" :key="key" :class="key">
          <h6>
            {{key}}>>
          </h6>
          <el-row :gutter="10">
            <el-col :span="4" v-for="task in value" :key="task.id" style="margin-right: 10px">
              <el-card class="box-card">
                <div slot="header" class="clearfix" style="margin-bottom: -10px">
                  <div style="text-align: left ">
                    <el-button type="text" @click="taskDialogVisible=true;currentTaskId=task.id;getStepsByTask(task.id)"
                               class="color">{{task.name}}</el-button></div>
                  <div class="text item" style="text-align: left;font-size:smaller">{{task.notes}}</div>
                </div>
                <div class="PartiCipants" style="margin-top:-15px">
                    <el-link href="Profile">
                      <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                    </el-link>
                    <el-link href="Profile">
                      <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                    </el-link>
                  </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
          <!--專案細節對話框-->
        <el-dialog
          :visible.sync="taskDialogVisible"
          width="60%"
          title="Work Content">
          <div>
            <div class="dialogBodyRow1">
              <div class="assignerIcon">
                <el-link href="Profile">
                  <h6> Assigner </h6>
                  <el-avatar icon="el-icon-user-solid" style="text-align: center" href=Profile></el-avatar>
                </el-link>
              </div>
              <div class="Dialog DueDate">
                <h6> Due Date </h6>
                <h6 style="text-align: center"> 01 June </h6>
              </div>
              <div class="DialogStatus">
                <h6> Status </h6>
                <el-dropdown size="mini" split-button type="primary" style="text-align: center">
                  Status
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Done</el-dropdown-item>
                    <el-dropdown-item>InProgress</el-dropdown-item>
                    <el-dropdown-item>ToDo</el-dropdown-item>
                    <el-dropdown-item>Cancel</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="DialogRelateTo">
                <h6> Relate To </h6>
                <h6 style="text-align: center"> Drew Chen </h6>
              </div>
              <div class="DialogDetails">
                <h6> Details </h6>
                <h6 style="text-align: center"> None </h6>
              </div>
              <div class="DialogWorkHour">
                <h6> Work Hour </h6>
                <h6 style="text-align: center"> 6.5 </h6>
              </div>
              <div class="DialogSaturation">
                <h6> Work Saturation </h6>
                <h6 style="text-align: center"> 80% </h6>
              </div>
              <div class="DialogOther">
                <h6> Other1 </h6>
                <h6 style="text-align: center">  </h6>
              </div>
            </div>
            <div>
              <el-tabs type="border-card">
                <el-tab-pane label="All steps">
                  <el-table
                  :data="stepData"
                  style="width:100%"
                  height="250"
                  @row-click="handleRowClick">
                    <el-table-column
                    align="center"
                    prop="title"
                    label="Name"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    prop="description"
                    label="Description"
                    width="360">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="Create new step">
                  <el-form ref="stepForm" :model="stepForm" :rules="stepFormRules" label-position="left">
                    <el-form-item prop="title" label="Title">
                      <el-input type="text" v-model="stepForm.title" placeholder="Please enter step title" maxlength="30" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item prop="description" label="Description">
                      <el-input type="textarea" v-model="stepForm.description" placeholder="Please enter step description" maxlength="70" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="insertToSteps(currentTaskId)">OK</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-dialog>
        <el-dialog
          :visible.sync="StepDialogVisible"
          append-to-body
          width="60%"
          title="currentStep">
            <div>
              <el-tabs type="border-card">
                <el-tab-pane label="Previous History Review">
                  <el-table
                    :data="steptimeData"
                    style="width: 100%">
                    <el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                          <el-form-item label="Title">
                          <span>{{ props.row.title }}</span>
                          </el-form-item>
                          <el-form-item label="Start Time">
                            <span>{{ props.row.startTime }}</span>
                          </el-form-item>
                          <el-form-item label="Endtime">
                            <span>{{ props.row.endTime }}</span>
                          </el-form-item>
                          <el-form-item label="Work Hour">
                            <span>{{ props.row.workHour }}</span>
                          </el-form-item>
                          <el-form-item label="Description">
                            <span>{{ props.row.description }}</span>
                          </el-form-item>
                        </el-form>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="Start Time"
                      prop="startTime">
                    </el-table-column>
                    <el-table-column
                      label="End Time "
                      prop="endTime">
                    </el-table-column>
                    <el-table-column
                      label="Work Hour"
                      prop="workHour">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="Current Work Hour">
                  <el-form ref="steptimeForm" :model="steptimeForm" :rules="steptimeFormRules" label-position="right" label-width="100px">
                    <el-form-item prop="title" label="Title">
                      <el-input type="text" v-model="steptimeForm.title" placeholder="Please enter step title" maxlength="30" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item prop="description" label="Description">
                      <el-input type="textarea" v-model="steptimeForm.description" placeholder="Please enter step description" maxlength="70" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item prop="stepdate" label="Time">
                      <el-time-picker
                        is-range
                        v-model="steptimeForm.stepdate"
                        value-format="yyyy-MM-dd hh:mm:ss"
                        format="hh:mm:ss"
                        type="daterange"
                        placeholder="Choose A time"
                        range-separator="-"
                        start-placeholder="Start"
                        end-placeholder="End">
                      </el-time-picker>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="insertToStepTime(currentStepId)">OK</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
        </el-dialog>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {getProjectById,getTaskList,createTask,getUsersByProject,addUsertoProject,getStepsByTask,insertToSteps,getStepTimeByStep,insertToStepTime,getUsersNotInProject} from '@/api/project'
  export default {
    name: "Task",
    data() {
      var date=new Date()
      return {
        value3:'',
        currentSelectUserId:'',
        taskForm:{
          title:'',
          currentMember:'',
          RelatetoMember:'',
          duedate:'',
          description:''
        },
        taskFormRules:{
          title:[{required: true, message: 'Please input a task title', trigger: 'blur' }],
          currentMember:[{required: true, message: 'Please select a member', trigger: 'change' }],
          RelatetoMember:[{required: true, message: 'Please select a relate member', trigger: 'change' }],
          duedate:[{required: true, message: 'Please select a date', trigger: 'change' }],
          description:[{required: true, message: 'Please input a task description', trigger: 'blur' }],
        },
        stepForm:{
          title:'',
          description:'',
        },
        stepFormRules:{
          title:[{required: true, message: 'Please input a step title', trigger: 'blur' }],
          description:[{required: true, message: 'Please input a step description', trigger: 'blur' }],
        },
        steptimeForm:{
          title:'',
          description:'',
          stepdate:[new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 40), new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 40)],
        },
        steptimeFormRules:{
          title:[{required: true, message: 'Please input a steptime title', trigger: 'blur' }],
          description:[{required: true, message: 'Please input a steptime description', trigger: 'blur' }],
          stepdate:[{required: true,message: 'Please select a date range', trigger: 'change' }],
        },
        step:'',
        currentTaskId:0,
        currentStepId:0,
        UsersdialogVisible:false,
        projectinfo:{},
        allTasks: [],
        allusers:[],
        usersInProject:[],
        stepData:[],
        steptimeData: [],
        taskDialogVisible: false,
        StepDialogVisible:false,
        createTaskDialogVisible: false,
      }
    },
    created(){
      this.getProjectById()
      this.getTaskList()
      this.getUsersByProject()
      this.getUsersNotInProject()
    },
    methods:{
      getUsersNotInProject(){
        return new Promise((resolve,reject)=>{
          getUsersNotInProject(this.$route.params.projectid).then((res)=>{
            console.log(res)
            this.allusers=res.data.list
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      getUsersByProject(){
        return new Promise((resolve,reject)=>{
          getUsersByProject(this.$route.params.projectid).then((res)=>{
              this.usersInProject=res.data.list
            console.log(this.usersInProject)
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      getUserId(val){
        this.currentSelectUserId=val
      },
      getMemberId(val){
        this.taskForm.currentMember=val
      },
      getRelatetoMemberId(val){
        this.taskForm.RelatetoMember=val
      },
      addUsertoProject(){
        return new Promise((resolve,reject)=>{
          addUsertoProject({
            gmtCreate: "2020-06-14 11:28:22",
            gmtModified: "2020-06-14 11:28:22",
            projectId:this.$route.params.projectid,
            teamId: 0,
            userId: this.currentSelectUserId
          }).then((res)=>{
            this.getUsersByProject()
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      getProjectById(){
        return new Promise((resolve,reject)=>{
          getProjectById(this.$route.params.projectid).then((res)=>{
            this.projectinfo=res.data.project
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      getTaskList(){
        return new Promise((resolve,reject)=>{
          getTaskList(this.$route.params.projectid).then((res)=>{
            this.allTasks=res.data.map
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      createTask(){
        this.$refs.taskForm.validate((valid) =>{
          if(valid){
            return new Promise((resolve,reject)=>{
              createTask({archived: true,
                  assignedTo: 1,
                  completed: true,
                  createdBy: 3,
                  cycleId: 0,
                  dueOn: this.taskForm.duedate,
                  gmtCreate: "2020-06-14 02:03:09",
                  gmtModified: "2020-06-14 02:03:09",
                  name: this.taskForm.title,
                  notes: this.taskForm.description,
                  parentId: this.$route.params.projectid,
                  relatedTo: "string",
                  statusId: 0,
                  taskableId: 0,
                  taskableType: "string"}).then((res)=>{
                    this.$message.success('Create new steptime finished!')
                    this.createTaskDialogVisible=false
                    resolve()
              }).catch((err)=>{
                console.log(err)
              })
            })
          }else{
            this.createTaskDialogVisible=true
            console.log('error submit!!');
            return false;
          }
        })
      },
      getStepsByTask(id){
        return new Promise((resolve,reject)=>{
          getStepsByTask(id).then((res)=>{
            this.stepData=res.data.list
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      getStepTimeByStep(id){
        return new Promise((resolve,reject)=>{
          getStepTimeByStep(id).then((res)=>{
            this.steptimeData=res.data.list
            resolve()
          }).catch((err)=>{
            console.log(err)
          })
        })
      },
      handleRowClick(row, event, column){
        this.StepDialogVisible=true
        this.getStepTimeByStep(row.id)
        this.currentStepId=row.id
      },
      insertToSteps(id){
        this.$refs.stepForm.validate((valid)=>{
          if(valid){
            return new Promise((resolve,reject)=>{
              insertToSteps({
                description: this.stepForm.description,
                done: true,
                gmtCreate: "2020-06-16 08:13:14",
                gmtModified: "2020-06-16 08:13:14",
                taskId: id,
                title: this.stepForm.title,
                unknown: true
              }).then((res)=>{
                this.$message.success('Create new steps finished!')
                this.getStepsByTask(id)
                resolve()
              }).catch((err)=>{
                console.log(err)
              })
            })
          }else{
            console.log('error submit!!');
            return false;
          }
        })
      },
      insertToStepTime(id){
        this.$refs.steptimeForm.validate((valid)=>{
          if(valid){
            console.log(this.steptimeForm.stepdate[0])
            return new Promise((resolve,reject)=>{
              insertToStepTime({
                description: this.steptimeForm.description,
                gmtCreate: "2020-06-16 08:13:14",
                gmtModified: "2020-06-16 08:13:14",
                stepId: id,
                title: this.steptimeForm.title,
                userId: 1,
                workHour:4,
                startTime:this.steptimeForm.stepdate[0],
                endTime:this.steptimeForm.stepdate[1]
              }).then((res)=>{
                this.$message.success('Create new steptime finished!')
                this.getStepTimeByStep(id)
                resolve()
              }).catch((err)=>{
                console.log(err)
              })
            })
          }else{
            console.log('error submit!!');
            return false;
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .el-main{background-color: #EBEBEB}
  .el-breadcrumb{font-size: 8px}
  .el-icon-circle-plus{font-size: 35px}
  .el-select{float: left;}
  .el-date-editor{float: left;}
  .TasksHeader{background-color: #EDF2F7; width: 100%;border: 1px solid;border-radius:10px;border-color:#EDF2F7}
  .ADDParticipants{text-align: left;margin-top: 10px ;margin-left: 20px;vertical-align:middle;padding-bottom: 10px;display: flex; justify-content:flex-start}
  .el-icon-user-solid{display:-webkit-flex; display: flex;}
  .CreateTask{margin-top: 20px; text-align: left}
  .completed{text-align: left;margin-top: 30px;color:green;.color{color:green}}
  .inprogress{text-align: left;margin-top: 30px;color:darkorange;.color{color:darkorange}}
  .todo{text-align: left;margin-top: 30px;color: red;.color{color:red}}
  .PartiCipants{float: left; padding: 3px 0;margin-bottom: -5px}
  .dialogBodyRow1{width: 100%;background-color: #E9EEF3;border: 1px solid;border-color: #E9EEF3;padding-top: 5px;display: flex;justify-content: space-around;font-size: large}
  .h6{font-size: large;font-weight: bold}
  .el-time-picker {width: 100%}
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
    width: 200px;
    height: 170px;
    margin-bottom:20px;
    margin-right: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
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
