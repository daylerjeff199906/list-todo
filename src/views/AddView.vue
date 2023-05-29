<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
import {CloseBold} from '@element-plus/icons-vue';

const newCategoryName = ref('');
const newCategory = ref({
  name: '',
  cant: '0',
  state: 'true',
  color: '#409EFF',
});

const addCategoria = () => {
  if (newCategoryName.value.trim() !== '') {
    newCategory.value.name = newCategoryName.value.trim();
    categories.value.push(newCategory.value);
    newCategoryName.value = '';
    newCategory.value = {
      name: '',
      cant: '0',
      state: 'true',
      color: '#409EFF',
    };
  }
};

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
      <!-- <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :size="size"
      /> -->
      <div class="demo-color-block">
        <span class="demonstration">Selecciona un color</span>
        <el-color-picker v-model="newCategory.color" />
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