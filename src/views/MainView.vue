<script setup>

import CardCategorie from '../components/CardCategorie.vue';
import CardList from '../components/CardList.vue';
import { RouterLink } from 'vue-router'

import { computed, ref,reactive} from 'vue';

import {Plus} from '@element-plus/icons-vue';


import store from "../storage/store"

</script>

<template>

    <div>
        <div>
        <h1 style="font-size: 48px; font-weight: 900; color: #230C61;">What's up, joy!</h1>
    </div>
    <div>
        <div style="display: flex; align-items: center;">
          <span style="color: #BECBDF; font-size: 18px; font-weight: bold; flex: 1;">CATEGORIES </span>
        <RouterLink to="/Add">
            <el-button type="primary" size="large" :icon="Plus" style="border-radius: 16px; border-radius: 24px; background-color: #45A0F5; " >Add Categorie</el-button>
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
        <h3 style="color: #BECBDF;">TODAY'S TASK</h3>
        <div>
            <el-scrollbar height="400px">

             <div v-for="key in store.categorias.flatMap(categoria => categoria.tareas)" 
                :key="key.idTask" 
                class="scrollbar-vertical">
                
                <CardList
                :id="key.idTask"
                :title="key.nombre"
                :idCategoria="key.idCategoria"
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
            <el-button 
            type="primary" 
            size="large" 
            :icon="Plus"
            style="font-size: 24px; width: 48px; height: 48px; background-color: #45A0F5; ;"  
            circle></el-button>
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