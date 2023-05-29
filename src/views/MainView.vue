<script setup>

import CardCategorie from '../components/CardCategorie.vue';
import CardList from '../components/CardList.vue';
import { RouterLink } from 'vue-router'

import { computed, ref,reactive} from 'vue';

import {Plus} from '@element-plus/icons-vue';
import ModalCategorie from '../components/ModalCategorie.vue';


const categories = ref([
    {
        name: 'categorie 1',
        cant: '30',
        state: 'true',
        color: 'red',
    },
    {
        name: 'categorie 2',
        cant: '0',
        state: 'true',
        color: 'red'
    },
    {
        name: 'categorie 3',
        cant: '30',
        state: 'true',
        color: 'red'
    },
    {
        name: 'categorie 4',
        cant: '30',
        state: 'true',
        color: 'red'
    }
])

const categorieList = computed(()=> categories.value)

// var count=4
// const newCategory =ref([''])

// const addCategoria =()=>{
//   const name = newCategory.value.trim();
//     if (name  !== '') {
//       categories.value.push({
//         id: count++,
//         name: name,
//         // state: false,
//         color: color1,
//       });
//       newCategory.value = '';
//     }
//   }

// funciones para tareas
const task=ref([{
    id: 0,
    name:'tarea 1',
    state: 'false'    
},
{
    id: 1,
    name:'tarea 2',
    state: 'false'
},
{
    id: 2,
    name:'tarea 3',
    state: 'false'
},
{
    id: 3,
    name:'tarea 4',
    state: 'false'
},
{
    id: 4,
    name:'tarea 5',
    state: 'false'
}

])

const newTask =ref([''])
var count = 5

// Funcion añadir tarea
const addTask=()=> {
    const taskName = newTask.value.trim();
    if (taskName !== '') {
      task.value.push({
        id: count++,
        name: taskName,
        state: false,
      });
      newTask.value = '';
    }
  }

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
        <h3 style="color: #585D66;">Categorias </h3>
        <div>

            <el-scrollbar>
                 <div class="scrollbar-flex-content">
                    <!-- <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                    {{ item }}
                    </p> -->
                    <div v-for="item in categories" :key="item" class="scrollbar-demo-item">
                        <CardCategorie
                        :title="item.name"
                        :task="item.cant"
                        />
                    </div>
                 </div>
             </el-scrollbar>
        </div>
    </div>
    <div>
        <h3 style="color: #585D66;">Lista de tareas</h3>
        <div class="input-container">
            <el-input v-model="newTask" placeholder="Ingrese nueva tarea" />
            <el-button @click="addTask" type="primary" plain>Añadir tarea</el-button>
        </div>
        <div>
            <el-scrollbar height="400px">
             <div v-for="item in task" :key="item" class="scrollbar-vertical">
                <CardList
                :id="item.id"
                :title="item.name"
                @deleteTask="deleteTask"
                @deleteTaskDelay="deleteTaskDelay"
                />
             </div>
            </el-scrollbar>
        </div>
    </div>
    </div>

    <ModalCategorie
    :name="name"
    @addCategoria="addCategoria"
    />
    
    <div style="text-align: center;">
        <RouterLink to="/add">
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
  width: 180px;
  margin: 10px;
  text-align: center;
  border-radius: 16px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
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