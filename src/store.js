import { createStore } from "vuex";
import { saveTasks, loadTasks } from "./db";

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
        saveTasks(state.tasks);
      } else {
        console.error("❌ Ошибка: task не строка", taskText);
      }
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
      saveTasks(state.tasks);
    },
    toggleTaskChecked(state, index) {
      if (state.tasks[index]) {
        state.tasks[index].isChecked = !state.tasks[index].isChecked;
        saveTasks(state.tasks);
      }
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async loadTasksFromDB({ commit }) {
      const tasks = await loadTasks();
      commit("setTasks", tasks);
    },
    // остальные как есть:
    addTask({ commit }, task) {
      if (typeof task !== "string") return;
      if (task.trim()) commit("pushTask", task.trim());
    },
    deleteTask({ commit }, index) {
      commit("removeTask", index);
    },
    toggleCheckbox({ commit }, index) {
      commit("toggleTaskChecked", index);
    }
  },

  getters: {
    allTasks: (state) => state.tasks,
    checkedTasks: (state) => state.tasks.filter(task => task.isChecked)
  }
});
