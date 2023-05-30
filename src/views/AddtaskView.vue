<script setup>
import {ref} from 'vue'

import store from '../storage/store';
import {Plus, CloseBold} from '@element-plus/icons-vue'

const taskName =ref([''])
const categoryId=ref('')

var key=1;
// Funcion añadir tarea
const addTask=()=> {
    const selectedCategory = store.categorias.find(categoria => categoria.id === categoryId.value);
    if (selectedCategory && taskName.value.trim() !== '') {
    selectedCategory.tareas.push({
      idTask: key++,
      idCategoria: categoryId.value,
      nombre: taskName.value.trim(),
      state: 'false',
    });
    
    selectedCategory.cantidadTareas++;

    taskName.value = '';
    console.log(store.categorias);
  }
  }

</script>

<template>
    <div style="text-align: right;">
        <RouterLink to="/">
          <el-button  size="large" :icon="CloseBold" circle></el-button>
        </RouterLink>
    </div>
    
    <div><h1 style="color: #585D66;">Agregar nueva tarea en: {{categoryId}}</h1></div> 
    <div class="block">
            <div style="margin-bottom: 16px;">
                <el-select v-model="categoryId" style="width: 100%;" placeholder="Selecciona una categoría" size="large">
                <el-option
                    v-for="item in store.categorias"
                    :key="item.id"
                    :label="item.titulo"
                    :value="item.id"
                    />
                </el-select>
            </div>
        
            <div class="input-container" style="margin-bottom: 16px;">
                 <el-input v-model="taskName" placeholder="Ingrese nueva tarea" />
                
            </div> 
            
            

            <div style="margin-bottom: 16px; text-align: right;">
                <el-button @click="addTask" :icon="Plus" type="primary"  style="border-radius: 16px;">Añadir tarea</el-button>
            </div>
    </div>
    
</template>

<style scoped>

</style>