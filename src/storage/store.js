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
        { id:1, nombre: "Tarea 1", estado: "pendiente" },
        { id:2, nombre: "Tarea 2", estado: "completada" }
      ]
    },
    {
      id: 2,
      titulo: "Categoría 2",
      cantidadTareas: 1,
      color: "azul",
      estado: "pendiente",
      tareas: [{id:1, nombre: "Tarea 3", estado: "pendiente" }]
    }
  ]
});

export default store;
