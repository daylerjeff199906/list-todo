<script setup>
import { defineProps,ref} from 'vue';

const props = defineProps({
    id: Number,
    title:{
        type: String,
        default:'Nombre de categoria'
    },
    task:{
        type: Number,
        default: 0
    },
    color: {
      type: String,
      default: '#E866C5'
    }
})
</script>

<template>
    <el-card class="box-card" style="border-radius: 16px; text-align: left;">
        <div 
        style="color: #585D66; font-size: medium; font-weight: bold;"
        >{{task}} tareas</div>
        <div
        style="color: #012361; font-size: 24px; font-weight: bold;"
        >{{title}}</div>
        <div class="demo-progress">
             <el-progress 
             :percentage="task" 
             :text-inside="true"
             :color="color"
             />
        </div>
    </el-card>
  </template>
  
  <style>

  .text {
    font-size: 14px;
  }


  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 180px;
  }

     .demo-progress .el-progress--line {
    margin-bottom: 8px;
    margin-top: 8px;
    }
  </style>
  