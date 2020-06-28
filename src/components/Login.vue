<template>
 <div class="bg-image">
<el-container :style="header" >
  <el-header >登录界面</el-header>
  <el-main>
      <el-form :model="ruleForm"   ref="ruleForm"  label-width="100px" class="demo-ruleForm">
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" placeholder="用户名" autocomplete="off"></el-input>
              </el-form-item>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="6">
             <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="密码" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="10">
            <el-form-item>
              <el-button type="primary" style="width:100px" @click="submit()">登录</el-button>

              <el-button type="danger" style="width:100px" @click="register()">注册</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      

          </el-form>
  </el-main>
  <el-footer class="tocenter">
        Yshow &copy; 2020-06-07 
  </el-footer>
</el-container>

   </div>
</template>

<style scoped>
  .bg-image{
        background:url('../assets/04.jpg');
        width:100%;
        height:100%;
        position:fixed;
        background-size:100% 100%;
  }
  .el-form:last-child
  {
    text-align: center;
  }
  .tocenter{
    padding-left: 100px;
    text-align: center;
  }
  .el-header{
    text-align: center;
  }
  .el-main{
    padding-bottom:60px;/*向上缩减70px，使footer在可视范围 */
    padding-right: 90px;
  }
  .el-footer{
    position: absolute; 
    width: 100%;
    bottom: 0;/*始终距离它的父元素的底部为0px.则是处于父元素的最底*/
    height: 60px;
    
  }
</style>

<script>
export default {
  name: 'Login',
  data() {
   
    return {
        ruleForm:{
          username:'',
          password:'',
        },
        header:{
          'padding-top': '60px',
        }
    }
  },
  methods: {
    submit()
    {
      if(this.ruleForm.username&&this.ruleForm.password)
      {
        this.$router.push('/main')
      }
      else
      {
          this.$message({
          message:'用户名或密码不能为空！',
          type:'warning'
        })
      }
    },
    register() {
      this.$router.push('/Register')
    }
  },
}
</script>


 