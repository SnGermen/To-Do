<template>
  <div class="footer">
    <div class="task_input">
      
      <input 
        v-model="task" 
        class="input_text" 
        type="text" 
        placeholder="Enter" 
        @keyup.enter="addTaskHandler"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FooterComponent",
  data() {
    return {
      task: "", // Локальная переменная для ввода
    };
  },
  methods: {

    ...mapActions(["addTask"]),
    addTaskHandler() {
      if (typeof this.task !== "string") {
        console.error("❌ Ошибка: task должен быть строкой, получено:", this.task);
        return;
      }
      if (this.task.trim() !== "") {
        this.addTask(this.task.trim()); // ✅ Передаем точно строку
        this.$emit("toggleTaskDiv", true); // Эмитим событие с состоянием
        this.task = ""; // ✅ Очищаем поле ввода
      }
    }
  }
};
</script>


<style scoped>
/* Минимальное оформление */
.task_list {
  margin-top: 10px;
}

.addedTask {
  background: #444;
  color: white;
  padding: 5px;
  margin-top: 5px;
}
.footer {
  background-color: rgb(28, 29, 29);
  padding: 10px;
  text-align: center;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.task_input {
  display: flex;
  align-items: center;
  background-color: rgb(40, 40, 41);
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
}


.input_text {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 5px;
}

.input_text::placeholder {
  color: rgb(120, 140, 222);
}
</style>
