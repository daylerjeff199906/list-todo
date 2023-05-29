<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const nameCategory =ref([''])
const color1 = ref('#409EFF')

const props = defineProps({
  name:String,
  color: String
})

const handleClose = (done: () => void) => {
ElMessageBox.confirm('Are you sure to close this dialog?')
  .then(() => {
    done()
  })
  .catch(() => {
    // catch error
  })
      }
</script>

<template>
    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button>
  
    <el-dialog
      v-model="dialogVisible"
      title="Agregar una nueva categoria"
      width="30%"
      color="#585D66"
      :before-close="handleClose"
    >
    <div class="block">
        <el-input :v-model="nameCategory"  placeholder="Nombre de categoria" />
        <div class="demo-color-block" style="margin-top: 16px;">
         <span class="demonstration">Selecciona un color</span>
         <el-color-picker v-model="color1" />
        </div>
    </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="$emit('addCategoria',name)">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  

  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }

  .block {
  gap: 8px;
  margin-bottom: 16px; 
}
.demo-color-block .demonstration {
  margin-right: 16px;
}

  </style>
  