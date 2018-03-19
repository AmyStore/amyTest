<template>
  <div class="hello">
      <header> 
          <ul>
            <li>HELLO</li>          
            <li><p v-on:click='toInfo'>WLECOME</p></li>
            <li><p>TO</p></li>
            <li><p>AMY</p></li>
            <li><p>STORE</p></li>
          </ul>
      </header>
      <div class="content">
          <el-carousel :interval="2000" arrow="always" height='750px'>
                <el-carousel-item>
                   <img width="100%" height="100%" src="../assets/login/timg (7).jpg"/>
                </el-carousel-item>
                <el-carousel-item>
                   <img width="100%" height="100%" src="../assets/login/timg (4).jpg"/>
                </el-carousel-item>             
          </el-carousel>
          <div class="newsBox">
              <div class="imgBox">
                  <img src="../assets/login/timg (5).jpg">
              </div>
              <div class="imgBox">
                  <img src="../assets/login/timg (5).jpg">
              </div>
              <div class="imgBox">
                  <img src="../assets/login/timg (5).jpg">
              </div>
              <div class="imgBox">
                  <img src="../assets/login/timg (5).jpg">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import router from "../router/index.js"
export default {
     methods: {
            toInfo: function(){
                this.$router.push('info');
            }
        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;padding: 0;
  }
  body {
    margin:0 !important;padding:0;
    font-family: \\5FAE\8F6F\96C5\9ED1;
  }
  header{
    background-color: rgba(0,0,0,.3);
    width: 100%;height: 95px;
    position: fixed;
    top: 0;left: 0;
    z-index: 5;
  }
  header ul{
    height: 100%;
    list-style: none;
    width: 22%;
    display: flex;
    margin-left: 76%;
    align-items: center;
    justify-content: space-around;
    color: white;  
  }
  header ul li{
    cursor: pointer;
    position: relative;
  }
  header ul li p:after{
    content: "";
    width: 0px;
    height: 1px;
    background: orange;
    position: absolute;
    left: 50%;top: 135%;
    transition: all .8s;
  }
  header ul li p:hover:after{
    left: 0%;width: 100%;
  }
  header ul li:nth-child(1){
    color: orange;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .newsBox{
    width: 100%;height: 148px;
    marks: auto;
    display: flex;
    padding-bottom: 35px;
  }
  .newsBox>div{
    height: 100%;width: 560px;
    padding: 20px 8px;
    overflow: hidden;
  }
  .newsBox>div img{
    height: 100%;width: 100%;
    display: block;
    margin: auto;
    transition: all 0.6s;  
  }
  .newsBox>div img:hover{
     transform: scale(1.1); 
     transition: all 0.6s;  
  }
  .footer{
    width: 100%;height: 120px;
    background-color: black;
    text-align: center;
    color: white;
    font-size: 16px;
  }
  .footer p{
    line-height: 120px;
  }
</style>
