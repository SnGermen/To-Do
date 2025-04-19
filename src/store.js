import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [], // Должен быть массив
    };
  },
  mutations: {
    pushTask(state, taskText) {
      if (typeof taskText === "string") {
        state.tasks.push({ text: taskText, isChecked: false }); // добавляем как объект
      } else {
        console.error("❌ Ошибка: task не строка", taskText);
      }
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    },
    toggleTaskChecked(state, index) {
      if (state.tasks[index]) {
        state.tasks[index].isChecked = !state.tasks[index].isChecked;
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      if (typeof task !== "string") {
        console.error("❌ Ошибка: task должен быть строкой");
        return;
      }
      if (task.trim()) {
        commit("pushTask", task.trim());
      }
    },
    deleteTask({ commit }, index) {
      commit("removeTask", index);
    },
    toggleCheckbox({ commit }, index) {
      commit("toggleTaskChecked", index);
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
    checkedTasks: (state) => state.tasks.filter(task => task.isChecked)
  }
});
