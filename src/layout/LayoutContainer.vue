<script setup>
import HeaderView from '../components/HeaderView.vue';
import {RouterView} from 'vue-router'
</script>

<template>
    <el-row :gutter="20" justify="center">
        <el-col :span="16">
            <div class="common-layout">
                <el-container>
                 <el-header>
                    <HeaderView/>
                  </el-header>
                  <el-main>
                     <RouterView/>
                  </el-main>
                </el-container>
            </div>
        </el-col>
    </el-row>
  </template>
  
<style scoped>
.common-layout{
  /* font-family: Poppins,; */
  font-family: Roboto;
}
</style>