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
        </div>
      </div>
    </el-header>
    <el-main>
      <!--Tabs-->
      <div class="HeaderTabs" style="width: 100%">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Tasks" name="first">
            <div class="TasksHeader">
              <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;padding: 10px 10px 10px 0px">
                <el-breadcrumb-item :to="{ path: '/index' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Tasks</el-breadcrumb-item>
              </el-breadcrumb>
              <h2 style="text-align: left; margin-left: 20px"> Project 1 </h2>
              <h5 style="text-align: left; margin-left: 20px"> Description: Description for Project 1 </h5>
              <div class="ADDParticipants">
                <el-button type="text" @click="open">
                  <i class="el-icon-circle-plus" style="font-size: 45px"></i>
                </el-button>
                <el-link href="Profile">
                  <el-avatar icon="el-icon-user-solid"></el-avatar>
                </el-link>
              </div>
            </div>
            <div class="CreateTask">
              <el-link>
                <el-button type="primary" @click="dialogVisible2=true">CreateTask</el-button>
              </el-link>
              <!--createTasks專案細節對話框-->
              <div class="ProjectDialog">
                <el-dialog
                  :visible.sync="dialogVisible2"
                  width="60%"
                  :before-close="handleClose">
                  <div class="dialogHeader" style="margin-top:-5px;margin-bottom: 10px">
                    <h5 style="text-align: center">Create A Task(require)</h5>
                    <div class="inPutTexting">
                      <el-input v-model="input" placeholder=" Create A Task Title "
                                style="text-align: left;width: 100%;height:50%;margin-bottom: 10px"></el-input>
                    </div>
                  </div>
                  <div class="el-dialog_body">
                    <div class="dialogBodyRow1" style="text-align: center;font-size: larger;" >
                      <div class="assignerIcon">
                        <el-link href="Profile">
                          <h6> Assigner </h6>
                          <el-avatar icon="el-icon-user-solid" :size="35" style="text-align: center" href=Profile></el-avatar>
                        </el-link>
                      </div>
                      <div class="Dialog DueDate">
                        <h6> Due Date </h6>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="Choose A Date"
                            style="width: 80%">
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="DialogRelateTo" style="text-align: center">
                        <h6> Relate To </h6>
                        <el-button type="text" @click="open" style="margin-top: -15px">
                          <i class="el-icon-circle-plus" style="font-size: 40px"></i>
                        </el-button>
                      </div>
                      <div class="DialogOther">
                        <h6> Other </h6>
                        <h6 style="text-align: center">  </h6>
                      </div>
                      <div class="DialogOthere">
                        <h6> Other </h6>
                        <h6 style="text-align: center">  </h6>
                      </div>
                    </div>
                  </div>
                  <div class="TaskDescription">
                    <el-input v-model="input" placeholder=" Task Description "
                              style="text-align: left;width: 100%;height:50%;margin-top: 10px"></el-input>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible2 = false" style="margin-top: 15px">OK</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
            <div class="DoneJob" style="color:green">
              <h6>
                DoneJob>>
              </h6>
              <el-row>
                <el-card class="box-card":span="4" v-for="project in Doneprojects" :key="project.pid" style="float: left">
                  <div slot="header" class="clearfix">
                    <span>
                      <el-link style="margin-top: -15px">
                        <el-button type="text" @click="dialogVisible=true" style="color: green">{{project.pid}}</el-button>
                      </el-link>
                      <p class="text item" style="float:left;margin-top:-5px">{{project.descript}}</p>
                    </span>
                    <div class="PartiCipants" style="margin-top: -10px">
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                    </div>
                  </div>
                </el-card>
              </el-row>
              <!--Done專案細節對話框-->
              <div class="ProjectDialog">
                <el-dialog
                  :visible.sync="dialogVisible"
                  width="60%"
                  :before-close="handleClose">
                  <div class="dialogHeader" style="margin-top:-5px;margin-bottom: 10px">
                    <h3 style="text-align: center">Work Content</h3>
                  </div>
                  <div class="el-dialog_body">
                    <div class="dialogBodyRow1" style="text-align: center;font-size: larger;" >
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
                        <h6>Work Saturation</h6>
                        <h6 style="text-align: center"> 70% </h6>
                      </div>
                    </div>
                    <div class="DialogTabs" style="float: left;width: 100%;margin-top: 10px">
                      <el-tabs type="border-card">
                        <el-tab-pane label="Previous History Review">
                          <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column type="expand">
                              <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                  <el-form-item label="Start Time">
                                    <span>{{ props.row.starttime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Endtime">
                                    <span>{{ props.row.endtime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Work Hour">
                                    <span>{{ props.row.workhour }}</span>
                                  </el-form-item>
                                  <el-form-item label="Description">
                                    <span>{{ props.row.description }}</span>
                                  </el-form-item>
                                </el-form>
                              </template>
                            </el-table-column>
                            <el-table-column
                              label="Start Time"
                              prop="starttime">
                            </el-table-column>
                            <el-table-column
                              label="End Time "
                              prop="endtime">
                            </el-table-column>
                            <el-table-column
                              label="Work Hour"
                              prop="workhour">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="Current Work Hour">
                          <div class="inPutTexting">
                            <el-input v-model="input" placeholder="Please Enter Your Work Job Description "
                                      style="text-align: left;width: 100%;margin-bottom: 10px"></el-input>
                          </div>
                          <div class="block" style="text-align: left">
                            <span class="demonstration"></span>
                            <el-time-picker
                              is-range
                              v-model="value2"
                              range-separator="-"
                              start-placeholder="Start"
                              end-placeholder="End"
                              placeholder="Choose Range">
                            </el-time-picker>
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false" style="margin-top: 15px">OK</el-button>
                  </span>
                </el-dialog>
                <!--Done專案細節對話筐結束-->
              </div>
            </div>

            <div class="InProgress" style="color:darkorange">
              <h6>
                InProgress>>
              </h6>
              <el-row>
                <el-card class="box-card":span="4" v-for="project in InProgressprojects" :key="project.pid" style="float: left">
                  <div slot="header" class="clearfix">
                    <span>
                      <el-link style="margin-top: -15px">
                        <el-button type="text" @click="dialogVisible=true" style="color: darkorange">{{project.pid}}</el-button>
                      </el-link>
                      <p class="text item" style="float:left;margin-top:-5px">{{project.descript}}</p>
                    </span>
                    <div class="PartiCipants" style="margin-top: -10px">
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                    </div>
                  </div>
                </el-card>
              </el-row>
              <!--InProgress專案細節對話框-->
              <div class="ProjectDialog">
                <el-dialog
                  :visible.sync="dialogVisible"
                  width="60%"
                  :before-close="handleClose">
                  <div class="dialogHeader" style="margin-top:-5px;margin-bottom: 10px">
                    <h3 style="text-align: center">Work Content</h3>
                  </div>
                  <div class="el-dialog_body">
                    <div class="dialogBodyRow1" style="text-align: center;font-size: larger;" >
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
                        <el-dropdown size="mini" split-button type="warning" style="text-align: center">
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
                    <div class="DialogTabs" style="float: left;width: 100%;margin-top: 10px">
                      <el-tabs type="border-card">
                        <el-tab-pane label="Previous History Review">
                          <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column type="expand">
                              <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                  <el-form-item label="Start Time">
                                    <span>{{ props.row.starttime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Endtime">
                                    <span>{{ props.row.endtime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Work Hour">
                                    <span>{{ props.row.workhour }}</span>
                                  </el-form-item>
                                  <el-form-item label="Description">
                                    <span>{{ props.row.description }}</span>
                                  </el-form-item>
                                </el-form>
                              </template>
                            </el-table-column>
                            <el-table-column
                              label="Start Time"
                              prop="starttime">
                            </el-table-column>
                            <el-table-column
                              label="End Time "
                              prop="endtime">
                            </el-table-column>
                            <el-table-column
                              label="Work Hour"
                              prop="workhour">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="Current Work Hour">
                          <div class="inPutTexting">
                            <el-input v-model="input" placeholder="Please Enter Your Work Job Description "
                                      style="text-align: left;width: 100%;margin-bottom: 10px"></el-input>
                          </div>
                          <div class="block" style="text-align: left">
                            <span class="demonstration"></span>
                            <el-time-picker
                              is-range
                              v-model="value3"
                              range-separator="-"
                              start-placeholder="Start"
                              end-placeholder="End"
                              placeholder="Choose Range">
                            </el-time-picker>
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false" style="margin-top: 15px">OK</el-button>
                  </span>
                </el-dialog>
                <!--InProgress專案細節對話筐結束-->
              </div>
            </div>


            <div class="ToDo" style="color: red">
              <h6>
                ToDo>>
              </h6>
              <el-row>
                <el-card class="box-card":span="4" v-for="project in ToDoprojects" :key="project.pid" style="float: left">
                  <div slot="header" class="clearfix">
                    <span>
                      <el-link style="margin-top: -15px">
                        <el-button type="text" @click="dialogVisible=true" style="color: red">{{project.pid}}</el-button>
                      </el-link>
                      <p class="text item" style="float:left;margin-top:-5px">{{project.descript}}</p>
                    </span>
                    <div class="PartiCipants" style="margin-top: -10px">
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                      <el-link href="Profile">
                        <el-avatar icon="el-icon-user-solid" size="small" style="vertical-align: middle" href=Profile></el-avatar>
                      </el-link>
                    </div>
                  </div>
                </el-card>
              </el-row>
              <div class="ProjectDialog" style="background-color: #EDF2F7">
                <el-dialog
                  :visible.sync="dialogVisible"
                  width="60%"
                  :before-close="handleClose">
                  <div class="dialogHeader" style="margin-top:-5px;margin-bottom: 10px">
                    <h3 style="text-align: center">Work Content</h3>
                  </div>
                  <div class="el-dialog_body">
                    <div class="dialogBodyRow1" style="text-align: center;font-size: larger;" >
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
                        <h6 style="text-align: center"> 70% </h6>
                      </div>
                    </div>
                    <div class="DialogTabs" style="float: left;width: 100%;margin-top: 10px">
                      <el-tabs type="border-card">
                        <el-tab-pane label="Previous History Review">
                          <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column type="expand">
                              <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                  <el-form-item label="Start Time">
                                    <span>{{ props.row.starttime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Endtime">
                                    <span>{{ props.row.endtime }}</span>
                                  </el-form-item>
                                  <el-form-item label="Work Hour">
                                    <span>{{ props.row.workhour }}</span>
                                  </el-form-item>
                                  <el-form-item label="Description">
                                    <span>{{ props.row.description }}</span>
                                  </el-form-item>
                                </el-form>
                              </template>
                            </el-table-column>
                            <el-table-column
                              label="Start Time"
                              prop="starttime">
                            </el-table-column>
                            <el-table-column
                              label="End Time "
                              prop="endtime">
                            </el-table-column>
                            <el-table-column
                              label="Work Hour"
                              prop="workhour">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="Current Work Hour">
                          <div class="inPutTexting">
                            <el-input v-model="input" placeholder="Please Enter Your Work Job Description "
                                      style="text-align: left;width: 100%;margin-bottom: 10px"></el-input>
                          </div>
                          <div class="block" style="text-align: left" >
                            <span class="demonstration"></span>
                            <el-time-picker
                              is-range
                              v-model="value4"
                              range-separator="-"
                              start-placeholder="Start"
                              end-placeholder="End"
                              placeholder="Choose Range">
                            </el-time-picker>
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false" style="margin-top: 15px">OK</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
          </el-tab-pane>



          <!--Discussions-->
          <el-tab-pane label="Discussions" name="second">
            <h2>Coming Soon</h2>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "ProjectStatus",
    data() {
      return {
        input: '',
        value1: '',
        value2: '',
        value3:'',
        value4:'',
        activeName: 'first',
        Doneprojects: [
          {
            "pid": "Work Job 1",
            "descript": "This projects is for demo purposeO1"
          },
          {
            "pid": "Work Job 2",
            "descript": "This projects is for demo purposeO2"
          },
          {
            "pid": "Work Job 3",
            "descript": "This projects is for demo purposeO3"
          },
          {
            "pid": "Work Job 4",
            "descript": "This projects is for demo purposeO4"
          }
        ],
        InProgressprojects: [
          {
            "pid": "Work Job 1",
            "descript": "This projects is for demo purposeO1"
          },
          {
            "pid": "Work Job 2",
            "descript": "This projects is for demo purposeO2"
          },
          {
            "pid": "Work Job 3",
            "descript": "This projects is for demo purposeO3"
          },
          {
            "pid": "Work Job 4",
            "descript": "This projects is for demo purposeO4"
          },
          {
            "pid": "Work Job 5",
            "descript": "This projects is for demo purposeO4"
          }
        ],
        ToDoprojects: [
          {
            "pid": "Work Job 1",
            "descript": "This projects is for demo purposeO1"
          },
          {
            "pid": "Work Job 2",
            "descript": "This projects is for demo purposeO2"
          },
          {
            "pid": "Work Job 3",
            "descript": "This projects is for demo purposeO3"
          },
          {
            "pid": "Work Job 4",
            "descript": "This projects is for demo purposeO4"
          },
          {
            "pid": "Work Job 5",
            "descript": "This projects is for demo purposeO5"
          },
          {
            "pid": "Work Job 6",
            "descript": "This projects is for demo purposeO6"
          },
          {
            "pid": "Work Job 7",
            "descript": "This projects is for demo purposeO7"
          },
          {
            "pid": "Work Job 8",
            "descript": "This projects is for demo purposeO8"
          },
          {
            "pid": "Work Job 9",
            "descript": "This projects is for demo purposeO9"
          }
        ],
        ToDoprojects: [
          {
            "pid": "Work Job 1",
            "descript": "This projects is for demo purposeO1"
          },
          {
            "pid": "Work Job 2",
            "descript": "This projects is for demo purposeO2"
          },
          {
            "pid": "Work Job 3",
            "descript": "This projects is for demo purposeO3"
          },
          {
            "pid": "Work Job 4",
            "descript": "This projects is for demo purposeO4"
          },
          {
            "pid": "Work Job 5",
            "descript": "This projects is for demo purposeO5"
          },
          {
            "pid": "Work Job 6",
            "descript": "This projects is for demo purposeO6"
          },
          {
            "pid": "Work Job 7",
            "descript": "This projects is for demo purposeO7"
          },
          {
            "pid": "Work Job 8",
            "descript": "This projects is for demo purposeO8"
          },
          {
            "pid": "Work Job 9",
            "descript": "This projects is for demo purposeO9"
          }
        ],
        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          }
        },
        tableData: [{
          starttime: '2020/05/10',
          endtime: '2020/05/11',
          workhour: '6',
          description: 'Demo for this Work Hour Description'
        }, {
          starttime: '2020/05/07',
          endtime: '2020/05/08',
          workhour: '3',
          description: 'Demo for this Work Hour Description'
        }, {
          starttime: '2020/05/03',
          endtime: '2020/05/05',
          workhour: '6',
          description: 'Demo for this Work Hour Description'
        }, {
          starttime: '2020/05/01',
          endtime: '2020/05/02',
          workhour: '6',
          description: 'Demo for this Work Hour Description'
        }],

        dialogVisible: false,
        methods: {
          handleClose(done) {
            this.$confirm('Sure to QUIT? ')
              .then(_ => {
                done();
              }).catch(_ => {
            });
          }
        },
        dialogVisible2: false,
        methods: {
          handleClose(done) {
            this.$confirm('Sure to QUIT? ')
              .then(_ => {
                done();
              }).catch(_ => {
            });
          }
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        }
      }
    }
  }
</script>

<style scoped>
  .el-main{background-color: #EBEBEB}
  .el-breadcrumb{font-size: 8px}
  .el-icon-circle-plus{font-size: 35px}
  .TasksHeader{background-color: #EDF2F7; width: 100%;border: 1px solid;border-radius:10px;border-color:#EDF2F7}
  .ADDParticipants{text-align: left;margin-top: 10px ;margin-left: 20px;vertical-align:middle;padding-bottom: 10px;display: flex; justify-content:flex-start}
  .el-icon-user-solid{display:-webkit-flex; display: flex;}
  .CreateTask{margin-top: 20px; text-align: left}
  .DoneJob{text-align: left;margin-top: 30px}
  .InProgress{text-align: left;margin-top: 30px}
  .ToDo{text-align: left;margin-top: 30px}
  .el-card{margin: 10px 10px 10px 10px; }
  .el-dialog_body{width: 100%;float: left; text-align: center;}
  .PartiCipants{float: left; padding: 3px 0;margin-bottom: -5px}
  .dialogBodyRow1{width: 100%;background-color: #E9EEF3;text-align: center;border: 1px solid;border-color: #E9EEF3;padding-top: 5px;display: flex;justify-content: space-around}
  .dialogBodyRow2{width: 100%;background-color: #E9EEF3;text-align: center;border: 1px solid;border-color: #E9EEF3;padding-top: 5px;display: flex; justify-content: space-around}
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
    width: 250px;
    height: 130px;
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
