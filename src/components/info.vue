<template>
     <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar> 
        <div class="content">
            <router-view></router-view>
        </div> 
    </div>
</template>

<script>
    import vHead from './home/header.vue';
    import vSidebar from './home/sidebar.vue';
    export default {
        components: {
            vHead,
            vSidebar
        },  
    }
</script>
<style scoped>
    .content{
        width: 89.4%;
        float: left;
    }
    .content p{
        text-align: center;
    }
</style>