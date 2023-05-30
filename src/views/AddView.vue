<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
import {CloseBold} from '@element-plus/icons-vue';

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
      <el-input v-model="newCategoryName" placeholder="Nombre de categoria" />
      <div class="demo-color-block">
        <span class="demonstration">Selecciona un color</span>
        <el-color-picker v-model="newCategorycolor" />
      </div>
      <el-button 
      type="primary" 
      @click="addCategoria"
      plain
      >Crear categoria</el-button>
    </div>
</template>

<style scoped>
.block {
  display: flex; 
  align-items: center;
  gap: 8px;
  margin-bottom: 16px; 
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