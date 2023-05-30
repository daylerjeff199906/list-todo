<script setup>

import CardCategorie from '../components/CardCategorie.vue';
import CardList from '../components/CardList.vue';
import { RouterLink } from 'vue-router'

import { computed, ref,reactive} from 'vue';

import {Plus} from '@element-plus/icons-vue';


import store from "../storage/store"

// eliminar tarea con y sin demora
    const deleteTask = (id)=>{
      task.value.splice(id,1)
    }
  
    const deleteTaskDelay=(item)=> {
      setTimeout(() => {
        task.value.splice(item, 1);
      }, 10000);
    }  
</script>

<template>

    <div>
        <div>
        <h1 style="font-size: 48px; font-weight: 900; color: #230C61;">Lista de pendientes</h1>
    </div>
    <div>
        <div style="display: flex; align-items: center;">
          <span style="color: #585D66; font-size: 18px; font-weight: bold; flex: 1;">Categorias </span>
        <RouterLink to="/Add">
            <el-button type="primary" :icon="Plus" style="border-radius: 16px;" plain>Añadir Categoría</el-button>
        </RouterLink>
        </div>
        <div>

            <el-scrollbar>
                 <div class="scrollbar-flex-content">
                    <div v-for="item in store.categorias" :key="item.id" class="scrollbar-demo-item">
                        <CardCategorie
                        :title="item.titulo"
                        :task="item.cantidadTareas"
                        :color="item.color"
                        />
                    </div>
                 </div>
             </el-scrollbar>
        </div>
    </div>

    <div>
        <h3 style="color: #585D66;">Lista de tareas</h3>
        <div>
            <el-scrollbar height="400px">

             <div v-for="key in store.categorias.flatMap(categoria => categoria.tareas)" 
                :key="key.id" 
                class="scrollbar-vertical">
                
                <CardList
                :id="key.id"
                :title="key.nombre"
                @deleteTask="deleteTask"
                @deleteTaskDelay="deleteTaskDelay"
                />
             </div>
            </el-scrollbar>
        </div>
    </div>
    </div>

    <Modaltask
    :name="name"
    @addCategoria="addCategoria"
    />
    
    <div style="text-align: center;">
        <RouterLink to="/AddTask">
            <el-button type="primary" size="large" :icon="Plus" circle></el-button>
        </RouterLink>
    </div>

</template>

<style scoped>
.input-container {
  display: flex; 
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.scrollbar-flex-content {
  display: flex;
  height: auto;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 16px;
}

.scrollbar-vertical {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  text-align: center;
  border-radius: 16px;
}
</style>