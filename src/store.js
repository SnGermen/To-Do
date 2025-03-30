import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [] // Должен быть массив
    };
  },
  mutations: {
    pushTask(state, task) {
      if (typeof task === "string") { // ✅ Проверяем, является ли task строкой
        state.tasks.push(task);
      } else {
        console.error("❌ Ошибка: task не является строкой!", task);
      }
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1)
    },

  },
  actions: {
    addTask({ commit }, task) {
      if (typeof task !== "string") {
        console.error("❌ Ошибка: task должен быть строкой, получено:", task);
        return;
      }
      if (task.trim() !== "") {
        commit("pushTask", task.trim()); // ✅ Обрабатываем строку перед отправкой
      }
    },
    deleteTask({ commit }, index) {
      commit("removeTask", index)
    },

  },
  getters: {
    allTasks: (state) => state.tasks
  }
});
