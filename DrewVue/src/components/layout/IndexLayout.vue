<template>
    <el-container style="position:absolute;z-index:999;width:50%;left: 50%;transform: translate(-50%, 0%);">
        <el-header style="padding:15% 0 0 0 ">
            <el-row>
                <el-col :span="24"><center><i class="el-icon-platform-eleme"><span style="padding:20px 0;font-size:30px">Foxconn</span></i></center></el-col>
                <el-col :span="24"><center><p>欢迎使用Foxconn项目管理系统</p></center></el-col>
            </el-row>
        </el-header>
        <el-main>
                <router-view />
        </el-main>
        <el-footer>
                <div class="copyright " style="position: absolute; bottom:0px;left: 50%;transform: translate(-50%, 0%);">
                Copyright &copy; 2019 Foxconn
                </div>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name:"IndexLayout",
        data(){
            return{

            }
        },
    }
</script>

<style lang="less" scoped>
</style>