<!-- 公用导航 -->
<template>
    <div class="sidebar">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-top: 20px;">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">关闭</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" router class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <!-- 导航必须设置 router,页面跳转才生效 -->
              <el-submenu index="1">
                    <template slot="title">
                          <i class="el-icon-document"></i>
                          <span slot="title">Mock 列表</span>
                    </template>
                    <!-- 每一个页面转转路径 必须和router/index.js 的path一致 -->
                    <el-menu-item-group>
                          <el-menu-item index="/info/booklist" class='el-menu-item1'>最新上映</el-menu-item>  
                    </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                     <template slot="title">
                          <i class="el-icon-menu"></i>
                          <span slot="title">图集</span>
                    </template>
                    <el-menu-item-group>
                          <el-menu-item index="/info/images" class='el-menu-item1'>图集展示</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                          <el-menu-item index="1-4-1" class='el-menu-item1'>音乐上线统计</el-menu-item>
                    </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
              </el-menu-item>
               <el-menu-item index="4">
                    <i class="el-icon-goods"></i>
                    <span slot="title" @click="logout">退出登录</span>
              </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
     export default {
        data() {
              return {
                isCollapse: false,
              };
        },
        methods: {
              handleOpen(key, keyPath) {
                // console.log(key, keyPath);
              },
              handleClose(key, keyPath) {
                // console.log(2222);
              },
               logout(){
                    var _this = this;
                    this.$confirm('确认退出吗?', '提示', { type: 'warning'}).then(() => {
                            _this.$router.push('/');
                          }).catch(() => {
                    });
                }
        }
  }  
</script>

<style scoped>
    .sidebar {
        width: 10.6%;
        float: left;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu-item1{
        color: #409EFF;
    }
</style>