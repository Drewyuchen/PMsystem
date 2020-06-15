<template>
  <div class="home">
    <el-container>
      <el-header>
        <h1 style="float: right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="About Us" name="first"></el-tab-pane>
            <el-tab-pane label="Delicacy" name="second"></el-tab-pane>
            <el-tab-pane label="Service" name="third"></el-tab-pane>
            <el-tab-pane label="Posts" name="fourth"></el-tab-pane>
            <el-tab-pane label="Contact Us" name="fifth"></el-tab-pane>
          </el-tabs>
        </h1>
      </el-header>
      <el-main>
        <div class="About US">
          <h2>About Us</h2>
          <el-divider></el-divider>
        </div>
        <div>
          <h2>Our Delicacy</h2>
          <el-divider></el-divider>
        </div>
        <div>
        <h2>Our Service</h2>
        <el-divider></el-divider>
      </div>
        <div>
          <h2>Posts</h2>
        </div>
      </el-main>
      <el-footer>
        <div>
          Contact Us
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data() {
        return {
          activeName: 'second'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }

</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    float: right;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
