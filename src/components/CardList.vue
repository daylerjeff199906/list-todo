<script setup>
// import { defineProps} from 'vue';
import {Delete} from '@element-plus/icons-vue';
import { reactive, defineProps } from 'vue';
import store from "../storage/store"

//props
const {id,idCategoria,title} = defineProps({
    id:  Number,
    idCategoria: Number,
    title:{
        type: String,
        default: 'Nombre de tarea'
    }
})

  const deleteTask = () => {
    store.deleteTask(idCategoria, id);
  };

  const deleteTaskDelay = () => {
    setTimeout(() => {
     store.deleteTaskDelay(idCategoria, id);
    }, 5000);
  };

</script>

<template>
    <el-card class="box-card" style="border-radius: 16px;">
        <div style="text-align:right;">
          <el-button 
          type="danger"
          @click="deleteTask"
          :icon="Delete"
          circle>
         </el-button>
        </div>
        <div  style="text-align:left;" class="custom-label">
            <el-checkbox
            v-model="checked1" 
            size="large"
            @change="deleteTaskDelay"
            >
            <template v-slot="{ checked }">
              <label class="custom-label">
                <span :checked="checked">{{ title }}</span>
               </label>
            </template>
            </el-checkbox>
        </div>
    </el-card>
  </template>
  
  <style>

  .text {
    font-size: 16px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 100%;
  }

  .custom-label span {
  font-size: 28px;
  }
  
  .el-checkbox.el-checkbox--large span {
  margin-left: 4px; 
  }


  .el-checkbox.el-checkbox--large .el-checkbox__inner {
    transform: scale(1.5); 
    border-radius: 50%;
    border: 2px solid ;
  }


  </style>
  