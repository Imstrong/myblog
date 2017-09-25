<template>
    <div class="content">
        <div class="content-left">
            <el-collapse accordion>
                <el-collapse-item title="java" name="1">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="jvm"><router-link to="/file/userhome">userhome</router-link></el-collapse-item>
                        <el-collapse-item title="源码解析">test</el-collapse-item>
                        <el-collapse-item title="java核心">test</el-collapse-item>
                        <el-collapse-item title="多线程">test</el-collapse-item>
                        <el-collapse-item title="分布式">test</el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                <el-collapse-item title="C,C++" name="2">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item>test</el-collapse-item>
                        <el-collapse-item>test</el-collapse-item>
                        <el-collapse-item>test</el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                <el-collapse-item title="数据结构和算法" name="3">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item>test</el-collapse-item>
                        <el-collapse-item>test</el-collapse-item>
                        <el-collapse-item>test</el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
                <el-collapse-item title="设计模式" name="4">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="jvm">test</el-collapse-item>
                        <el-collapse-item title="源码解析">test</el-collapse-item>
                        <el-collapse-item title="test">test</el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="content-right"><router-view></router-view></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: '1'
            };
        }
    }
</script>
<style>
    .content .content-left{
        width:40%;
        float:left;
    }
    .content .content-right{
        width:60%;
        float:left;
        height:400px;
    }
    .el-collapse-item__content{
        padding:0 0 0 10px;
    }
</style>