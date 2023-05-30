<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
    <el-menu-item index="0">
        <el-icon :size="60"><Menu style="font-size: 32px;"/></el-icon>
    </el-menu-item>
    
      <div class="flex-grow" />
      <el-menu-item index="2"><el-icon :size="60"><Search style="font-size: 32px;"/></el-icon></el-menu-item>
      <el-menu-item index="1"><el-icon :size="60"><BellFilled style="font-size: 32px; "/></el-icon></el-menu-item>

    </el-menu>
  </template>

<script  setup>
import {ref} from 'vue'
import { ElIcon } from 'element-plus';
  

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>