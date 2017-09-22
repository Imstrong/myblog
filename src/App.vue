<template>
    <el-row :gutter="20" style="{height:120px;}">
        <el-col :span="6" :offset="3" class="logo"><a href="#"><img src="../150597768652618.png" height="80px;"/></a></el-col>
        <el-col :span="3" :offset="4" class="nav-item">
            <el-input
                placeholder="搜索博文"
                icon="search">
            </el-input>
        </el-col>
        <el-col :span="2" class="nav-item"><router-link to="/file"><div class="bb">归档</div></router-link></el-col>
        <el-col :span="2" class="nav-item"><router-link to="/timeline"><div class="bb">时间轴</div></router-link></el-col>
        <el-col :span="2" class="nav-item"><router-link to="/about"><div class="bb">关于我</div></router-link></el-col>
    </el-row>
</template>
<script>
    export default {
        name:'el-navbar',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .nav-item{
        text-align:center;
        line-height:30px;
        margin-top:40px;
    }
    .bb{
        position: relative;
        width: 90%;
        height: 90%;
    }

    .bb:before{
        content:'';
        width:3px;
        height:1px;
        display:block;
        position:absolute;
        top:-1px;
    }
    .bb:after{
        content:'';
        width:3px;
        height:1px;
        display:block;
        position:absolute;
        bottom:-1px;
    }
    .bb:hover:before{
        content: "";
        display: block;
        position: absolute;
        width:100%;
        height:1px;
        /*width:220px;*/
        /*height:220px;*/
        top: -1px;
        border-top:1px #00FF00 solid;
        border-bottom:1px #00FF00 solid;
        z-index:10;
        -webkit-animation: clipAni .2s infinite linear;
        animation-iteration-count:1;
    }
    .bb:hover:after{
         content: " ";
         display: block;
         position: absolute;
         width:100%;
         height:1px;
        border-top:1px #00FF00 solid;
        border-bottom:1px #00FF00 solid;
         /*width:220px;*/
         /*height:220px;*/
         bottom: -1px;
         z-index:10;
         -webkit-animation: clipAni .2s infinite linear;
        animation-iteration-count:1;
     }
    /*.bb:before{
        -webkit-animation-delay: -2s;
    }*/
    @keyframes  clipAni{
        from{
            width:0px;
            left:50%;
        }
        to{
            width:100%;
            left:0;
        }
        /*0%,100%{
            clip:rect(0px,220px,220px,217px);
        }*/
    }
</style>