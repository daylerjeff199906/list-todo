<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
import {CloseBold,Plus} from '@element-plus/icons-vue';

import store from "../storage/store"

const newCategoryName = ref('');
const newCategorycolor =ref('#4E83FA');
var cantCategoria= store.categorias.length+1;
  
  const addCategoria = () => {
  if (newCategoryName !== '' && newCategorycolor !== '') {
    store.categorias.push({
      id: cantCategoria++,
      titulo: newCategoryName.value,
      cantidadTareas: 0,
      color: newCategorycolor.value,
      estado: false,
      tareas: []
    });
    newCategoryName.value = '';
    newCategorycolor.value = '#4E83FA';
    console.log(store.categorias)
    }
  }

</script>

<template>
    
        <div style="text-align: right;">
        <RouterLink to="/">
          <el-button  size="large" :icon="CloseBold" circle></el-button>
        </RouterLink>
    </div>
   <div><h1 style="color: #585D66;">Agregar nueva categoria</h1></div> 
   <div class="block">
      <el-input v-model="newCategoryName" size="large" placeholder="Nombre de categoria" />
      <div class="demo-color-block">
        <span class="demonstration">Color: </span>
        <el-color-picker v-model="newCategorycolor" size="large" />
      </div>  
    </div>
    <div style="text-align: right;">
      <el-button 
      type="primary"
      size="large"
      style="border-radius: 24px;"
      @click="addCategoria" 
      >Crear categoria <el-icon style="margin-left: 8px;"><Plus /></el-icon>
      </el-button>
    </div>
</template>

<style scoped>
.block {
  display: flex; 
  align-items: center;
  gap: 8px;
  margin-bottom: 20rem; 
}

.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}

</style>