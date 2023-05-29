<script setup>
import MainView from '../views/MainView.vue';
import {RouterView} from 'vue-router'
</script>

<template>
    <el-row :gutter="20" justify="center">
        <el-col :span="16">
            <div class="common-layout">
                <el-container>
                 <el-header>
                    Header

                  </el-header>
                  <el-main>
                     <RouterView/>
                  </el-main>
                  <el-footer>
                    Footer

                  </el-footer>
                </el-container>
            </div>
        </el-col>
    </el-row>
  </template>
  
<style scoped>
.common-layout{
  font-family: Roboto;
}
</style>