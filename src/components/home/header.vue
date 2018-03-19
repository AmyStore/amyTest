<!-- 公用头部 -->
<template>
    <div class="header">
        <div class="logo">My Store Welcom !</div> 
    </div>
</template>
<script>
    import router from "../../router/index.js"
    export default {
        methods: {
            handleCommand(command) {               
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    router.push('/');
                }
            },          
        }
    }

</script>
<style scoped>
    .header {    
        box-sizing: border-box;
        width: 100%;
        height: 135px;
        font-size: 22px;
        line-height: 135px;
        color: #fff;
        background-color: #409EFF;
    }   
    .header .logo {
        float: left;
        width: 250px;
        text-align: center;
    }
    .loginout{
        text-align: center;
    }
    .user-info{
        float: right;
        padding: 0 70px;
        font-size: 16px;
        height: 100%;
        display: flex;
        width: 50px;
        align-items: center;
    }
    .user-info span:hover{
        cursor: pointer;
    }
    .user-info img{
        width: 40px;
        border-radius: 20px;
        height: 40px;
    }
</style>
