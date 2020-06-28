<template>
<div class="bg-image">
<el-container >
  <el-header>注册界面</el-header>
  
  <el-main>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :span="5">
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="ruleForm.password2" placeholder="请再次输入密码" show-password clearable></el-input>
                </el-form-item>
            </el-col>
        </el-row>

          <el-row type="flex" style="height:40px" justify="center">
            <el-col :span="5">
             <el-form-item label="手机号"> </el-form-item>
            </el-col>
          </el-row>
        <el-row type="flex" justify="center">  
            <el-col :span="1">
              <div class="next-input-addon">+86</div>
            </el-col>
            
            <el-col :span="4">
              <el-form-item prop="phone">                               
                   <el-input v-model="ruleForm.phone" placeholder="通过此号码可找回密码" clearable></el-input>              
               </el-form-item>
            </el-col>
         </el-row>

          <el-row type="flex" justify="center" style="margin-top:20px">
            <el-col :span="5">
                <el-form-item >
                  <el-button class="reg" type="primary" @click="submitForm('ruleForm')">注册</el-button>
                </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center" style="margin-top:20px">
            <el-col :span="5">
                <el-form-item >
                  <el-button class="reg" type="success" @click="back()">返回</el-button>
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



.next-input-addon{
    width: 50px;
    background: #fff;
    font-size: 14px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    color: #989eA0;

}
  .bg-image{
        background:url('../assets/03.jpg');
        width:100%;
        height:100%;
        position:fixed;
        background-size:100% 100%;
  }
.el-container{
  padding-top: 30px;
}
  .tocenter{
    padding-left: 50px;
    text-align: center;
  }
.reg{
    width: 300px;
}
.el-header{
    padding-left:10px ;
    text-align: center;
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
    var validateUserName = (rule,value,callback)=>{
      if(!value)
      {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(()=>{
        if(value.length<4||value.length>8)
        {
          return callback(new Error('用户名长度大于3小于8'))
        }
        else
        {
          callback();
        }
      },1000)
    };

     var validatePassWord = (rule, value, callback) => {
        if (value === '') {15
          callback(new Error('密码不能为空'));
        } else {
          if (this.ruleForm.validatePassWord2 !== '') {
            this.$refs.ruleForm.validateField('validatePassWord2');
          }
          callback();
        }
      };

      var validatePassWord2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      var validatePhone = (rule,value,callback)=>{
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)))
            {
              return callback(new Error('请输入正确的手机号'));
            }
            else
            {
              callback();
            }
    
    };
    return {
          ruleForm:{
            username:'',
            password:'',
            password2:'',
            phone:''
          },
          rules:{
            username:[
              { validator: validateUserName, trigger: 'blur' }
            ],
            password:[
              { validator: validatePassWord, trigger: 'blur' }
            ],
            password2:[
              { validator: validatePassWord2, trigger: 'blur' }
            ],
            phone:[
              { validator: validatePhone, trigger: 'blur' }
            ]
          }
    }
  },
  methods: {
      submitForm(formName)
      {
          this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      back()
      {
            this.$router.push('/Login')
      }
  }
}
</script>

