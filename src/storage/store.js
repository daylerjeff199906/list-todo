import { reactive } from 'vue';

// Creamos un objeto reactive para almacenar los datos
const store = reactive({
  categorias: [
    {
      id: 1,
      titulo: "Categoría 1",
      cantidadTareas: 2,
      color: "#FA3CD0",
      estado: "pendiente",
      tareas: [
        { idTask:1,  idCategoria:  '', colorTask:'',  nombre: "Tarea 1", state: "false" },
        { idTask:2,  idCategoria: '', colorTask:'', nombre: "Tarea 2", state: "false" }
      ]
    },
    {
      id: 2,
      titulo: "Categoría 2",
      cantidadTareas: 1,
      color: "blue",
      estado: "pendiente",
      tareas: [{idTask:1, idCategoria: '', colorTask:'', nombre: "Tarea 3", state: "false" }]
    }
  ],
  
   // Eliminar una tarea
   deleteTask(categoriaId, tareaId) {
    const categoria = this.categorias.find(c => c.id === categoriaId);
    if (categoria) {
      const tareaIndex = categoria.tareas.findIndex(t => t.idTask === tareaId);
      if (tareaIndex !== -1) {
        categoria.tareas.splice(tareaIndex, 1);
        categoria.cantidadTareas = categoria.tareas.length;
      }
    }
  },

  // Eliminar una tarea con demora de 5 segundos
  deleteTaskDelay(categoriaId, tareaId) {
    setTimeout(() => {
    //  tarea.estado.value = true;
      this.deleteTask(categoriaId, tareaId);
    }, 500);
  }
  });

    // Asignar el idCategoria a cada tarea
  for (const categoria of store.categorias) {
    for (const tarea of categoria.tareas) {
     tarea.idCategoria = categoria.id;
    }
  }
  
  // Asignar el color del objeto padre a cada tarea
  for (const categoria of store.categorias) {
    for (const tarea of categoria.tareas) {
      tarea.colorTask = categoria.color;
     }
  }

export default store;
