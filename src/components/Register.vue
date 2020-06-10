<template>
<el-container>
  <el-header>注册界面</el-header>
  
  <el-main>
      <el-form>
        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="用户名" >
                    <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="密码">
                    <el-input v-model="password" placeholder="请输入密码" show-password clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="手机号码">
                    <el-input v-model="phone" placeholder="通过此号码可找回密码" clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

          <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item >
                  <el-button class="reg" type="primary">注册</el-button>
                </el-form-item>
            </el-col>
          </el-row>
      </el-form>

  </el-main>
  <el-footer>
    Yshow &copy; 2020-06-07 
  </el-footer>
</el-container>
</template>

<style scoped>
.reg{
    width: 304px;
}
.el-header{
    padding-left:10px ;
}

  .el-main{
    padding-bottom:60px;/*向上缩减70px，使footer在可视范围 */
  }
  .el-footer{
    position: absolute; 
    width: 100%;
    bottom: 0;/*始终距离它的父元素的底部为0px.则是处于父元素的最底*/
    height: 60px;
    
  }
</style>
<script >
export default {
 name:'Register',
  data() {
    return {
        username:'',
        password:'',
        phone:''

    }
  },
  methods: {

  }
}
</script>

